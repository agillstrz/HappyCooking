import { useSubscription } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import foto from "../assets/img/food.jpg";
import { makananHome } from "../graphql/Subscriptions";
function Hero() {
  const { data, loading, error } = useSubscription(makananHome);

  return (
    <div
      className="h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${foto})` }}
    >
      <div className="flex flex-col gap-y-4  w-[40%] p-5">
        <h1 className="font-semibold text-7xl mb-4 capitalize">
          Simple and testy recipes
        </h1>

        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>

        <div className="flex gap-x-2">
          {data &&
            data.cooking_makanan.map((m) => (
              <Link to={`/deskripsi/${m.id}`}>
                <div
                  key={m.id}
                  className="h-44 w-48 mt-2 rounded-lg flex flex-col justify-between bg-white"
                >
                  <div className="h-[70%] relative rounded-lg ">
                    <img
                      className="w-full h-full absolute"
                      src={m.foto}
                      alt=""
                    />
                  </div>
                  <div className="text-black w-full h-[30%]   ">
                    <h1 className="font-bold text-center">{m.nama}</h1>
                    <div className="flex text-[12px] px-1  pb-1  justify-between  ">
                      <p className="flex gap-x-1 items-center">
                        <i className="fa-solid fa-clock"></i>
                        {m.waktu} Menit
                      </p>
                      <p className="flex gap-x-1 items-center">
                        40<i className="fa-solid fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
