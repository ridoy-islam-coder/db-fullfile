import { IArticle } from "@/models/Article";

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