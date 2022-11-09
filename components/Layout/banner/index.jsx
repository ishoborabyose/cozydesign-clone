import React from "react";
import Button from "../../Button";
import image from "../../../public/images/getcozy.png";
import Image from "next/image";

function Banner() {
  return (
    <section className="overflow-hidden  p-5  relative bg-header banner-gradient">
      <div className=" max-w-7xl lg:px-0 m-auto  lg:grid lg:grid-cols-2   ">
        <div>
          <h1 className="text-titlecolor  lg:w-[40.8125rem] lg:h-[19.8125rem] lg:text-[5.625rem] lg:font-black lg:leading-[6.1875rem] lg:mt-20 lg:mb-5 lg:py-[0.625rem] font-font-soft text-[3.75rem] font-black   mx-[0rem] mb-5 leading-[4.125rem] px-[0.625rem] py-[0.625rem]">
            Your design team for the cost of a salary.
          </h1>

          <p className="lg:w-[40.8125rem] lg:h-[280px]  w-[332] h-[318] font-font-soft text-btnText text-[30px] lg:text-[2.5rem]   mb-5  font-semibold leading-[2.4375rem] lg:leading-[3.25rem]  mx-0  my-5  py-[10px] px-0">
            Full-service design support that growing B2B and non-profit
            organizations need. Are you strained because you should have a
            design team but you don't?
          </p>

          <Button text="See how we work & what we can do " />
        </div>

        <div className="mt-[6.25rem] lg:hidden">
          <Image className="w-[20.875rem] h-[21.25rem]" src={image} />
        </div>
        <div className="hidden absolute -bottom-20  -right-14 lg:block mt-10">
          <Image
            src={
              "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy.png"
            }
            width={720}
            height={833}
            alt="bugger"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
