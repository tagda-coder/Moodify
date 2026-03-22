import React from "react";
import { NavLink } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import { SparklesText } from "@/components/ui/sparkles-text"
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "./ui/button";
function Navbar() {
  return (
    <div className="Navbar w-full h-20 py-3 flex sticky top-0 justify-between z-50">
      <div className="left-part logo-container w-1/3 h-full flex items-center">
        <NavLink
          to="/"
        >
          {/* <SparklesText className="LogoText text-3xl font-gilroy-bold text-white select-none">Moodify</SparklesText> */}
          <h1 className="LogoText text-3xl font-gilroy-bold text-white select-none">Moodify</h1>
        </NavLink>
      </div>
      {/* <div className="middle-part w-1/1 h-full text-md font-gilroy-medium flex justify-center gap-15 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-white"
                : "text-gray-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-white"
                : "text-gray-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-white"
                : "text-gray-400"
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-white"
                : "text-gray-400"
            }
          >
            Contact
          </NavLink>
        </div> */}
      <div className="right-part w-1/3 h-full font-gilroy-light flex justify-end items-center gap-5">
        <LinkButton
          to="/login" 
          text="Login"
          classname="text-white rounded-sm"
        />
        {/* <Button size="lg" variant="destructive" className="bg-green-500/10 text-green-400 hover:bg-green-500/20 cursor-pointer px-4 font-apple-medium">Register</Button> */}
        <LinkButton 
          to="/register"
          text="Register"
          classname="bg-red-500/10 hover:bg-red-500/20 text-red-500 text-[0.9rem] font-apple-medium rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;
