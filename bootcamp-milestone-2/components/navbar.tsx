import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.navbar}>
      <h1> Parnika's Personal Website </h1>
      <nav className="navbar">
        <Link href="../../bootcamp-milestone-1/index.html">Home</Link>
        <Link href="../../bootcamp-milestone-1/blog.html">Blogs</Link>
         <Link href="../../bootcamp-milestone-1/portfolio.html">Portfolio</Link>
        <Link href="../../bootcamp-milestone-1/resume.html">Resume</Link>
        <Link href="../../bootcamp-milestone-1/contact.html">Contact Me</Link>
      </nav>
    </header>
  );
}
