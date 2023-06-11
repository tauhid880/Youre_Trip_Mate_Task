import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Tools = () => {
  return (
    <div className="my-10 lg:my-36 relative">
      <Wrapper>
        <div>
          <div className="text-center">
            <h1 className="font-outfit font-semibold leading-10 text-5xl mb-7">
              54 exciting writing tools
            </h1>
            <p className="mb-16">
              AI engines take information from various sources and read them
              like a human would do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content-around justify-items-center gap-x-[100px] gap-y-[30px]">
            <div className="w-[304px] h-[120px] bg-[#282A37] rounded-lg flex justify-between">
              <img
                className="bg-transparent relative left-6 top-7 bottom-14 h-9 w-9"
                src="/image1.png"
                alt=""
              />
              <div className="bg-transparent mt-6 px-5">
                <h3 className="bg-transparent">Blog Headlines</h3>
                <p className="text-[#b7b8bb] mt-2 bg-transparent font-inter text-sm lg:leading-5">
                  Write a better blog title with <br /> our A.I tool.
                </p>
              </div>
            </div>
            <div className="w-[304px] h-[120px] bg-[#282A37] rounded-lg flex justify-between">
              <img
                className="bg-transparent relative left-3 top-7 bottom-14 h-9 w-9"
                src="/image3.png"
                alt=""
              />
              <div className="bg-transparent mt-6 px-5">
                <h3 className="bg-transparent ">Blog Intros</h3>
                <p className="text-[#b7b8bb] mt-2 bg-transparent font-inter text-sm lg:leading-5">
                  Generate a paragraph of blog <br /> content using Blog Intros
                  tool
                </p>
              </div>
            </div>
            <div className="w-[304px] h-[120px] bg-[#282A37] rounded-lg flex justify-between">
              <img
                className="bg-transparent relative left-6 top-7 bottom-14 h-9"
                src="/image2.png"
                alt=""
              />
              <div className="bg-transparent mt-6 px-5">
                <h3 className="bg-transparent">Blog Outline</h3>
                <p className="text-[#b7b8bb] mt-2 bg-transparent font-inter text-sm lg:leading-5">
                  Need an attention-grabbing <br /> headline for your article?
                </p>
              </div>
            </div>
            <div className="w-[304px] h-[120px] bg-[#282A37] rounded-lg flex justify-between">
              <img
                className="bg-transparent relative left-4 top-7 bottom-14 h-9 w-9"
                src="/image1.png"
                alt=""
              />
              <div className="bg-transparent mt-6 px-3">
                <h3 className="bg-transparent">Blog Conclusions</h3>
                <p className="text-[#b7b8bb] mt-2 bg-transparent font-inter text-sm lg:leading-5">
                  Write a better conclusions with <br /> AI writing tool.
                </p>
              </div>
            </div>
            <div className="w-[304px] h-[120px] bg-[#282A37] rounded-lg flex justify-between">
              <img
                className="bg-transparent relative left-6 top-7 bottom-14 h-9 inline-block"
                src="/image4.png"
                alt=""
              />
              <div className="bg-transparent mt-6 px-5">
                <h3 className="bg-transparent">Content Rewriter</h3>
                <p className="text-[#b7b8bb] mt-2 bg-transparent font-inter text-sm lg:leading-5">
                  Get AI writer to rewrite your <br /> sentence in a different
                  way.
                </p>
              </div>
            </div>
            <div className="w-[304px] h-[120px] bg-[#282A37] rounded-lg flex justify-between">
              <img
                className="bg-transparent relative left-6 top-7 bottom-14 h-9"
                src="/image1.png"
                alt=""
              />
              <div className="bg-transparent mt-6 px-5">
                <h3 className="bg-transparent">Product Description</h3>
                <p className="text-[#b7b8bb] mt-2 bg-transparent font-inter text-sm lg:leading-5">
                  Need an attention-grabbing <br /> headline for your article?
                </p>
              </div>
            </div>
            <div className="w-[304px] h-[120px] bg-[#282A37] rounded-lg flex justify-between">
              <img
                className="bg-transparent relative left-6 top-7 bottom-14 h-9"
                src="/image2.png"
                alt=""
              />
              <div className="bg-transparent mt-6 px-5">
                <h3 className="bg-transparent">PAS Copywriting Formula</h3>
                <p className="text-[#b7b8bb] mt-2 bg-transparent font-inter text-sm lg:leading-5">
                  Get AI writer to rewrite your <br /> sentence in a different
                  way.
                </p>
              </div>
            </div>
            <div className="w-[304px] h-[120px] bg-[#282A37] rounded-lg flex justify-between">
              <img
                className="bg-transparent relative left-6 top-7 bottom-14 h-9"
                src="/image4.png"
                alt=""
              />
              <div className="bg-transparent mt-6 px-5">
                <h3 className="bg-transparent">Company About Us</h3>
                <p className="text-[#b7b8bb] mt-2 bg-transparent font-inter text-sm lg:leading-5">
                  Write a better blog title with <br /> our A.I tool.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-[64px] hover:text-[#b7b8bb] font-semibold font-inter text-base leading-6">
            <Link href="">See all 54 available tools</Link>
          </div>
        </div>
      </Wrapper>
      <hr className="mt-[100px] border-[1px] border-gray-800" />
    </div>
  );
};

export default Tools;
