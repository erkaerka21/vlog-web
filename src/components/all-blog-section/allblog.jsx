import { toast } from "react-toastify";
import Loader from "../loader";
import { SearchContext } from "../providers/provider-search";
import BlogCart from "./blogCart";
import { useContext, useEffect, useState } from "react";
const allBlogMenuList = [
  { text: "All", link: "/" },
  { text: "Design", link: "/#Desgin" },
  { text: "Travel", link: "/#Travel" },
  { text: "Fashion", link: "/#Fashion" },
  { text: "Technology", link: "/#Technology" },
  { text: "Branding", link: "/#Branding" },
];
const Allblog = () => {
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(1);
  const [load, setLoad] = useState(false);
  const [menuList, setMenuList] = useState([]);
  //   console.log("countiig tooloh : ", count);
  //   console.log("setCountiig tooloh : ", setCount);
  const articleData = async () => {
    try {
      setLoad(true);
      const res = await fetch(
        `https://dev.to/api/articles?page=${count}&per_page=9`
      );
      const data = await res.json();
      setLoad(false);
      setArticles((prevArticles) => {
        console.log("өмнөх артикл : ", prevArticles);
        const newArticles = data.filter(
          (article) =>
            !prevArticles.some((prevArticle) => prevArticle.id === article.id)
        );
        return [...prevArticles, ...newArticles];
      });
    } catch (error) {
      toast.error("Алдаа гарлаа дахин оролдоно уу");
    }
  };

  useEffect(() => {
    articleData();
  }, [count]);
  const moreData = () => {
    setCount((prevCount) => prevCount + 1);
  };
  //   console.log("датанууд", articles);
  const { searchText } = useContext(SearchContext);
  const findArticle = articles.filter((article) =>
    article.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const getBlogMenuList = async () => {
    const responsive = await fetch(`https://dev.to/api/tags`);
    const menuListData = await responsive.json();
    setMenuList(menuListData);
  };
  useEffect(() => {
    getBlogMenuList();
  }, []);
  const filterBlogs = (menu) => {
    console.log("хаана дарж байна вэ", menu);
    // return articles.filter((article) =>
    //   article.tag_list.map((tag) => tag).includes(event.target)
    // );
  };
  // const filterBlog = articles.filter((article) =>
  //   article.tag_list.map((tag) => tag).includes(event.target)
  // );

  return (
    <div className="px-10 py-4 md:px-40 md:py-20 flex flex-col gap-y-6 mb-10">
      <h1 className="text-black text-2xl font-extrabold">All Blog Post</h1>
      <div className="flex flex-row justify-between">
        <ul className="flex font-semibold gap-x-3">
          {menuList.map((menu) => (
            <li>
              <button onClick={() => filterBlogs(menu.name)}>
                {menu.name}
              </button>
            </li>
          ))}
        </ul>
        <a className="font-semibold">View All</a>
      </div>
      {/* <h1>Хайлтын утга : {searchText}</h1> */}
      <div className="grid grid-cols-3 gap-4">
        {findArticle.map((article) => (
          <BlogCart key={article.id} article={article} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="border-solid border-2 border-gray-300 bg-white text-base text-gray-500 font-normal rounded-xl mt-7 px-3 py-1"
          onClick={moreData}
        >
          {load ? <Loader /> : "Load more"}
        </button>
      </div>
    </div>
  );
};
export default Allblog;
