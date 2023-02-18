import Navigation from "@/components/Navigation";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsYoutube, BsFacebook, BsTwitter, BsGithub, BsBehance, BsWhatsapp, BsGlobe } from "react-icons/bs";

const About = () => {
  return (
    <>
      <Navigation />

      <div className="lg:px-[100px] px-[60px]">
        <div className="mt-[20%]">
          <h1 className="text-center font-bold py-5 text-xl text-primary">About creator</h1>
          <div className="flex text-primary text-4xl justify-center gap-10">
            <Link href={"https://www.instagram.com/rassyaabiwafa/"} target="_blank" className="hover:text-5xl transition-all ease-in-out">
              <BsInstagram />
            </Link>
            <Link href={"https://github.com/rassyaabiwafaaa"} target="_blank" className="hover:text-5xl transition-all ease-in-out">
              <BsGithub />
            </Link>
            <Link href={"https://www.behance.net/rassyaabiwafa"} target="_blank" className="hover:text-5xl transition-all ease-in-out">
              <BsBehance />
            </Link>
            <Link href={"https://wa.me/6285782643433"} target="_blank" className="hover:text-5xl transition-all ease-in-out">
              <BsWhatsapp />
            </Link>
            <Link href={"https://rassyaabiwafa.netlify.app/"} target="_blank" className="hover:text-5xl transition-all ease-in-out">
              <BsGlobe />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
