import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getSession } from "@auth0/nextjs-auth0"

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const session = await getSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const { userId, name, profileUrl, content } = body;


    // validate data fields
    if (!userId || !name || !profileUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify the user ID matches the authenticated user
    if (userId !== session.user.sub) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      );
    }
    

    // Check if user already commented
    const existingComment = await prisma.comment.findFirst({
      where: { userId }
    });

    if (existingComment) {
      return NextResponse.json(
        { error: "You have already signed the guestbook" },
        { status: 409 }
      );
    }


    // Create new comment in Prisma
    const comment = await prisma.comment.create({
      data: {
        userId,
        name,
        profileUrl,
        content: content || ""
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
        createdAt: 'desc'
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
