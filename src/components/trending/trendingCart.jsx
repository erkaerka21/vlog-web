const TrendingCart = ({ category, title, img }) => {
  return (
    <div className="relative w-56">
      <div className="absolute bottom-4 left-3 flex flex-col items-start flex-wrap gap-y-3">
        <div className="text-white bg-indigo-500 px-2 py-1 text-center rounded-xl text-sm">
          {category}
        </div>
        <h1 className="text-white font-semibold w-11/12">{title}</h1>
      </div>
      <img src={img} className="w-56" />
    </div>
  );
};
export default TrendingCart;
