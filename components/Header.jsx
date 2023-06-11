import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[50px]");
      } else {
        setShow("shadow-md");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[60px] md:h-[80px] bg-[#12141d] flex items-center justify-between z-20 sticky top-0 transition-transform duration-300`}
    >
      <Wrapper className="h-[60px] flex justify-between gap-5 items-center">
        <div className="flex items-center justify-center gap-8 md:gap-4 ">
          <Link href="/">
            <img src="/logo.png" className="w-[50px] md:w-[150px]" />
          </Link>

          <Menu />
          {mobileMenu && (
            <MenuMobile setMobileMenu={setMobileMenu}></MenuMobile>
          )}
        </div>

        <div className="flex items-center gap-8 md:gap-4 text-white ">
          {/* Sign in start */}
          <div className=" flex justify-center items-center  hover:bg-gray-300/[0.3] cursor-pointer ">
            <button className="rounded-sm bg-base border border-gray-300 relative text-white text-[10px] md:text-[16px] w-full flex justify-center items-center leading-6 md:leading-5 px-[10px] md:px-[12px] lg:py-2 ">
              Sign in
            </button>
          </div>
          {/* Sign in end */}

          {/* Get Started start */}
          <div className="flex justify-center items-center  hover:bg-gray-300/[0.3] cursor-pointer">
            <button className="rounded-sm bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:from-[#0035F5] active:to-[#A600F5] relative  text-white text-[10px] md:text-[16px] flex justify-center items-center leading-6 md:leading-5 px-[10px] md:px-[12px] lg:py-2">
              Get Started Free
            </button>
          </div>
          {/* Get Started end */}

          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 md:hidden">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              ></VscChromeClose>
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              ></BiMenuAltRight>
            )}
          </div>
          {/* Mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
