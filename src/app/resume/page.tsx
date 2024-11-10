import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col justify-center">
        <section className="container mx-auto px-4 md:px-8 py-8 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">

          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          

          <Image data-aos="zoom-in-up"
            className="  rounded-full border-[6px] border-white"
            src="/loogo.jpg" 
            alt="Image"
            width={450} 
            height={450} 
          />

          </div>

          <div data-aos="zoom-in-up" className="w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-center md:text-left mb-6 sm:mb-8">
              ABOUT <span className="text-white">ME</span>
            </h1>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
              Hello! My name is Faiz, and I'm passionate about creating unique
              web experiences. With a focus on detail, user engagement, and
              modern design, I strive to deliver quality work that captivates
              audiences.
            </p>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
              I have a deep interest in the latest web technologies and
              front-end frameworks. My aim is to constantly push the boundaries
              of what is possible in web development while maintaining
              performance and accessibility.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new design trends,
              reading about the latest tech, or contributing to open-source
              projects.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link href="/contact">
                <button className="inline-block bg-[#0ef] text-black px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-bold shadow-md hover:bg-white transition-all">
                  Click Me!
                </button>
              </Link>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
