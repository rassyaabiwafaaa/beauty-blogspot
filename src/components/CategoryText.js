import React from "react";

const CategoryText = ({ title }) => {
  return (
    <div className={`mt-[20px] text-2xl`}>
      <p className="font-bold text-primary">{title}</p>
      <div className="h-[3px] bg-primary"></div>
    </div>
  );
};

export default CategoryText;
