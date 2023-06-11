import React from "react";
import Wrapper from "./Wrapper";

const CreateContent = () => {
  return (
    <div className="my-10 lg:my-36 relative">
      <Wrapper>
        <div className="flex flex-col lg:flex-row lg:gap-[200px]  justify-between mx-auto ">
          <div className="bg-white rounded-md lg:w-[406px] lg:h-[550px] p-5">
            <div className="absolute bg-transparent lg:top-40 lg:left-[300px] lg:visible invisible">
              <img className="bg-transparent " src="/Frame.png" alt="" />
            </div>
            <p className="mb-1 bg-transparent text-black text-[18px] font-semibold font-inter">
              Results
            </p>
            <p className="bg-transparent text-black font-inter font-normal text-[14px]">
              Here's what our AI came up with.
            </p>
            <div className="bg-[#F4F6FF] lg:w-[352px] lg:h-[300px] rounded-md mt-3 p-3 shadow-md">
              <p className="bg-transparent text-black font-inter font-normal text-[14px]">
                Pain: You are an e-commerce business, and you want to sell your
                products all over the country, but you are confused about how to
                handle sales tax. <br /> Agitate: You have no idea how much
                sales tax to charge your customers in each state. <br />{" "}
                Solution: Use TaxSol, our full stack sales tax solution, to
                manage your sales tax for you!
              </p>
            </div>
            <div className="bg-[#F4F6FF] lg:w-[352px] lg:h-[150px] rounded-md mt-3 p-3 overflow-hidden shadow-md">
              <p className="bg-transparent text-black font-inter font-normal text-[14px] ">
                Pain: You are an e-commerce business, and you want to sell your
                products all over the country, but you are confused about how to
                handle sales tax. <br /> Agitate: You have no idea how much
                sales tax to charge your customers in each state. <br />{" "}
                Solution: Use TaxSol, our full stack sales tax solution, to
                manage your sales tax for you!
              </p>
            </div>
          </div>
          <div className="mt-8 lg:mt-16">
            <h1 className="font-outfit text-[22px] lg:text-[42px] leading-6 lg:leading-[48px] mb-[31px]">
              Create content efficiently and quickly with great AI <br />{" "}
              writing tools
            </h1>
            <div className="my-[21px] lg:my-[42px]">
              <p className="font-inter text-[12px] lg:text-[18px] leading-6 lg:leading-[28px]">
                150k+ users. No Credit Card Required. Pro designs and writing at
                no cost. Start for free. Ai Writer Tool | Generate text for
                ecom, social media, website, sales, blogs etc.
              </p>
            </div>
            <button className="font-inter rounded-sm lg:rounded-md bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:from-[#0035F5] active:to-[#A600F5] relative  text-white text-[10px] md:text-[16px] flex justify-center items-center leading-6 md:leading-5 px-[10px] md:px-[20px] py-1 md:py-3 lg:py-3">
              Start 14 Days Free Trial
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CreateContent;
