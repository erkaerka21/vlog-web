const BlogCart = ({ img, category, title, date }) => {
  return (
    <div className="border-solid border-2 border-gray-300 rounded-lg p-3 w-72 flex flex-col gap-y-4">
      <img src={img} className="w-72" />
      <div className="flex flex-col items-start gap-y-3">
        <div className="text-indigo-500 bg-purple-200 px-2 py-1 text-center rounded-xl text-sm font-medium">
          {category}
        </div>
        <h1 className="font-bold">{title}</h1>
        <p className="text-gray-400 pb-5">{date}</p>
      </div>
    </div>
  );
};
export default BlogCart;
