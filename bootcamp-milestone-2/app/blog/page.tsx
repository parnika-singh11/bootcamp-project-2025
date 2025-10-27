import BlogPreview from '@/components/blogPreview';
import Blogs from '@/app/blogData';

export default function Blog() {
 
  return (
    <>
      <main>
        <h1 className="page-title">Hello, world! This is my blog.</h1>

        <div id="blog-container">
            {Blogs.map(blog =>
          <BlogPreview
                key={blog.slug}
                title={blog.title}
                data={blog.data}
                image={blog.image}
                imageAlt={blog.imageAlt}
                description={blog.description}
                slug={blog.slug}
            />
            )}


        </div>
      </main>

      <footer className="footer">
        © 2025 Parnika's Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
