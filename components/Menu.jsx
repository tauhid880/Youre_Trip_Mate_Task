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

const Menu = () => {
  return (
    <ul className="hidden md:flex font-inter items-center gap-8 md:gap-3 font-medium text-white">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Link href={item?.url}>
              <li className="cursor-pointer">{item.name}</li>
            </Link>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
