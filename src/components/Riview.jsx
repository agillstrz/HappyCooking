import React from "react";
import CardRiview from "./CardRiview";

function Riview() {
  return (
    <div className=" flex items-center justify-center flex-col p-7 ">
      <h1 className="capitalize text-4xl w-[30%] text-center  font-semibold">
        What's people say about this website
      </h1>
      <div className="grid grid-cols-3 place-items-center place-content-start w-full h-full">
        <CardRiview nama="Reni Aulia" />
        <CardRiview nama="Sheka Tri Putra" />
        <CardRiview nama="Adinda" />
      </div>
    </div>
  );
}

export default Riview;
