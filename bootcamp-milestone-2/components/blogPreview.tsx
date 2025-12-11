import React from "react";
import style from "./blogPreview.module.css";
import Link from "next/link";

// Type for props based on your MongoDB schema
type BlogProps = {
  title: string;
  data: string;
  description: Date | string; // description is Date in MongoDB
  image: string;
  imageAlt: string;
  slug: string;
};

export default function BlogPreview(props: BlogProps) {
  return (
    <div className={style.blogPreview}>
      <h3>
        <Link href={`/blog/${props.slug}`}>
          {props.title}
        </Link>
      </h3>
      <p>{props.description instanceof Date ? props.description.toDateString() : props.description}</p>
    </div>
  );
}
