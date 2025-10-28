export interface ArticleMeta{
   author: string;
   category: string;
   date: string;
  readingTime: string;
  displaySection?: string;
}   



export interface Article{
    _id: string;
    title: string;
    image: string;
    excerpt?: string;
    caption: string;
    meta:ArticleMeta

}