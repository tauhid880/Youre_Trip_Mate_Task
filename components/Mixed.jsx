import React from "react";
import Wrapper from "./Wrapper";

const Mixed = () => {
  return (
    <div className="my-10 lg:my-36">
      <Wrapper>
        {/* Section title start */}
        <div className="text-center">
          <h1 className="font-outfit font-semibold lg:leading-[48px] leading-8 lg:text-[42px] text-[26px] ">
            Mixland helps you <br /> build beautiful website
          </h1>
        </div>
        {/* Section title end */}

        <div className="lg:pt-[83px] pt-9 grid grid-rows md:grid-cols-2 lg:grid-cols-3 content-between lg:justify-items-stretch lg:gap-8 gap-10">
          <div className="">
            <div className="mb-2 w-auto">
              <p className="px-[22px] py-[14px] rounded-lg bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:from-[#0035F5] active:to-[#A600F5]">
                Blog Headlines
              </p>
            </div>
            <div className="mb-2 w-auto">
              <p className="  px-[22px] py-[14px] rounded-lg bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:from-[#0035F5] active:to-[#A600F5]">
                Blog Intros
              </p>
            </div>
            <div className="mb-2 w-auto">
              <p className="  px-[22px] py-[14px] rounded-lg bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:from-[#0035F5] active:to-[#A600F5]">
                Content Rewriter
              </p>
            </div>
            <div className="mb-2 w-auto">
              <p className="  px-[22px] py-[14px] rounded-lg bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:from-[#0035F5] active:to-[#A600F5]">
                Facebook Ads
              </p>
            </div>
            <div className="mb-2 w-auto">
              <p className="  px-[22px] py-[14px] rounded-lg bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:from-[#0035F5] active:to-[#A600F5]">
                Product Description
              </p>
            </div>
            <div className="w-auto">
              <p className="  px-[22px] py-[14px] rounded-lg bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:from-[#0035F5] active:to-[#A600F5]">
                PAS Copywriting Formula
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div class=" transition-colors ease-linear shadow-md rounded-lg">
              <div class="w-auto lg:w-full h-12 rounded-t-lg bg-gray-900 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
                <span class="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
                <span class="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
                <span class="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
              </div>
              <div class="bg-gray-900 dark:bg-gray-700 border-t-0 w-auto lg:h-[340px] rounded-b-lg">
                <h1 className="pt-2 lg:pt-[24px] pl-[29px] bg-transparent font-semibold font-inter text-[16px] leading-6 tracking-tight text-gray-500">
                  4 Blog Headlines Generated
                </h1>
                <div className="mx-auto w-auto lg:w-[730px]">
                  <hr className="border-[1px] mt-3 lg:mt-[20px] border-gray-800" />
                </div>
                <div className="bg-transparent">
                  <h1 className="pt-3 lg:pt-[22px] pl-[29px] bg-transparent font-semibold font-inter text-[16px] leading-6 tracking-tight text-white">
                    Create original content that ranks for SEO
                  </h1>
                </div>
                <div className="mx-auto w-auto lg:w-[730px]">
                  <hr className="border-[1px] mt-3 lg:mt-[19px] border-gray-800" />
                </div>
                <div className="bg-transparent">
                  <h1 className="pt-3 lg:pt-[22px] pl-[29px] bg-transparent font-semibold font-inter text-[16px] leading-6 tracking-tight text-white">
                    Any mechanical keyboard enthusiasts in design?
                  </h1>
                </div>
                <div className="mx-auto w-auto lg:w-[730px]">
                  <hr className="border-[1px] mt-3 lg:mt-[19px] border-gray-800" />
                </div>
                <div className="bg-transparent">
                  <h1 className="pt-3 lg:pt-[22px] pl-[29px] bg-transparent font-semibold font-inter text-[16px] leading-6 tracking-tight text-white">
                    The More Important the Work, the More Important the Rest
                  </h1>
                </div>
                <div className="mx-auto w-auto lg:w-[730px]">
                  <hr className="border-[1px] mt-3 lg:mt-[19px] border-gray-800" />
                </div>
                <div className="bg-transparent">
                  <h1 className="pt-3 lg:pt-[22px] pb-4 lg:pb-0 pl-[29px] bg-transparent font-semibold font-inter text-[16px] tracking-tight leading-6 text-white">
                    How to design a product that can grow itself 10x in year
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Mixed;
