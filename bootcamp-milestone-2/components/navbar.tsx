import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1> Parnika's Personal Website </h1>
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/blog">Blogs</Link>
         <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact Me</Link>
      </nav>
    </header>
  );
}
