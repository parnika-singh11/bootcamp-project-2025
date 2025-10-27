import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1> Parnika's Personal Website </h1>
      <nav className="navbar">
        <Link href="/index.html">Home</Link>
        <Link href="/blog.html">Blogs</Link>
         <Link href="/portfolio.html">Portfolio</Link>
        <Link href="/resume.html">Resume</Link>
        <Link href="/contact.html">Contact Me</Link>
      </nav>
    </header>
  );
}
