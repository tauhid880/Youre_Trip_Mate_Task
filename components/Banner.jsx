import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="text-white flex flex-col gap-5 justify-center items-center w-full max-w-[1360px] mx-auto lg:pt-24 pt-10 ">
      <div className="flex flex-col items-center">
        <h1 className="lg:text-[60px] text-[30px] font-outfit">Write better</h1>{" "}
        <br />
        <h1 className="lg:text-[60px] text-[30px] lg:my-3 font-outfit">
          content for your
        </h1>
        <br />
        <div className="">
          <h1 className="py-3 text-transparent bg-clip-text font-outfit bg-gradient-to-r from-[#FFC947] to-[#FC6739] lg:text-[60px] text-[30px]">
            Facebook Ads
          </h1>
          <hr className="h-1 lg:mt-1 -mt-2 bg-gradient-to-r from-[#FFC947] to-[#FC6739] border-0"></hr>
        </div>
      </div>
      <div className="my-1 px-4">
        <p className="text-center font-inter">
          Artificial intelligence writting tool helps you create blogs, social
          media websites and much more.
        </p>
      </div>
      <div className="my-1 flex items-center flex-col justify-center">
        <button className="font-inter rounded-md bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:from-[#0035F5] active:to-[#A600F5] relative  text-white text-[10px] md:text-[16px] flex justify-center items-center leading-6 md:leading-5 px-[10px] md:px-[20px] md:py-3 lg:py-3">
          Start 14 Days Free Trial
        </button>
        <div className="my-4 flex items-center ">
          <button className="rounded-md border hover:text-blue1 hover:border-blue2 text-white text-[10px] md:text-[16px] flex justify-center items-center leading-6 md:leading-5 px-[10px] md:px-[20px] md:py-3 lg:py-3">
            <BsPlayCircle className="mr-2 "></BsPlayCircle>
            Watch A Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
