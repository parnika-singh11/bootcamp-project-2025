import ts = require("typescript");

type Blog = {
    title: string;
    data: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};
const Blogs: Blog[] = [
    {
        title: "Hello, world!",
        data: "This is my blog!",
        description: "This is my first blog!",
        image: "/Users/parnikasingh/Downloads/images.png",
        imageAlt: "helloworld",
        slug: "my-blog-1",
    },
    {
        title: "Hack4Impact bootcamp",
        data: "this is my second blog!",
        description: "Typescript is fun!",
        image: "/Users/parnikasingh/Downloads/Typescript.ApdKzZht.png",
        imageAlt: "typescript",
        slug: "my-blog-2",
    },

];
const blogContainer = document.getElementById('blog-container');
var blog:any;
function printBlogs() {
    for(blog of Blogs){
        
        const link = document.createElement("a");
        link.href = `blogs/${blog.slug}.html`;
        const d = document.createElement("div");

        const title = document.createElement("h1");
        title.textContent = blog.title;

        const description= document.createElement("p");
        description.textContent = blog.description;

        const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        image.classList.add("blog-image"); 




        d.appendChild(title);
        d.appendChild(description);
        d.appendChild(image);

        link.appendChild(d);
        blogContainer?.appendChild(link);

    }

    
 }
 printBlogs();
