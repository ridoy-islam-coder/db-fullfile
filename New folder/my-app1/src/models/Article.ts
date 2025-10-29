import { Article, ArticleMeta } from "@/types/article";
import mongoose, { Document, mongo, Schema } from "mongoose";


export interface IArticle extends Omit<Article, "_id">,Document {
    _id: string;
      meta:ArticleMeta;
}


const ArticleSchema = new Schema<IArticle>({
    title: {type: String, required: true},
    image: {type: String, required: true},
    excerpt: {type: String},
    caption: {type: String, required: true},
    meta: {
        author: {type: String, required: true},
        category: {type: String, required: true},
        date: {type: String, required: true},
        readingTime: {type: String, required: true},
        displaySection: {type: String},
        authorAvataUrl: {type: String, required: true}, 
         
    },
    tags: {type: [String]}
    
},{
    timestamps: true,versionKey:false
});

export  const ArticleModel=mongoose.model<IArticle>("Article",ArticleSchema);