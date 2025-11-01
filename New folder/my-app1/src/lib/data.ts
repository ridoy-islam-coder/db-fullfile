import { ArticleModel, IArticle } from "@/models/Article";
import { connectToDB } from "./mongobd";
import { separateArticlesBySection } from "./artilceUtils";

export interface SeparatedArticles {
    editorPicksPrimary?: IArticle;
    editorPicksSecondary: IArticle[];
    trendingArticles: IArticle[];
    sliderArticles: IArticle[];
    gridArticles: IArticle[];
    mostRecentArticles: IArticle[];
    allMostRecentGridArticles: IArticle[];
    popularArticles: IArticle[]
}


interface HomePageData {
    articles: SeparatedArticles;
}


export async function getHomePageData() {

    let allFetchedArticles: IArticle[] = [];
    try{
     await connectToDB();

          const articles = await ArticleModel.find().sort({createdAt:-1}).lean();
        allFetchedArticles = JSON.parse(JSON.stringify(articles));
      

    }catch(error){
        console.error("Error fetching articles for home page:", error);
    }
       const separatedArticles = separateArticlesBySection(allFetchedArticles);

    return {
        articles: separatedArticles
    }
}
