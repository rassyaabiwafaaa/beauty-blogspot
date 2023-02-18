import React from "react";
import { BsFlower2 } from "react-icons/bs";

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <span>
        <BsFlower2 size={"30px"} className="text-primary" />
      </span>
      <span className="text-primary">Beauty</span>
    </div>
  );
};

export default Logo;
