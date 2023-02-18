import { useRouter } from "next/router";
import Navigation from "@/components/Navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HeroContentImage } from "public/images";
import { AiFillCalendar, AiFillFolderOpen } from "react-icons/ai";
import Footer from "@/components/Footer";
import CategoryText from "@/components/CategoryText";
import CommentCard from "@/components/DetailBlog/CommentCard";
import axios from "axios";

const DetailBlog = () => {
  // Params
  const router = useRouter();
  const { id } = router.query;

  // Data for detail post
  const [data, setData] = useState([]);

  // Data for Comments
  const [comments, setComments] = useState([]);

  const fetchData = () => {
    const detailApi = `https://gorest.co.in/public/v2/posts/${id}/`;
    const comments = `https://gorest.co.in/public/v2/posts/${id}/comments`;

    const getDetailPost = axios.get(detailApi);
    const getComments = axios.get(comments);

    axios.all([getDetailPost, getComments]).then(
      axios.spread((...allData) => {
        const detailPost = allData[0].data;
        const allComment = allData[1].data;

        setData(detailPost);
        setComments(allComment);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Wrapper */}
      <div className="lg:px-[100px] px-[60px]">
        {/* Detail Article */}
        <div className="flex justify-center">
          <div>
            <Image src={HeroContentImage} alt="Blog Detail Image" priority={true} />
            <h1 className="font-bold text-[28px] lg:w-[700px]">{data.title}</h1>
            <div className="flex gap-5 items-center text-[#9e9e9e] mt-2">
              <span className="flex items-center gap-1">
                <AiFillCalendar /> July 30, 2022
              </span>
              <span className="flex items-center gap-1">
                <AiFillFolderOpen /> health
              </span>
            </div>
            <div className="my-3 mb-10 lg:w-[760px]">
              <p>{data.body}</p>
            </div>
            {/* Comment */}
            <div className="lg:w-full">
              <CategoryText title={"Comments"} />
              {comments.length >= 1 ? (
                comments.map((item) => {
                  return (
                    <div key={item.id}>
                      <CommentCard name={item.name} comment={item.body} />
                    </div>
                  );
                })
              ) : (
                <h1 className="font-bold text-center py-5 text-primary">No Comments Yet</h1>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DetailBlog;
