import trendingData from "./trending-data";

const { default: TrendingCart } = require("./trendingCart");

const Trending = () => {
  return (
    <div className="px-40 py-20">
      <div>
        <h1 className="font-extrabold text-2xl mb-8">Trending</h1>
      </div>
      <div className="flex flex-row justify-between">
        {trendingData.map(({ category, title, img }) => (
          <TrendingCart category={category} title={title} img={img} />
        ))}
      </div>
    </div>
  );
};
export default Trending;
