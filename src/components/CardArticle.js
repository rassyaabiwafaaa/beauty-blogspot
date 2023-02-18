import React from "react";
import { AiFillCalendar, AiFillFolderOpen } from "react-icons/ai";
import Image from "next/image";
import { ImageArticle } from "public/images";
import Link from "next/link";
import { truncateString } from "@/utils/truncateString";

const CardArticle = ({ image, title, body, id }) => {
  return (
    <div className="md:flex items-center cursor-pointer px-5 py-5 mb-[50px] gap-[50px] hover:shadow-md transition-all ease-in-out rounded-lg">
      {image === true && (
        <div className="">
          <Image src={ImageArticle} alt="sub article" className="object-contain w-[900px]" />
        </div>
      )}
      <div>
        <h1 className="text-[24px] font-bold">
          <Link href={`/blogs/${id}`} className="hover:underline">
            {title}
          </Link>
        </h1>
        <p className="mt-[10px] text-[#9e9e9e]">{truncateString(body)}</p>

        <div className="flex items-center gap-5 text-[#9e9e9e] mt-[10px]">
          <p className="flex items-center gap-2 ">
            <AiFillCalendar /> July 18, 2022
          </p>

          <p className="flex items-center gap-2">
            <AiFillFolderOpen /> Health
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
