import Link from "next/link";
const BlogCart = ({ article }) => {
  return (
    <Link href={"/blogpost/" + article.id}>
      <div className="bg-slate-400 border-solid border-2 border-gray-300 rounded-lg p-3 h-full w-full flex flex-col gap-y-4 justify-end">
        <img src={article.social_image} className="w-72" />
        <div className="flex flex-col items-start justify-start gap-y-2 h-2/3">
          {/* taguudiig maplaj haruulna */}
          <div className="flex flex-row justify-start items-center flex-wrap gap-x-4 gap-y-2 h-1/3 mb-4">
            {article.tag_list.map((tag) => (
              <div className="text-indigo-500 bg-purple-200 px-2 py-1 text-center rounded-xl text-sm font-medium">
                {tag}
              </div>
            ))}
          </div>

          <h1
            className="flex font-bold overflow-y-auto h-1/4 items-center"
            style={{ scrollbarWidth: "none" }}
          >
            {article.title}
          </h1>
          <p className="flex text-gray-400">{article.readable_publish_date}</p>
        </div>
      </div>
    </Link>
  );
};
export default BlogCart;
