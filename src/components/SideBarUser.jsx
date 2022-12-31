import { useQuery } from "@apollo/client";
import React from "react";
import { menuCooking } from "../graphql/Queries";

function SideBarUser({ setClick, click, setText }) {
  const { data, loading, error } = useQuery(menuCooking);
  const handle = (e, id) => {
    setText("");
    setClick(id);
  };
  return (
    <aside
      className="w-64 rounded-b-xl bg-black text-white"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-3 bg-blackrounded ">
        <div className="relative w-full mb-3">
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
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <ul className="space-y-2">
          <li
            className={`border border-white flex justify-center rounded-lg hover:bg-btn hover:text-main cursor-pointer`}
          >
            <button
              onClick={() => setClick(null)}
              className="flex  w-full items-center p-2 text-base font-normal rounded-lg   "
            >
              <span className="flex-1 ml-3 whitespace-nowrap font-bold">
                Semua
              </span>
            </button>
          </li>
          {data &&
            data.cooking_menu.map((m) => (
              <li
                key={m.id}
                className={`border border-white flex justify-center rounded-lg hover:bg-btn hover:text-main cursor-pointer ${
                  click === m.id ? "bg-btn text-main" : ""
                }`}
              >
                <button
                  onClick={(e) => handle(e, m.id)}
                  className="flex  w-full items-center p-2 text-base font-normal rounded-lg   "
                >
                  <span className="flex-1 ml-3 whitespace-nowrap font-bold">
                    {m?.menu}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
}

export default SideBarUser;
