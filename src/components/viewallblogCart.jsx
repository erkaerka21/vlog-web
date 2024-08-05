import Link from "next/link";
const ViewAllBlogCart = ({
  img,
  category,
  title,
  artistImg,
  artistName,
  date,
}) => {
  return (
    <Link href="/singlepost">
      <div className="border-solid border-2 border-gray-300 rounded-lg p-3 w-72 flex flex-col gap-y-4">
        <img src={img} className="w-72" />
        <div className="flex flex-col items-start gap-y-3">
          <div className="text-indigo-500 bg-purple-200 px-2 py-1 text-center rounded-xl text-sm font-medium">
            {category}
          </div>
          <h1 className="font-bold">{title}</h1>
          <div className="w-11/12 flex flex-row items-center justify-between mb-3">
            <div className="flex flex-row items-center gap-x-1 text-gray-400">
              <img src={artistImg} className="h-7 w-7" />
              <p className="text-sm">{artistName}</p>
            </div>
            <p className="text-gray-400 text-sm">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ViewAllBlogCart;
