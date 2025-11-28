import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"

type IParams = {
  params: {
    slug: string
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.searchParams.get('slug');

  if (!slug) return NextResponse.json('Slug missing.', { status: 400 });

  await connectDB();

  try {
    const blog = await blogSchema.findOne({ slug });
    if (!blog) return NextResponse.json('Blog not found.', { status: 404 });
    return NextResponse.json(blog);
  } catch (err) {
    console.error(err);
    return NextResponse.json('Blog not found.', { status: 404 });
  }
}
