import React from "react";

function Footer() {
  return (
    <footer className="p-4  bg-black  shadow md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="self-center text-white text-2xl font-semibold whitespace-nowrap ">
          Happy Cooking
        </span>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center ">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          HappyCooking
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
