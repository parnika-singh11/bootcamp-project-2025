import React from "react";
import connectDB from "@/database/db"; // adjust path to db.ts
import BlogModel from "@/database/blogSchema"; // renamed import to avoid conflict
import Comment from "@/components/comment";
import { IComment } from "@/database/blogSchema";

type Props = {
  params: Promise<{ slug: string }> 
};

async function getBlog(slug: string) {
  try {
    await connectDB();
    
    const blog = await BlogModel.findOne({ slug: slug });
    console.log("Found blog:", blog);
    
    // Convert Mongoose document to plain object
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
      {blog.image && <img src={blog.image} alt={blog.image_alt} />}
      {/* Comments Section */}
      <div>
  <h2>Comments</h2>
  {console.log("Comments array:", blog.comments)}
  {console.log("Comments length:", blog.comments?.length)}
  {blog.comments && blog.comments.map((comment: IComment, index: number) => {
    console.log("Rendering comment:", comment);
    return <Comment key={index} comment={comment} />;
  })}
</div>
    </div>
  );
}