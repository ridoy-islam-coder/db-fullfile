import SectionTitle from '@/components/ui/SectionTitle';
import { IArticle } from '@/models/Article';




interface HomeContentSectionProps {
    editorPicksPrimary?: IArticle;
    editorPicksSecondary: IArticle[];
    trendingArticles: IArticle[];
}


const HomeContentSection = ({ editorPicksPrimary, editorPicksSecondary, trendingArticles }: HomeContentSectionProps) => {



    return (
        <section className="py-12 bg-white text-gray-800">
     <div className='flex flex-col md:flex-row -mx-4 '>

 <div className='w-full  md:w-9/12 px-4 mb-18 md:mb-0'>
    <SectionTitle title="Editor Picks" />

 </div>


    
<div >
 trending
</div>

     </div>  
        </section>
    );
};

export default HomeContentSection;