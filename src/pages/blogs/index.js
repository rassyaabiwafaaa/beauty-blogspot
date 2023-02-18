import CardArticle from "@/components/CardArticle";
import CategoryText from "@/components/CategoryText";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch("https://gorest.co.in/public/v2/posts?page=1&per_page=5");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navigation />
      <div className="flex flex-col lg:flex-row lg:gap-20 items-start lg:px-[100px] px-[40px]">
        <div className="flex flex-1 flex-wrap">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <CardArticle title={item.title} body={item.body} id={item.id} />
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <div className="mb-10">
            <CategoryText title={"Trending Right Now"} />
            <ul className="font-medium pt-2">
              <li className="mb-3">After Make-Up, Pimples Arise? Find out the solution, come on!</li>
              <li className="mb-3">The Importance of Caring for the Skin Barrier</li>
              <li>5 Tips for Anti Fading Make Up</li>
            </ul>
          </div>
          <div className="mb-10">
            <CategoryText title={"Latest Post"} />
            <ul className="font-medium pt-2">
              <li className="mb-3">After Make-Up, Pimples Arise? Find out the solution, come on!</li>
              <li className="mb-3">The Importance of Caring for the Skin Barrier</li>
              <li>5 Tips for Anti Fading Make Up</li>
            </ul>
          </div>
          <div>
            <CategoryText title={"Categories"} />
            <ul className="font-medium pt-2">
              <li className="mb-3">After Make-Up, Pimples Arise? Find out the solution, come on!</li>
              <li className="mb-3">The Importance of Caring for the Skin Barrier</li>
              <li>5 Tips for Anti Fading Make Up</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex gap-3 lg:px-[100px] px-[40px] mb-10">
        <div className="py-2 px-3 bg-primary text-white font-semibolds">1</div>
        <Link href={"/blogs/2"} className="py-2 px-3 border-2 border-black text-black font-semibolds">
          2
        </Link>
        <Link href={"/blogs/3"} className="py-2 px-3 border-2 border-black text-black font-semibolds">
          3
        </Link>
        <Link href={"/blogs/2"} className="py-2 px-3 border-2 border-black text-black font-semibolds">
          {">"}
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
