import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <Link to={`/deskripsi/${data.id}`}>
      <div className="h-64 w-72 mt-2 group rounded-lg flex flex-col cursor-pointer  pb-2 justify-between bg-white">
        <div
          className="h-[70%] rounded-lg  bg-cover bg-center"
          style={{ backgroundImage: `url(${data.foto})` }}
        ></div>
        <div className="text-black w-full px-3 flex flex-col justify-between h-[30%]   ">
          <h1 className="font-bold text-center group-hover:underline">
            {data.nama}
          </h1>
          <p className="text-sm text-center">300kalori/100gram</p>
          <div className="flex text-sm px-1 py-2 justify-between  ">
            <p className="flex gap-x-1 items-center">
              <i className="fa-solid fa-clock"></i>
              {data.waktu} Menit
            </p>
            <p className="flex gap-x-1 items-center">
              40<i className="fa-solid fa-star"></i>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
