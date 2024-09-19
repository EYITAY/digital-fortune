"use client"
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium ">
          <Image
            src={"/logo/logo.png"}
            width={10000}
            height={10000}
            className="w-40"
            alt="image"
          />{" "}
        </h1>
        <p className="text-left  text-xl  text-gray-500">(571)-206-8021</p>
        <p className="text-left  text-xl  text-gray-500">
        <Link
          href="mailto:mydigitalfortune500@gmail.com"
          className="py-3 
            px-10
        
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
        >
          Send an email
        </Link>
        </p>
      </div>

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 3025 DF500 All Rights Reserved.
        <Link href="https://marketplace.digitalfortune500.online/privacy-policy/" className="text-blue-500">
          Privacy Policy
        </Link>

    
      </div>
    </footer>
  );
};

export default Footer;