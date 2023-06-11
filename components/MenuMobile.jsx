import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Demos", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Blog", url: "/blog" },
  { id: 4, name: "Pages", url: "/pages" },
  { id: 4, name: "Contact", url: "/contact" },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh - 50px)] border-t text-white">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Link href={item?.url}>
              <li
                className="py-4 px-5 border-b"
                onClick={() => setMobileMenu(false)}
              >
                {item.name}
              </li>
            </Link>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
