import mongoose, { Schema, Document } from "mongoose";


export type IComment = {
  user: string;
  comment: string;
  date: Date;
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, required: true, default: () => new Date() }
});


export type BlogType = Document & {
  title: string;
  data: string;
  description: Date;
  image: string;
  imageAlt: string;   // matches MongoDB document
  slug: string;
  comments: IComment[];
};

const blogSchema = new Schema<BlogType>({
  title: { type: String, required: true },
  data: { type: String, required: true },
  description: { type: Date, required: false, default: () => new Date() },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },  // camelCase matches existing DB
  slug: { type: String, required: true },
  comments: [commentSchema]
});

const Blog = mongoose.models['blogs'] || mongoose.model<BlogType>('blogs', blogSchema);

export default Blog;
