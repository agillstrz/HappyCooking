import React from "react";

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
          <div className="bg-main/70 flex flex-col items-center p-3 rounded-full shadow-lg w-56 h-60">
            <img
              className="w-full h-full rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/cooking-c2b68.appspot.com/o/ce5c98670c655c86fd72b37dc4e2dbde.jpg?alt=media&token=865a4c84-e9d6-4bdd-91df-478041fdffc3"
              alt="Default avatar"
            />
            <p className="text-md mt-8 font-bold capitalize text-center">
              TEGAR GANA PUTRA SETIAWAN
            </p>
            <p className="font-semibold">11120127</p>
          </div>
        </div>
        <div>
          <div className="bg-main/70 flex flex-col items-center p-3 rounded-full shadow-lg w-56 h-60">
            <img
              className="w-full h-full rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/cooking-c2b68.appspot.com/o/ce5c98670c655c86fd72b37dc4e2dbde.jpg?alt=media&token=865a4c84-e9d6-4bdd-91df-478041fdffc3"
              alt="Default avatar"
            />
            <p className=" text-md mt-8 font-bold capitalize text-center">
              AQZAL BAHY HAKIM
            </p>
            <p className="font-semibold">10120175</p>
          </div>
        </div>
        <div>
          <div className="bg-main/70 flex flex-col items-center p-3 rounded-full shadow-lg w-56 h-60">
            <img
              className="w-full h-full rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/cooking-c2b68.appspot.com/o/ce5c98670c655c86fd72b37dc4e2dbde.jpg?alt=media&token=865a4c84-e9d6-4bdd-91df-478041fdffc3"
              alt="Default avatar"
            />
            <p className=" text-md mt-8 font-bold capitalize text-center">
              SHEKA TRI PUTRA DARMA
            </p>
            <p className="font-semibold">11120095</p>
          </div>
        </div>
        <div className="flex w-full justify-center  col-span-3 gap-x-44">
          <div className="bg-main/70 flex flex-col items-center p-3 rounded-full shadow-lg w-56 h-60">
            <img
              className="w-full h-full rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/cooking-c2b68.appspot.com/o/ce5c98670c655c86fd72b37dc4e2dbde.jpg?alt=media&token=865a4c84-e9d6-4bdd-91df-478041fdffc3"
              alt="Default avatar"
            />
            <p className=" text-md mt-8 font-bold capitalize text-center">
              ADINDA TRI CAHYANI
            </p>
            <p className="font-semibold">10120033</p>
          </div>
          <div className="bg-main/70 flex flex-col items-center p-3 rounded-full shadow-lg w-56 h-60">
            <img
              className="w-full h-full rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/cooking-c2b68.appspot.com/o/9f7555bed1ce3b422fb4fd43f9e4ae2f.jpg?alt=media&token=7ba5bcc1-d5e9-42ee-9f1a-2b8f9ca70460"
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
