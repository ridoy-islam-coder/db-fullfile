import { getHomePageData } from "@/lib/data";
import Image from "next/image";

export default async function Home() {
  const { articles } = await getHomePageData();

const { editorPicksPrimary, editorPicksSecondary, trendingArticles, sliderArticles, gridArticles, mostRecentArticles, allMostRecentGridArticles, popularArticles } = articles;






  return ( 
     <div className="blog-container">
      {
        editorPicksPrimary && editorPicksSecondary.length> 0 && trendingArticles.length > 0 && (
          <HomeContentSection
          editorPicksPrimary={editorPicksPrimary}
          editorPicksSecondary={editorPicksSecondary}
          trendingArticles={trendingArticles}
          />
        )
      }
        </div>

  );
}
