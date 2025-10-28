
export  type ArticledisplaySection="editorpicPrimary" | "editorpicSecondary" | "treanding" | "slider" | "mostResent" | "mostResentGrid" 
 

export interface ArticleMeta{
   author: string;
   category: string;
   date: string;
  readingTime: string;
  displaySection?: ArticledisplaySection;
  authorAvataUrl?: string;

}   



export interface Article{
    _id: string;
    title: string;
    image: string;
    excerpt?: string;
    caption: string;
    meta:ArticleMeta;
    tags?: string[];

}