import React from "react";
import logo from "../../../public/vectors/cozy-logo.svg";
import Image from "next/image";
import menu from "../../../public/vectors/menu.svg";
import Link from "next/link";

const NavBar = () => {
  return (
    <section className="sticky top-0 z-50">
      <div className="bg-header space-x-4 hidden lg:flex header-gradient lg:justify-between lg:px-5 items-center justify-center ">
        <div className="px-[0.9375rem] py-5 ">
          <Link href={"/"}>
            <Image className="w-[6.25rem] h-[4.3125rem]" src={logo} />
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <div className="text-btnText hover:text-titlecolor hover:scale-95 font-font-soft text-2xl text-left font-semibold leading-9 py-7 px-4">
            <Link href="/get-cozy">Get Cozy</Link>
          </div>
          <div className="text-btnText hover:text-titlecolor hover:scale-95 font-font-soft text-2xl text-left font-semibold leading-9 py-7 px-4">
            <Link href="/what-we-do"> What we do</Link>
          </div>
          <div className="text-btnText hover:text-titlecolor hover:scale-95 font-font-soft text-2xl text-left font-semibold leading-9 py-7 px-4">
            <Link href="/our-work">Our work</Link>
          </div>
          <div className="text-btnText hover:text-titlecolor hover:scale-95 font-font-soft text-2xl text-left font-semibold leading-9 py-7 px-4">
            <Link href="/the-blog">The blog</Link>
          </div>
          <div className="text-btnText hover:text-titlecolor hover:scale-95 font-font-soft text-2xl text-left font-semibold leading-9 py-7 px-4">
            <Link href="say-hi">Say hi</Link>
          </div>
        </div>
      </div>
      {/* Mobile */}

      <div className="bg-header space-x-4 lg:hidden header-gradient items-center justify-center flex">
        <div className="px-[0.9375rem] py-5 ">
          <Image className="w-[6.25rem] h-[4.3125rem]" src={logo} />
        </div>

        <div className="p-[1.125rem]">
          <Image className="w-[1.875rem] h-[1.875rem] " src={menu} />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
