import Link from "next/link";

export default function Home() {
  return (
    <div className="  flex justify-between items-center w-full  font-extrabold h-[75px] px-4 sm:px-6 md:px-8">
      <h1 className=" text-white ml-2 sm:ml-6 text-[25px] sm:text-[30px] md:text-[40px]">FAIZ</h1>
      <ul className="text-white flex space-x-2 sm:space-x-6 md:space-x-10 font-bold text-[14px] sm:text-[18px] md:text-[20px]">
        <Link href="/"> <li className="text-[#0ef]">Home</li></Link>
        <Link href="/resume"> <li>Resume</li></Link>
        <Link href="/skills"> <li className="text-[#0ef]">Skills</li></Link>
        <Link href="/contactus"> <li >Contactus</li></Link></ul>
    </div>
  );
}
