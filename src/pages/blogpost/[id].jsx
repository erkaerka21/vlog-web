import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/router";
const DetailBlogPage = (
  {
    //   title,
    //   artistImg,
    //   artistName,
    //   date,
    //   img,
    //   paragraph1,
    //   paragraph2,
    //   title1,
    //   paragraph3,
    //   title2,
    //   paragraph4,
    //   paragraph5,
    //   paragraph6,
  }
) => {
  const { query } = useRouter();
  console.log("query hevleh:", query.id);
  const [detailBlogPage, setDetailBlogPage] = useState(null);

  const getPagebyID = async (id) => {
    const resp = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await resp.json();
    setDetailBlogPage(data);
  };
  useEffect(() => {
    getPagebyID(query.id);
  }, []);
  return (
    <div className="px-52 py-24 flex flex-col gap-y-7">
      <h1 className="font-extrabold text-4xl">{detailBlogPage?.title}</h1>
      <div className="flex flex-row items-center gap-x-4">
        <img
          src={detailBlogPage?.user.profile_image}
          className="w-8 h-8 rounded-full"
        />
        <p className="text-base font-semibold text-gray-600">
          {detailBlogPage?.user.name}
        </p>
        <p className="text-gray-600 text-base">
          {detailBlogPage?.published_at}
        </p>
      </div>
      {/* <img src={img} /> */}
      <div
        className="flex flex-col gap-y-5 text-justify "
        dangerouslySetInnerHTML={{ __html: detailBlogPage?.body_html }}
      >
        {/* <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <h1 className="text-xl font-bold">{title1}</h1>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
        <h1 className="text-xl font-bold">{title2}</h1>
        <p>{paragraph5}</p>
        <p>{paragraph6}</p> */}
      </div>
    </div>
  );
};
export default DetailBlogPage;
