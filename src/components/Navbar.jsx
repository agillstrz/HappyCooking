import { data } from "autoprefixer";
import { getAuth, signOut } from "firebase/auth";
import { Avatar, Dropdown } from "flowbite-react";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Admin from "../utils/Admin";
import Auth from "../utils/Auth";

function Navbar() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [name, setName] = useState("");
  console.log(user);
  let navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Cookies.remove("token");
        Cookies.remove("rt");
        Cookies.remove("admin");
        Cookies.remove("sub");
        Cookies.remove("data");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <nav className="bg-black  text-white border-gray-200 px-2 flex items-center justify-between  sm:px-4 py-5  dark:bg-gray-900">
        <ul className="flex gap-x-8">
          <button className="font-bold">HAPPY COOKING</button>
          <li>
            {" "}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-btn" : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="menu"
              className={({ isActive }) =>
                isActive ? "font-bold text-btn" : undefined
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "font-bold text-btn" : undefined
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-x-2">
          <li>
            <div
              className={`"gap-x-3 " ${
                Auth.isAuthorization() ? "hidden" : "flex"
              }`}
            >
              {" "}
              <button
                onClick={() => navigate("/login")}
                className="text-white py-2 px-2 rounded-lg hover:font-bold"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-[#FAC356] py-2 px-2 rounded-lg hover:bg-btnh hover:font-semibold transition-all duration-150 ease-in-out"
              >
                Create New Account
              </button>
            </div>
            {auth && Auth.isAuthorization() ? (
              <div className={`${auth ? "" : "hidden"}`}>
                {" "}
                <Dropdown
                  label={
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded={true}
                    >
                      <div className="space-y-1  text-btn">
                        <div className="font-semibold">
                          {auth &&
                            JSON.parse(Cookies.get("data")).email.split("@")[0]}
                        </div>
                      </div>
                    </Avatar>
                  }
                  arrowIcon={false}
                  inline={true}
                >
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown>
              </div>
            ) : (
              ""
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
