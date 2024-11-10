import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

import "aos/dist/aos.css";
const Skills = () => {
  return (
    <div>
      <Navbar />
      <div data-aos="zoom-in-down" className=" text-white">
        <h1 className="text-center text-6xl pt-8 pb-16">
          My <span className="text-[#0ef]">Skills</span>
        </h1>
        <section className="flex flex-col items-center">
          <div className="w-full max-w-4xl px-5 py-16">
            <h1 className="text-center text-4xl underline underline-offset-8 text-white mb-12">
              Technical Skills
            </h1>
            <div className="flex flex-col gap-8">

              <div className="flex flex-col items-start">
                <div className="text-lg mb-2">HTML</div>
                <div className="w-full h-2 bg-[#333] rounded-lg relative overflow-hidden">
                  <span
                    className="block h-full bg-[#0ef] rounded-lg transition-all duration-500"
                    style={{ width: "70%" }}
                  ></span>
                  <div
                    className="absolute top-1/2 left-[70%] transform -translate-x-1/2 text-white text-sm"
                    style={{ left: "70%" }}
                  >
                    70%
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-lg mb-2">CSS</div>
                <div className="w-full h-2 bg-[#333] rounded-lg relative overflow-hidden">
                  <span
                    className="block h-full bg-[#0ef] rounded-lg transition-all duration-500"
                    style={{ width: "70%" }}
                  ></span>
                  <div
                    className="absolute top-1/2 left-[70%] transform -translate-x-1/2 text-white text-sm"
                    style={{ left: "70%" }}
                  >
                    70%
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-lg mb-2">TypeScript</div>
                <div className="w-full h-2 bg-[#333] rounded-lg relative overflow-hidden">
                  <span
                    className="block h-full bg-[#0ef] rounded-lg transition-all duration-500"
                    style={{ width: "50%" }}
                  ></span>
                  <div
                    className="absolute top-1/2 left-[50%] transform -translate-x-1/2 text-white text-sm"
                    style={{ left: "50%" }}
                  >
                    50%
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-lg mb-2">Python</div>
                <div className="w-full h-2 bg-[#333] rounded-lg relative overflow-hidden">
                  <span
                    className="block h-full bg-[#0ef] rounded-lg transition-all duration-500"
                    style={{ width: "0%" }}
                  ></span>
                  <div
                    className="absolute top-1/2 left-[0%] transform -translate-x-1/2 text-white text-sm"
                    style={{ left: "0%" }}
                  >
                    0%
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-lg mb-2">Next.js</div>
                <div className="w-full h-2 bg-[#333] rounded-lg relative overflow-hidden">
                  <span
                    className="block h-full bg-[#0ef] rounded-lg transition-all duration-500"
                    style={{ width: "40%" }}
                  ></span>
                  <div
                    className="absolute top-1/2 left-[40%] transform -translate-x-1/2 text-white text-sm"
                    style={{ left: "40%" }}
                  >
                    40%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
