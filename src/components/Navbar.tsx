"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex justify-between items-center w-full font-bold h-[75px] px-6 bg-gray-900 text-white shadow-md">

      <h1 className="text-[#00d4ff] text-[30px] sm:text-[35px] md:text-[40px] font-extrabold ml-2">
        FAIZ
      </h1>

      <ul className="hidden lg:flex space-x-10 font-bold text-[14px] sm:text-[18px] md:text-[20px] text-white">
        <Link href="/">
          <li className="hover:text-[#00d4ff]">Home</li>
        </Link>
        <Link href="/resume">
          <li className="hover:text-[#00d4ff]">Resume</li>
        </Link>
        <Link href="/skills">
          <li className="hover:text-[#00d4ff]">Skills</li>
        </Link>
        <Link href="/contactus">
          <li className="hover:text-[#00d4ff]">Contact Us</li>
        </Link>
      </ul>


      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl text-white"
        >
          ☰
        </button>
      </div>


      <div
        className={`${menuOpen ? "block" : "hidden"
          } lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-sm p-6 z-50`}
      >

        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-3xl text-white"
        >
          &times;
        </button>

        <ul className="flex flex-col space-y-6 text-white text-lg font-bold items-center justify-center h-full">
          <Link href="/">
            <li className="hover:text-[#00d4ff]">Home</li>
          </Link>
          <Link href="/resume">
            <li className="hover:text-[#00d4ff]">Resume</li>
          </Link>
          <Link href="/skills">
            <li className="hover:text-[#00d4ff]">Skills</li>
          </Link>
          <Link href="/contactus">
            <li className="hover:text-[#00d4ff]">Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
