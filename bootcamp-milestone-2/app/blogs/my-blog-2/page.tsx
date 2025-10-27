import React from "react";
import Blogs from '@/app/blogData';
export default function MyBlog2() {
  return (
    <div>

      <main>
        <h1>{Blogs[1].title}</h1>
        <p>{Blogs[1].description}</p>
        <img src="/images/Typescript.ApdKzZht.png" alt="helloworld" className="blog-image" />
        <p> 
          {Blogs[1].data}
        </p>
      </main>

      <footer className="footer">
        © 2025 Parnika's Personal Website | All Rights Reserved
      </footer>
    </div>
  );
}
