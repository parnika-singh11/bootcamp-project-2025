export interface Blog {
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
    image: "../bootcamp-milestone-1/images/images.png",
    imageAlt: "helloworld",
    slug: "my-blog-1",
  },
  {
    title: "Blog 2: Hack4Impact bootcamp",
    data: "Hello, world! This is my second blog. I'm creating this whole website and all the blogs with the help of the Hack4Impact starter pack and bootcamp. So far, things have been really interesting. Typescript is quite fun!",
    description: "Posted: 10/13/2025",
    image: "../bootcamp-milestone-1/images/Typescript.ApdKzZht.png",
    imageAlt: "typescript",
    slug: "my-blog-2",
  },
];


export default Blogs;