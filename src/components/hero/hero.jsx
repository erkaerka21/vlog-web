import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Hero = ({ category, title, date, bgImg }) => {
  return (
    <div className="px-40 py-24">
      <div className="relative">
        <div className="absolute bg-white rounded-xl bottom-2 left-2 z-10 p-10 flex flex-col items-start gap-y-4">
          <div className="text-white bg-indigo-500 px-2 py-1 text-center rounded-xl">
            {category}
          </div>
          <h1 className="text-2xl font-bold w-9/12">{title}</h1>
          <p className="text-gray-400">{date}</p>
        </div>
        <img src={bgImg} className="rounded-xl" />
      </div>
      <div className="flex text-2xl text-gray-400 mt-3 justify-end">
        <div className="mr-2 border-solid border-2 border-gray-300 rounded-lg flex justify-center items-center">
          <GrPrevious className="" />
        </div>
        <div className="border-solid border-2 border-gray-300 rounded-lg flex justify-center items-center">
          <GrNext />
        </div>
      </div>
    </div>
  );
};
export default Hero;
