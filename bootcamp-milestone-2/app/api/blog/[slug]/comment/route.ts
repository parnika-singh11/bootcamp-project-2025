import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';

export async function POST(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
  const body = await req.json();
  const params = await context.params;  // ✅ Await the params promise
  const BlogSlug = params.slug;

  if (!body?.user || !body?.comment) {
    return NextResponse.json({ error: 'User and comment are required' }, { status: 400 });
  }

  await connectDB();

  const blog = await Blog.findOne({ slug: BlogSlug });
  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  const newComment = {
    user: body.user,
    comment: body.comment,
    date: new Date()
  };

  blog.comments.push(newComment);
  await blog.save();

  return NextResponse.json({ message: 'Comment added successfully!', comment: newComment });
}