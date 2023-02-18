import React from "react";
import { BsPersonCircle } from "react-icons/bs";

const CommentCard = ({ name, comment }) => {
  return (
    <div className="flex items-center gap-5 my-5">
      <div>
        <BsPersonCircle size={30} />
      </div>
      <div className="flex flex-col">
        <h1 className="font-medium text-xl">{name}</h1>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
