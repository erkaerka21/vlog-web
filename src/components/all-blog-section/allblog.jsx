import BlogCart from "./blogCart";
import allBlogData from "./all-blog-data";
import { useEffect, useState } from "react";
const allBlogMenuList = [
  { text: "All", link: "/" },
  { text: "Design", link: "/#Desgin" },
  { text: "Travel", link: "/#Travel" },
  { text: "Fashion", link: "/#Fashion" },
  { text: "Technology", link: "/#Technology" },
  { text: "Branding", link: "/#Branding" },
];
import Link from "next/link";
const Allblog = () => {
  const [articles, setArticles] = useState([]);
  const articleData = async () => {
    const res = await fetch("https://dev.to/api/articles?page=1&per_page=9");
    const data = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    articleData();
  }, []);
  console.log("датанууд", articles);
  return (
    <div className="px-40 py-20 flex flex-col gap-y-5 mb-10">
      <h1 className="text-black text-2xl font-extrabold">All Blog Post</h1>
      <div className="flex flex-row justify-between">
        <ul className="flex font-semibold gap-x-3">
          {allBlogMenuList.map((menu) => (
            <li>
              <a href={menu.link}>{menu.text}</a>
            </li>
          ))}
        </ul>
        <a className="font-semibold">View All</a>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        {articles.map((article) => (
          <BlogCart
            img={article.social_image}
            category={article.user.name}
            title={article.title}
            date={article.published_at}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/viewallblogpost">
          <button className="border-solid border-2 border-gray-300 bg-white text-base text-gray-500 font-normal rounded-xl mt-7 px-3 py-1">
            Load More
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Allblog;
