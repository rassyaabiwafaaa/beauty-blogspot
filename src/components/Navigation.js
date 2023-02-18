import Link from "next/link";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFlower2 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  function menuHandler() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="shadow-md mb-[50px] px-[60px] py-[10px] lg:px-[100px] lg:py-[30px] lg:flex lg:justify-between items-center font-semibold ">
      {/* Logo and Hamburger */}
      <div className="flex justify-between items-center pb-2 lg:pb-0 ">
        <Logo />
        <div className="lg:hidden">
          <span>
            {showMenu ? <AiOutlineClose size={"25px"} className="font-semibold text-primary cursor-pointer" onClick={menuHandler} /> : <FiMenu size={"25px"} className="font-semibold text-primary cursor-pointer" onClick={menuHandler} />}
          </span>
        </div>
      </div>
      {/* List Item */}
      <div className={`lg:flex items-center gap-5 ${showMenu === false ? "hidden" : ""} `}>
        <ul className="lg:flex gap-5 pb-1 lg:pb-0">
          <li className="mb-2 lg:mb-0">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="mb-2 lg:mb-0">
            <Link href={"/blogs"}>Blogs</Link>
          </li>
          <li className="mb-2 lg:mb-0">
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <div className={`lg:flex items-center ${showMenu === false ? "hidden" : ""} `}>
        <Link href={"/users"} className="flex items-center gap-1">
          <RxAvatar size={"30px"} /> User Page
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
