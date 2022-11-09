import React from "react";
import Button from "../../Button";
import AwardList from "./AwardList";
export const Awards = () => {
  return (
    <section className="bg-bgBanner bg-no-repeat bg-cover  flex flex-col  items-center text-xl   justify-between ">
      <div className=" flex flex-col pl-5 lg:flex-row max-w-7xl m-auto  mt-[6.25rem]">
        <div className=" lg:justify-center lg:my-[6.25rem] lg:pr-[1.875rem] lg:pl-[8.8889rem] lg:text-left  ">
          <p className="text-3xl lg:mb-14 leading-8  uppercase font-bold text-textColor text-left ">
            🌴🐻🇺🇸
          </p>
          <h2 className="my-10 lg:my-5 w-[18.0625rem] h-[4.8125rem] ml-[0.625rem] text-textColor font-font-soft text-7xl leading-[4.8125rem]  text-left">
            Get cozy
          </h2>
          <h3 className="w-[18.75rem] lg:w-[27.1875rem] lg:h[6.75rem]  h-[13.5rem] text-subtitleColor font-font-regular text-[2.3125rem] leading-[3.375rem] ml-[0.9375rem]  text-left">
            Design & digital marketing <br /> in San Diego, California
          </h3>
          <p className="lg:w-[39.25rem] lg:h-[11rem] w-[18.75rem] h-[24.1875rem] text-textColor font-font-regular text-[1.375rem] leading-[2.2rem] my-10 lg:my-0 ml-[0.9375rem] text-left">
            We’re an award-winning design shop based in South Park, San Diego.
            We efficiently combine the best parts of user experience (UX) with
            creative design and execution to create effective collateral that
            connects with the human beings who interact with them. 🤯
          </p>
          <p className="lg:w-[39.25rem] lg:h-[6.625rem] w-[18.75rem] h-[13.1875rem] text-textColor font-font-regular text-[1.375rem] leading-[2.2rem] ml-[0.9375rem] text-left">
            No epic quests for inspiration. Just pragmatic collaboration and
            efficient results from big-agency graduates with decades of
            experience.
          </p>
          <Button text="why we do what we do" />
        </div>
        <div className="  my-[6.25rem] pl-5 ">
          <AwardList />
        </div>
      </div>
    </section>
  );
};
export default Awards;
