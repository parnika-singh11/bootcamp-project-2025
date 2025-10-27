import React from 'react';
import style from './blogPreview.module.css'
import { Blog } from "@/app/blogData"; // importing the type/interface we defined earlier

// Pass your props into the component here ↓↓↓
export default function BlogPreview(props: Blog) {
    return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <p>{props.description}</p>
      </div>
	</div>
  );
}
