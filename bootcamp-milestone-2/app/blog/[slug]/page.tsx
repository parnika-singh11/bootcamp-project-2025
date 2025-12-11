import React from "react";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import Comment from "@/components/comment";
import CommentForm from "@/components/commentForm";
import { IComment } from "@/database/blogSchema";

type Props = {
  params: Promise<{ slug: string }> 
};

async function getBlog(slug: string) {
  try {
    await connectDB();
    
    const blog = await BlogModel.findOne({ slug: slug });
    console.log("Found blog:", blog);
    
    return blog ? JSON.parse(JSON.stringify(blog)) : null;
  } catch (err) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;  
  const blog = await getBlog(slug);
  

  if (!blog) {
    return (
      <div>
        <h1>Blog post not found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }
  
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.data}</p>
      {blog.image && <img src={blog.image} alt={blog.imageAlt} />}
      
      {/* Comments Section */}
      <div>
        <h2>Comments</h2>
        
        {/* Comment Form */}
        <CommentForm slug={slug} />
        
        {/* Display Comments */}
        {blog.comments && blog.comments.map((comment: IComment, index: number) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}