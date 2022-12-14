import React from "react";
import Image from "next/image";
import Link from "next/link";
import crunch from "../../../public/images/crunch.webp";
import SocialList from "./SocialList";
export default function Footer() {
  return (
    <footer className="font-font-semibold flex lg:px-6 flex-col px-4 py-12  bg-btnText ">
      <div className="border-b border-btnColor lg:justify-between  lg:flex-row flex flex-col items-center gap-4 px-6">
        <div className="lg:flex lg:gap-5">
          <div className="w-[4.7rem]">
            <Image
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8782865afd27755f3cb5bd_Cozy_logo_denim.svg"
              width={600}
              height={412}
              alt="cozy black logo"
            />
          </div>
          <ul className="flex flex-col text-btnColor lg:gap-4 lg:flex-row items-center">
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/work"}>Work</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="lg:flex lg:gap-5 lg:py-4  lg:items-center  ">
          <div className="flex gap-5">
            <div className="w-[1.25rem] ">
              <Image
                src={
                  "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f862ba8b2efe0fc2b486af2_emoji%402x.webp"
                }
                width={256}
                height={256}
                alt={"san diego"}
              />
            </div>
            <p className="text-redTitle  lg:w-[16rem]  leading-[0.975rem] text-sm">
              San Diego Digital Designers
            </p>
          </div>
          <div className="flex justify-center py-4 w-full">
            <SocialList />
          </div>
        </div>
      </div>

      <div className="lg:flex lg:justify-between">
        <div className="py-6 flex gap-6 px-8">
          <div className="flex flex-col items-center gap-2">
            <div>
              <Image
                src={
                  "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg"
                }
                height={193}
                width={513}
                alt="..."
                className="w-[8rem]"
              />
            </div>
            <h5 className="text-textColor font-font-book text-xs font-bold">
              BBB rating: A+
            </h5>
          </div>
          <div>
            <Image
              src={
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/634dd43d0cf9ec7420324d59_bod-new_shield-logo-member-p-500.png"
              }
              width={250}
              height={262}
              alt={"..."}
              className="w-[8rem]"
            />
          </div>

          <div>
            <Image
              src={crunch}
              width={350}
              height={362}
              alt={"..."}
              className="w-[8rem]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 items-center">
          <h4 className="text-center text-sm">
            Made with love in beautiful, sunny San Diego. ??2021
          </h4>
          <ul className="flex gap-12 text-tartiary text-sm">
            <li>Privacy</li>
            <li>Photo credit</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
