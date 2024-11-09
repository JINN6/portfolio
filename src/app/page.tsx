"use client";
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease", 
      once: true, 
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center mt-[50px] lg:mt-[100px] gap-8 px-4">
         <h1
          data-aos="fade-right"
          className="text-white w-[90%] sm:w-[560px] h-[270px] sm:h-[500px] text-[50px] sm:text-[90px] font-extrabold flex flex-col justify-between text-center lg:text-left p-4"
        >  <span data-aos="fade-right">
            <h1 className="text-[#0ef]">I am</h1>
            Muhammad Faiz
          </span>
        </h1><div
          data-aos="fade-left"
          className="flex-shrink-0 flex justify-center lg:justify-start w-[90%] sm:w-[450px] lg:w-[450px]"
        ><Image
            className="rounded-full border-[6px] border-[#0ef]"
            src="/raw.jpg" 
            alt="Image"
            width={450} 
            height={450} 
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <div className="h-[2px] w-[90%] max-w-[1200px] bg-white"></div>
      </div>
    </div>
  );
}
