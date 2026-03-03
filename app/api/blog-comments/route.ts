import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { prisma } from "@/lib/db";
import { isFeatureEnabled } from "@/lib/features";

export async function POST(request: NextRequest) {
  // Feature flag check
  if (!isFeatureEnabled("BLOG_COMMENTS_ENABLED")) {
    return NextResponse.json(
      { error: "Blog comments are currently disabled" },
      { status: 503 }
    );
  }

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
    const { postSlug, userId, name, profileUrl, content } = body;

    // validate data fields
    if (!postSlug || !userId || !name || !profileUrl || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify the user ID matches the authenticated user
    if (userId !== session.user.sub) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Create new blog comment in Prisma
    const comment = await prisma.blogComment.create({
      data: {
        postSlug,
        userId,
        name,
        profileUrl,
        content
      }
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error("Error creating blog comment:", error);
    return NextResponse.json(
      { error: "Error creating comment" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Feature flag check
  if (!isFeatureEnabled("BLOG_COMMENTS_ENABLED")) {
    return NextResponse.json(
      { error: "Blog comments are currently disabled" },
      { status: 503 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const postSlug = searchParams.get("postSlug");

    if (!postSlug) {
      return NextResponse.json(
        { error: "postSlug is required" },
        { status: 400 }
      );
    }

    const comments = await prisma.blogComment.findMany({
      where: {
        postSlug
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog comments:", error);
    console.error(
      "Error details:",
      error instanceof Error ? error.message : String(error)
    );
    return NextResponse.json(
      {
        error: "Error fetching comments",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
