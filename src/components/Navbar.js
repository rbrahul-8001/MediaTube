import React from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className=" flex flex-col gap-y-3 md:flex-row justify-between items-center pt-3 pr-10 pl-3 fixed bg-black w-full top-0 pb-1 z-40">
      <div className="flex gap-3 items-center">
        <Link to={"/"}>
          <img src={logo} alt="Error" width="50px" />
        </Link>
        <Link to={"/"}>
          <div className="text-white font-semibold text-3xl cursor-pointer">
            Media<span className="text-red-500">Tube</span>
          </div>
        </Link>
      </div>
      <Searchbar />
    </div>
  );
};

export default Navbar;
