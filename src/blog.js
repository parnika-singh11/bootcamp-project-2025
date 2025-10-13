var Blogs = [
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
var blogContainer = document.getElementById('blog-container');
console.log("blog container", blogContainer);
var blog;
function printBlogs() {
    console.log("this worked");
    for (var _i = 0, Blogs_1 = Blogs; _i < Blogs_1.length; _i++) {
        blog = Blogs_1[_i];
        var link = document.createElement("a");
        link.href = "blogs/".concat(blog.slug, ".html");
        var d = document.createElement("div");
        var title = document.createElement("h1");
        title.textContent = blog.title;
        /*const description= document.createElement("p");
        description.textContent = blog.description;

        const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        image.classList.add("blog-image"); */
        d.appendChild(title);
        link.appendChild(d);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(link);
    }
}
printBlogs();
