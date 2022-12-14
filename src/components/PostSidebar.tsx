import { format} from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from "react-router-dom";

interface PostSidebarProps 
{
  titlePost: string;
  subCategory: string;
  category: string;
  slug: string;
  publishedAt: Date;

}
  





export function PostSidebar(props: PostSidebarProps) {
const publishedAtFormat = format(props.publishedAt, "EEEEEE' • 'd' de 'MMMM' • 'yyyy' • 'k'h'mm", {
  locale: ptBR,
})





  return (

    
    <Link to={`post/${props.slug}`} className={"hover:-translate-y-1  hover:border-blue-600" + " group"}>
      <span className={ " pl-3 " + " text-gray-300  " }>
        {publishedAtFormat}
      </span>

      <div className={"rounded border border-gray-500 p-4 mt-2  group-hover:border-blue-600  group-hover:drop-shadow-2xl "}>
        <header className={"flex  items-center justify-between"}>
          <span className={"text-sm text-blue-500 font-medium"}>
          {props.subCategory}
          </span>

          <span className={"py-[0.125rem] px-2 rounded  " +  " text-white border border-blue-600 font-bold"}>
           {props.category}
          </span>
        </header>
        
        <strong className={ "text-gray-200 mt-5 block " }>
         {props.titlePost}
        </strong>
       
      </div>
      </Link>
    
  );
}
