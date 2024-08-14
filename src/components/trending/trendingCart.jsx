import Link from "next/link";

const TrendingCart = ({ id, title, socialImage, tags }) => {
  return (
    // <Link href={"/blogpost/" + id}>
    <div className="relative rounded-2xl">
      <div className="absolute left-3 bottom-4 z-20">
        <div className="h-72 flex flex-col justify-end gap-y-3">
          <div className="flex flex-row items-start flex-wrap gap-y-3 gap-x-2">
            {tags.map((tag) => (
              <div className="text-white bg-indigo-500 px-2 py-1 text-center rounded-xl text-sm">
                {tag}
              </div>
            ))}
          </div>
          <h1
            className="text-white font-semibold w-11/12 h-1/6 overflow-y-auto text-justify"
            style={{ scrollbarWidth: "none" }}
          >
            {title}
          </h1>
        </div>
      </div>
      <div className="rounded-2xl trendCartImage relative">
        <img src={socialImage} className="w-56 h-72 object-cover rounded-2xl" />
      </div>
    </div>
    // </Link>
  );
};
export default TrendingCart;
