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
    data: "Hello, world! This is my first blog ever. I'm excited for what awaits us in the future of blogs!",
    description: "Posted: 10/13/2025",
    image: "../images/images.png",
    imageAlt: "helloworld",
    slug: "my-blog-1",
  },
  {
    title: "Blog 2: Hack4Impact bootcamp",
    data: "Hello, world! This is my second blog. I'm creating this whole website and all the blogs with the help of the Hack4Impact starter pack and bootcamp. So far, things have been really interesting. Typescript is quite fun!",
    description: "Posted: 10/13/2025",
    image: "../images/Typescript.ApdKzZht.png",
    imageAlt: "typescript",
    slug: "my-blog-2",
  },
];
const blogContainer = document.getElementById("blog-container");
const blogContainer1 = document.getElementById("blog-one");
const blogContainer2 = document.getElementById("blog-two");
var blog: any;

function printBlogs() {
  for (blog of Blogs) {
    const link = document.createElement("a");
    link.href = `blogs/${blog.slug}.html`;
    const d = document.createElement("div");
    const d1 = document.createElement("div");
    const d2 = document.createElement("div");


    const title = document.createElement("h1");
    title.textContent = blog.title;
    const description= document.createElement("p");
    description.textContent = blog.description;
    const data = document.createElement("p");
    data.textContent = blog.data
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.classList.add("blog-image"); 
    if(blogContainer){
        d.appendChild(title);
        link.appendChild(d);
        blogContainer.appendChild(link);
    }
    
    
    if(blog.slug === "my-blog-1"){ //only applicable for 2 blogs; can be implemented for any number of blogs by using `${}` index and slug
        const title1 = document.createElement("h1");
        title1.textContent = blog.title

        d1.appendChild(title1);
        d1.appendChild(description);
        d1.appendChild(image);
        d1.appendChild(data);

        blogContainer1?.appendChild(d1);
    }
    if(blog.slug === "my-blog-2"){
        const title2 = document.createElement("h1");
        title2.textContent = blog.title

        d2.appendChild(title2);
        d2.appendChild(description);
        d2.appendChild(image);
        d2.appendChild(data);

        blogContainer2?.appendChild(d2);
    }
    
  }
}
printBlogs();
