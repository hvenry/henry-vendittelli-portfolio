import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

// Comments are user-generated; never prerender or cache this route
export const dynamic = "force-dynamic";

const CHAR_LIMIT = 25;

export async function POST(request: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const content = typeof body.content === "string" ? body.content.trim() : "";

    if (content.length > CHAR_LIMIT) {
      return NextResponse.json({ error: "Comment too long" }, { status: 400 });
    }

    const existingComment = await prisma.comment.findFirst({
      where: { userId: user.id }
    });

    if (existingComment) {
      return NextResponse.json(
        { error: "You have already signed the guestbook" },
        { status: 409 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        userId: user.id,
        name: user.username ?? user.firstName ?? "anonymous",
        profileUrl: user.imageUrl,
        content
      }
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Error creating comment" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Error fetching comments" },
      { status: 500 }
    );
  }
}
