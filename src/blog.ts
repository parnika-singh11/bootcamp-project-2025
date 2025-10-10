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
        image: "",
        imageAlt: "",
        slug: "my-blog-1",
    },
    {
        title: "Hack4Impact bootcamp",
        data: "this is my second blog!",
        description: "Typescript is fun!",
        image: "",
        imageAlt: "",
        slug: "my-blog-2",
    },

];
const blogContainer = document.getElementById('blog-container');
var blog:any;
function printBlogs() {
    for(blog of Blogs){
        const d = document.createElement("div");

        const title = document.createElement("h1");
        title.textContent = blog.title;

        const description= document.createElement("p");
        description.textContent = blog.description;

        const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt




        d.appendChild(title);
        d.appendChild(description);
        d.appendChild(image);

        blogContainer?.appendChild(d);

    }

    
 }
 printBlogs();
