

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
        title: "Blog 1: Hello, world!",
        data: "This is my blog!",
        description: "This is my first blog!",
        image: "images/images.png",
        imageAlt: "helloworld",
        slug: "my-blog-1",
    },
    {
        title: "Blog 2: Hack4Impact bootcamp",
        data: "this is my second blog!",
        description: "Typescript is fun!",
        image: "images/Typescript.ApdKzZht.png",
        imageAlt: "typescript",
        slug: "my-blog-2",
    },

];
const blogContainer = document.getElementById('blog-container');
console.log("blog container",blogContainer);

var blog:any;
function printBlogs() {
    console.log("this worked");
    for(blog of Blogs){
        
        const link = document.createElement("a");
        link.href = `blogs/${blog.slug}.html`;
        const d = document.createElement("div");

        const title = document.createElement("h1");
        title.textContent = blog.title;

        /*const description= document.createElement("p");
        description.textContent = blog.description;

        const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        image.classList.add("blog-image"); */




        d.appendChild(title);
    

        link.appendChild(d);
        blogContainer?.appendChild(link);

    }

    
 }
 printBlogs();
