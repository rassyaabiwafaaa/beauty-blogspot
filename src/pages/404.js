import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-primary h-[100vh]">
      <div className="flex gap-4 items-center justify-center pt-[45%] lg:pt-[20%]">
        <h1 className="text-white font-semibold">Your page is not found</h1>
        <div className="w-[2px] h-[30px] bg-white"></div>
        <Link href={"/"} className="text-white font-semibold hover:underline hover:text-2xl transition-all ease-in-out">
          go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
