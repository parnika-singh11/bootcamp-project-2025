import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  date: Date;
};

type Blog = {
  title: string;
  data: string;
  description: Date;
  image: string;
  image_alt: string;
  slug: string;
  comments: IComment[];
};


const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, required: true, default: new Date() }
});


const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  data: { type: String, required: true },
  description: { type: Date, required: false, default: new Date() },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  slug: { type: String, required: true },
  comments: [commentSchema] 
});

// Model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;