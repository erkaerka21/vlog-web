import Link from "next/link";
const BlogCart = ({ article }) => {
  return (
    <Link href={"/blogpost/" + article.id}>
      <div className="border-solid border-2 border-gray-300 rounded-lg p-3 w-72 flex flex-col gap-y-4">
        <img src={article.social_image} className="w-72" />
        <div className="flex flex-col items-start gap-y-3">
          {/* taguudiig maplaj haruulna */}
          <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
            {article.tag_list.map((tag) => (
              <div className="text-indigo-500 bg-purple-200 px-2 py-1 text-center rounded-xl text-sm font-medium">
                {tag}
              </div>
            ))}
          </div>

          <h1 className="font-bold overflow-hidden">{article.title}</h1>
          <p className="text-gray-400 pb-3">{article.readable_publish_date}</p>
        </div>
      </div>
    </Link>
  );
};
export default BlogCart;
