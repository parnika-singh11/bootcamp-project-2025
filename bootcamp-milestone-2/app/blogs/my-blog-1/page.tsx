import React from "react";
import Blogs from '@/app/blogData';
export default function MyBlog1() {
  return (
    <div>

      <main>
        <h1>{Blogs[0].title}</h1>
        <p>{Blogs[0].description}</p>
        <img src="/images/images.png" alt="helloworld" className="blog-image" />
        <p> 
          {Blogs[0].data}
        </p>
      </main>

      <footer className="footer">
        © 2025 Parnika's Personal Website | All Rights Reserved
      </footer>
    </div>
  );
}
