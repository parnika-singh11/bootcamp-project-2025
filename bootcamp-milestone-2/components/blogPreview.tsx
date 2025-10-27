import React from "react";
import style from "./blogPreview.module.css";
import Link from "next/link";
import { Blog } from "@/app/blogData"; // importing the type/interface

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogPreview}>
      <h3>
        <Link href={`/blogs/${props.slug}`}>
          {props.title}
        </Link>
      </h3>
      <p>{props.description}</p>
    </div>
  );
}
