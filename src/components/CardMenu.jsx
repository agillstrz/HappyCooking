import React from "react";
import { Link } from "react-router-dom";

function CardMenu({ data }) {
  return (
    <Link to={`/deskripsi/${data.id}`}>
      <div className="flex flex-col w-80  hover:scale-105 transition-all   duration-150 ease-in cursor-pointer active:scale-95">
        <div className="h-44 rounded-xl  bg-main  text-white  flex">
          <div className=" p-2 flex flex-col justify-between w-[60%]">
            <div>
              <h1 className="font-bold capitalize">{data.nama}</h1>
              <p className="text-[12px]">300 kcal/100g</p>
            </div>
            <div>
              <p className="flex gap-x-1 items-center">
                <i className="fa-solid fa-clock"></i>
                {data.waktu} Menit
              </p>
              <p className="flex gap-x-1 items-center">
                40<i className="fa-solid fa-star"></i>
              </p>
            </div>
          </div>
          <div className="w-[40%] rounded-xl relative">
            <img className="w-full h-full" src={data.foto} alt="" />
          </div>
        </div>
        <div className="bg-[#ABABAB] mx-4 flex justify-between text-sm text-white border border-main rounded-md p-1 font-semibold">
          <div className="flex gap-x-1 items-center">
            <i className="fa-solid text-black fa-heart"></i>
            <span>100 like</span>
          </div>
          <div className="flex gap-x-1 items-center">
            <i className="fa-solid text-black fa-comment"></i>
            <span>Comments</span>
          </div>
          <div className="flex gap-x-1 items-center">
            <i className="fa-solid text-black fa-share-nodes"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardMenu;
