import Link from "next/link";
import React from "react";
import { BsInstagram, BsYoutube, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <section id="footer" className="lg:px-[100px] px-[60px] py-[60px] bg-primary">
      <p className="text-white font-semibold text-center mb-3">Connect with us</p>
      <div className="flex text-white text-2xl justify-center gap-6">
        <Link href={"https://www.facebook.com"} target="_blank">
          <BsFacebook />
        </Link>
        <Link href={"https://www.instagram.com"} target="_blank">
          <BsInstagram />
        </Link>
        <Link href={"https://www.youtube.com"} target="_blank">
          <BsYoutube />
        </Link>
        <Link href={"https://www.twitter.com"} target="_blank">
          <BsTwitter />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
