import React from "react";

const HeroCartCarousel = ({ tags, title, date, bgImg }) => {
  return (
    <div className="min-w-full">
      <div className="relative">
        <div className="absolute bg-white rounded-xl bottom-2 left-2 z-10 p-10 flex flex-col items-start gap-y-4">
          {tags.map((tag) => (
            <div className="text-white bg-indigo-500 px-2 py-1 text-center rounded-xl">
              {tag}
            </div>
          ))}

          <h1 className="text-2xl font-bold w-9/12">{title}</h1>
          <p className="text-gray-400">{date}</p>
        </div>
        <img src={bgImg} className="rounded-xl" />
      </div>
    </div>
  );
};

export default HeroCartCarousel;
