import BlogPreview from '@/components/blogPreview';
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";

async function getBlogs() {
  await connectDB();
  try {
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <main>
      <h1 className="page-title">Hello, world! This is my blog.</h1>

      <div id="blog-container">
        {blogs?.map(blog => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            data={blog.data}
            image={blog.image}
            imageAlt={blog.imageAlt}
            description={blog.description.toString()}
            slug={blog.slug}
          />
        ))}
      </div>

      <footer className="footer">
        © 2025 Parnika's Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}
