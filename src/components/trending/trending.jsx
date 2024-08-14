import { useEffect, useState } from "react";

import TrendingCart from "./trendingCart";

const Trending = () => {
  const [trendingArticles, setTrendingArticles] = useState([]);
  const gettrendingData = async () => {
    const respo = await fetch(`https://dev.to/api/articles?top=3&per_page=4`);
    const data = await respo.json();
    setTrendingArticles(data);
  };
  useEffect(() => {
    gettrendingData();
  }, []);
  console.log("trending articles", trendingArticles);
  trendingArticles.map((trendingArticle) => console.log(trendingArticle));
  return (
    <div className="px-10 py-4 md:px-40 md:py-20">
      <div>
        <h1 className="font-extrabold text-2xl mb-8">Trending</h1>
      </div>
      <div className="flex flex-row justify-between">
        {trendingArticles.map((trending) => (
          <TrendingCart
            // key={trendingArticles.id}
            // trendingArticle={trendingArticle}
            key={trending.id}
            title={trending.title}
            socialImage={trending.social_image}
            tags={trending.tag_list}
          />
        ))}
      </div>
    </div>
  );
};
export default Trending;
