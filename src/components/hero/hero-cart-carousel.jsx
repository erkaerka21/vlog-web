import React from "react";

const HeroCartCarousel = ({ heroArticles, currentIndex }) => {
  return (
    <div
      className="flex w-full overflow-x-hidden transition-all duration-200"
      style={{ transform: `translateX(-${currentIndex * 100}}%)` }}
    >
      {heroArticles.map((heroArticle, i) => (
        <div className="min-w-full">
          <div className="relative">
            <div className="absolute w-1/2 bg-white rounded-xl bottom-2 left-2 z-10 p-10 flex flex-col items-start gap-y-4">
              <div className="flex gap-x-3">
                {heroArticle.tag_list.map((tag) => (
                  <div className="text-white bg-indigo-500 px-2 py-1 text-center rounded-xl">
                    {tag}
                  </div>
                ))}
              </div>
              <h1 className="text-2xl font-bold w-9/12">{heroArticle.title}</h1>
              <p className="text-gray-400">
                {heroArticle.readable_publish_date}
              </p>
            </div>
            <div className="rounded-xl trendCartImage relative">
              <img src={heroArticle.social_image} className="rounded-xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCartCarousel;
