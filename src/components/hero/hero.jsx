import { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import HeroCartCarousel from "./hero-cart-carousel";

const Hero = () => {
  const [heroArticles, setHeroArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const GetHeroData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?top=5&per_page=4`
    );
    const data = await response.json();
    setHeroArticles(data);
  };
  useEffect(() => {
    GetHeroData();
  }, []);
  return (
    <div className="hidden md:flex flex-col px-40 py-24">
      <HeroCartCarousel
        currentIndex={currentIndex}
        heroArticles={heroArticles}
      />
      {/* <div
        className="flex w-full overflow-x-hidden transition-all duration-150"
        style={{ transform: `translateX(-${currentIndex * 100}}%)` }}
      >
        {heroArticles.map((heroArticle) => (
          <HeroCartCarousel
            tags={heroArticle.tag_list}
            title={heroArticle.title}
            date={heroArticle.readable_publish_date}
            bgImg={heroArticle.social_image}
          />
        ))}
      </div> */}
      <div className="flex text-2xl text-gray-400 mt-3 justify-end">
        <button
          className="mr-2 border-solid border-2 border-gray-300 rounded-lg flex justify-center items-center"
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        >
          <GrPrevious className="" />
        </button>
        <button
          className="border-solid border-2 border-gray-300 rounded-lg flex justify-center items-center"
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};
export default Hero;
