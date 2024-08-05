import ViewAllBlogCart from "../components/viewallblogCart";
import viewallBlogData from "../components/viewallblogdata";
const AllBlogPost = () => {
  return (
    <>
      <div className="px-40 py-20 flex flex-col">
        <h1 className="font-extrabold text-2xl mb-6">All Blog Post</h1>
        <div className="mt-3 grid grid-cols-3 gap-x-8 gap-y-6">
          {viewallBlogData.map(
            ({ img, category, title, artistImg, artistName, date }) => (
              <ViewAllBlogCart
                img={img}
                category={category}
                title={title}
                artistImg={artistImg}
                artistName={artistName}
                date={date}
              />
            )
          )}
        </div>
        <div className="flex justify-center">
          <button className="border-solid border-2 border-gray-300 bg-white text-base text-gray-500 font-normal rounded-xl mt-7 px-3 py-1">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};
export default AllBlogPost;
