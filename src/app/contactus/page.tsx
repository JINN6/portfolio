"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);


  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />


      <section className="flex-1 py-16 bg-gray-50" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          </div>

          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" className="flex justify-center">
            <form className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email address"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>

      </section>
      <footer className="bg-blue-500 text-white flex justify-center ">©Faiz | all rights reserved under 2024</footer>

    </div>
  );
}
