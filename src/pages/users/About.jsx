import React from "react";
import sheka from "../../assets/img/sheka.jpg";
import tegar from "../../assets/img/tegar.jpg";
import adinda from "../../assets/img/adinda.jpg";
import aqzal from "../../assets/img/aqzal.jpg";
import aul from "../../assets/img/aul.jpg";
function About() {
  return (
    <div className="p-5 pb-24 bg-btn/30">
      <div className="mb-10">
        <h1 className="w-full text-center text-5xl font-bold text-main pb-5">
          About Us
        </h1>
        <p className="text-xl px-44 text-center">
          Happy Cooking merupakan aplikasi yang berisikan resep-resep masakan.
          selain itu happy cooking juga menampilkan rate masakan, kalori dalam
          makanan hingga cara memasak makanan tersebut yang di sajikan dalam
          video dan deskripsi. Happy Cooking akan membantu kamu dalam memasak
          makanan sehari-hari maupun masakan indonesia hingga masakan luar
          negeri.
        </p>
      </div>
      <h1 className="w-full text-center text-5xl font-bold text-main pb-5">
        Kelompok 5
      </h1>
      <div className="grid grid-cols-3 place-items-center">
        <div>
          <div className="bg-main/70 flex flex-col items-center p-2 rounded-full shadow-lg w-56 h-60">
            <img
              className="w-full h-full rounded-full"
              src={tegar}
              alt="Default avatar"
            />
            <p className="text-md mt-8 font-bold capitalize text-center">
              TEGAR GANA PUTRA SETIAWAN
            </p>
            <p className="font-semibold">11120127</p>
          </div>
        </div>
        <div>
          <div className="bg-main/70 flex flex-col items-center p-2 rounded-full shadow-lg w-56 h-60">
            <img
              className="w-full h-full rounded-full"
              src={aqzal}
              alt="Default avatar"
            />
            <p className=" text-md mt-8 font-bold capitalize text-center">
              AQZAL BAHY HAKIM
            </p>
            <p className="font-semibold">10120175</p>
          </div>
        </div>
        <div>
          <div className="bg-main/70 flex flex-col items-center p-2 rounded-full shadow-lg w-56 h-60">
            <img className="w-full h-full rounded-full" src={sheka} />
            <p className=" text-md mt-8 font-bold capitalize text-center">
              SHEKA TRI PUTRA DARMA
            </p>
            <p className="font-semibold">11120095</p>
          </div>
        </div>
        <div className="flex w-full justify-center  col-span-3 gap-x-44">
          <div className="bg-main/70 flex flex-col items-center p-2 rounded-full shadow-lg w-56 h-60">
            <img
              className="w-full h-full rounded-full"
              src={adinda}
              alt="Default avatar"
            />
            <p className=" text-md mt-8 font-bold capitalize text-center">
              ADINDA TRI CAHYANI
            </p>
            <p className="font-semibold">10120033</p>
          </div>
          <div className="bg-main/70 flex flex-col items-center p-2 rounded-full shadow-lg w-56 h-60">
            <img
              className="w-full h-full rounded-full"
              src={aul}
              alt="Default avatar"
            />
            <p className=" text-md mt-8 font-bold capitalize text-center">
              Reni Aulia Fitriani
            </p>
            <p className="font-semibold">10120973</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
