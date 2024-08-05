import SinglepostPage from "@/components/singlepostpage";
import singlepostData from "@/components/singlepostdata";
const SinglePost = () => {
  return (
    <>
      <div className="px-56 py-24">
        {singlepostData.map(
          ({
            title,
            artistImg,
            artistName,
            date,
            img,
            paragraph1,
            paragraph2,
            title1,
            paragraph3,
            title2,
            paragraph4,
            paragraph5,
            paragraph6,
          }) => (
            <SinglepostPage
              title={title}
              artistImg={artistImg}
              artistName={artistName}
              date={date}
              img={img}
              paragraph1={paragraph1}
              paragraph2={paragraph2}
              paragraph3={paragraph3}
              paragraph4={paragraph4}
              paragraph5={paragraph5}
              paragraph6={paragraph6}
              title1={title1}
              title2={title2}
            />
          )
        )}
      </div>
    </>
  );
};
export default SinglePost;
