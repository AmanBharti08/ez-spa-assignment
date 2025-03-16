import React from "react";
import logo from "../assets/logo@2x.png";

const Navbar = () => {
  return (
    <div className="p-5 flex justify-between items-center ">
      <img src={logo} alt="logo of ez" className="w-[250px]" />
      {/* <div className="flex justify-between gap-10 items-center">
        <h1 className="text-3xl cursor-pointer hover:text-[#3cc3f1] font-medium">Contact</h1>
        <h1 className="text-3xl cursor-pointer hover:text-[#3cc3f1] font-medium">Services</h1>
      </div> */}
    </div>
  );
};

export default Navbar;
