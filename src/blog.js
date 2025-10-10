var Blogs = [
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
var blogContainer = document.getElementById('blog-container');
var blog;
function printBlogs() {
    for (var _i = 0, Blogs_1 = Blogs; _i < Blogs_1.length; _i++) {
        blog = Blogs_1[_i];
        var d = document.createElement("div");
        var title = document.createElement("h1");
        title.textContent = blog.title;
        var description = document.createElement("p");
        description.textContent = blog.description;
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        d.appendChild(title);
        d.appendChild(description);
        d.appendChild(image);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(d);
    }
}
printBlogs();
