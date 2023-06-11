import React from "react";
import Wrapper from "./Wrapper";

const ContentSection2 = () => {
  return (
    <div className="my-10 lg:my-36 relative">
      <Wrapper className="">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-[180px]  justify-between mx-auto ">
          <div className="mt-6 lg:mt-1">
            <h1 className="font-outfit text-[22px] lg:text-[42px] leading-6 lg:leading-[48px] mb-[31px]">
              Write what you want to convey through clear, & authentic writing
            </h1>
            <div className="my-[21px] lg:my-[42px]">
              <p className="font-inter text-[12px] lg:text-[18px] leading-6 lg:leading-[28px]">
                AI-Writer is the most accurate content generation platform and
                writing tool that helps you transform your text into a
                completely personalized.
              </p>
            </div>
            <button className="font-inter rounded-sm lg:rounded-md bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:from-[#0035F5] active:to-[#A600F5] relative  text-white text-[10px] md:text-[16px] flex justify-center items-center leading-6 md:leading-5 px-[10px] md:px-[20px] py-1 md:py-3 lg:py-3">
              Start 14 Days Free Trial
            </button>
          </div>
          <div className="bg-white rounded-md lg:w-full lg:h-[450px] p-3 flex flex-row gap-8 mt-8">
            <div className="basis-2/5 bg-transparent flex flex-col gap-2">
              <p className="bg-transparent text-gray-400 font-inter font-normal leading-8">
                Blog Outline
              </p>
              <p className="bg-transparent text-gray-400 font-inter font-normal leading-8">
                Blog Intro
              </p>
              <p className="bg-transparent text-gray-400 font-inter font-normal leading-8">
                Blog Conclusion
              </p>
              <p className="bg-transparent text-gray-400 font-inter font-normal leading-8">
                AIDA
              </p>
              <p className="bg-transparent text-gray-400 font-inter font-normal leading-8">
                PAS
              </p>
              <p className="bg-transparent text-gray-400 font-inter font-normal leading-8">
                Content Rewriter
              </p>
              <div className=" rounded-lg bg-transparent">
                <hr className="border-4 rounded-lg border-gray-100 opacity-100" />
              </div>
              <div className="mt-1 w-20 rounded-lg bg-transparent">
                <hr className="border-4 rounded-lg border-gray-100 opacity-100" />
              </div>
              <div className="mt-1 w-44 rounded-lg bg-transparent">
                <hr className="border-4 rounded-lg border-gray-100 opacity-100" />
              </div>
              <div className="mt-1 w-20 rounded-lg bg-transparent">
                <hr className="border-4 rounded-lg border-gray-100 opacity-100" />
              </div>
              <div className="mt-1 w-28 rounded-lg bg-transparent">
                <hr className="border-4 rounded-lg border-gray-100 opacity-100" />
              </div>
              <div className="mt-1 w-40 rounded-lg bg-transparent">
                <hr className="border-4 rounded-lg border-gray-100 opacity-100" />
              </div>
              <div className="mt-1 w-44 rounded-lg bg-transparent">
                <hr className="border-4 rounded-lg border-gray-100 opacity-100" />
              </div>
            </div>
            <div className="basis-3/5 bg-transparent text-black">
              <p className="mb-1 bg-transparent text-black text-[18px] font-semibold font-inter">
                Results
              </p>
              <p className="bg-transparent text-black font-inter font-normal lg:text-[14px]">
                Here's what our AI came up with.
              </p>
              <div className="w-24 md:w-[350px] lg:w-[350px] lg:h-[100px]  rounded-md mt-3 p-3 shadow-md">
                <div className="mt-1">
                  <hr className="border-4 w-auto lg:w-28 rounded-lg border-gray-100 opacity-40" />
                </div>
                <div className="mt-2">
                  <hr className="border-4 rounded-lg border-gray-100 opacity-40" />
                </div>
                <div className="mt-2">
                  <hr className="border-4  rounded-lg border-gray-100 opacity-40" />
                </div>
                <div className="mt-2">
                  <hr className="border-4 w-auto lg:w-44 rounded-lg border-gray-100 opacity-40" />
                </div>
              </div>
              <div className="w-24 md:w-[350px] lg:w-[350px] lg:h-[100px] rounded-md mt-3 p-3 shadow-md bg-slate-50">
                <div className="mt-1 bg-transparent">
                  <hr className="border-4 w-auto lg:w-28 rounded-lg border-gray-300 opacity-100" />
                </div>
                <div className="mt-2 bg-transparent">
                  <hr className="border-4 rounded-lg border-gray-300 opacity-100" />
                </div>
                <div className="mt-2 bg-transparent">
                  <hr className="border-4  rounded-lg border-gray-300 opacity-100" />
                </div>
                <div className="mt-2 bg-transparent">
                  <hr className="border-4 w-auto lg:w-44 rounded-lg border-gray-300 opacity-100" />
                </div>
              </div>
              <div className="w-24 md:w-[350px] lg:w-[350px] lg:h-[100px] rounded-md mt-3 p-3 shadow-md">
                <div className="mt-1">
                  <hr className="border-4 w-auto lg:w-28 rounded-lg border-gray-100 opacity-40" />
                </div>
                <div className="mt-2">
                  <hr className="border-4 rounded-lg border-gray-100 opacity-40" />
                </div>
                <div className="mt-2">
                  <hr className="border-4  rounded-lg border-gray-100 opacity-40" />
                </div>
                <div className="mt-2">
                  <hr className="border-4 w-auto lg:w-44 rounded-lg border-gray-100 opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContentSection2;
