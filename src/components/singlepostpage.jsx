const SinglepostPage = ({
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
}) => {
  return (
    <div>
      <h1 className="font-extrabold text-4xl">{title}</h1>
      <div className="flex flex-row items-center">
        <img src={artistImg} className="w-8 h-8" />
        <p className="text-base font-semibold text-gray-600">{artistName}</p>
        <p className="text-gray-600 text-base">{date}</p>
      </div>
      <img src={img} />
      <div>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <h1 className="text-xl font-bold">{title1}</h1>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
        <h1 className="text-xl font-bold">{title2}</h1>
        <p>{paragraph5}</p>
        <p>{paragraph6}</p>
      </div>
    </div>
  );
};
export default SinglepostPage;
