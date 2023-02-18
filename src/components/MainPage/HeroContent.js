import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HeroContentImage } from "public/images";
import { AiFillCalendar, AiFillFolderOpen } from "react-icons/ai";
import CategoryText from "../CategoryText";
import CardArticle from "../CardArticle";
import Link from "next/link";
import { truncateString } from "@/utils/truncateString";

function HeroContent({ data }) {
  function randomNumber() {
    const random = Math.floor(Math.random() * 10);

    return random;
  }
  return (
    <div className="lg:px-[100px] px-[60px]">
      {/* Highlight Article and sub menu blog */}
      <div className="flex justify-between gap-[120px] flex-col md:flex-row">
        <div className="flex justify-center">
          <div className="lg:w-[760px] ">
            <div>
              <Image src={HeroContentImage} alt="top article" priority={true} />
              <h1 className="font-bold text-[28px]">{data[0].title}</h1>
              <div className="flex items-center justify-between text-[#9e9e9e]">
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-1 ">
                    <AiFillCalendar />
                    July 25, 2022
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillFolderOpen />
                    Health
                  </span>
                </div>
              </div>
              <p className="text-[#9e9e9e] mt-3">{truncateString(data[0].body)}</p>
              <Link className="inline-block my-5 px-[10px] py-[10px] bg-primary rounded-md text-white" href={`/blogs/${data[0].id}`}>
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div>
            <p className="text-primary">Adicio defigo cresco. Damnatio decretum bestia. Super culpa dolore. Caterva cursus adficio. Sublime aut stipes. Cohors nesciunt ultio.</p>
          </div>
          <div>
            <CategoryText title={"LATEST POST"} />
            <div>
              <ul className="flex flex-col gap-3 mt-3">
                {data.map((item) => {
                  return (
                    <div key={item.id}>
                      <li>{item.title}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <CategoryText title={"CATEGORIES"} />
            <div>
              <ul className="flex flex-col gap-3 mt-3">
                {data.map((item) => {
                  return (
                    <div key={item.id}>
                      <li>{item.title}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* More article */}
      <div>
        <CategoryText title={"ARTICLE YOU MIGHT LIKE..."} fontSize={24} />
        <CardArticle title={data[2].title} body={data[2].body} id={data[2].id} image={"true"} />
        <CardArticle title={data[3].title} body={data[3].body} id={data[3].id} image={"true"} />
        <Link className="inline-block mb-10 px-[10px] py-[10px] bg-primary rounded-md text-white" href={"/blogs"}>
          Show More Articles
        </Link>
      </div>
    </div>
  );
}

export default HeroContent;
