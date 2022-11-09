import React from "react";
import Image from "next/image";
import man1 from "../../../public/images/man1.webp";
import man2 from "../../../public/images/man2.webp";
import man3 from "../../../public/images/man3.webp";
import susie from "../../../public/images/susie.webp";

function Clients() {
  return (
    <section className="flex flex-col bg-btnText items-center justify-center py-5 px-2  text-xl">
      <div className="flex relative flex-col items-center justify-center py-0 px-5">
        <div className="hidden  absolute lg:mt-[27.75rem] md:mt-[18.75rem] rounded-full p-2 lg:flex md:flex justify-center items-center m-auto border-2 w-[118px] h-[118px] border-opacity-50 border-btnText ">
          <div className="rounded-full p-2 flex justify-center items-center m-auto border-2 border-opacity-90 border-btnText">
            <div className="p-4 rounded-full  bg-btnText">
              <Image
                className=""
                src={
                  "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec72df4703e47_chat-icon-black.svg"
                }
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        <div className="w-[14.125rem] h-[10.625rem] flex flex-col leading-[1.875rem] my-0 ml-10">
          <h2 className=" font-font-soft leading-[32px] text-center font-semibold w-[210px] h-[32px] my-[60px] mr-[30px]  text-[24px] text-textColor">
            ❤️ from our clients
          </h2>

          <hr className=" border-titlecolor w-[40px] mx-auto h-[4px] border-2" />
        </div>

        <div className="lg:grid md:grid md:grid-cols-2  lg:grid-cols-2">
          <div className="w-[20.875rem] lg:w-[31.25rem] md:ml-6 lg:h-[47.4375rem] mt-[3.75rem] lg:ml-4  h-[43.125rem] items-end flex justify-end leading-[1.875rem] ">
            <div className="bg-textColor bg-bgClient w-[19.875rem] lg:w-[29.375rem] lg:h-[33.875rem]   h-[42.125rem] rounded-t-[80%]  rounded-b-[0rem] rounded-l-[100%] shadow-[shadow1] m-2 pt-20 pr-10 pb-20 pl-[3.75rem] text-center">
              <Image
                className="w-20 h-20 border-2 border-white rounded-[32%]  text-center inline-block solid ml-6"
                src={susie}
              />
              <h3 className="font-font-soft font-semibold leading-[1.875rem] text-right my-6 ml-3 text-titlecolor">
                &#8220;One of the top design professionals…&#8221;
              </h3>
              <p className="font-font-soft  text-lg text-btnText leading-[1.8rem] ml-[0.9375rem] text-right">
                I connect with hundreds of talented folks on a regular basis,
                and I can say with complete confidence that Lee is one of the
                best UX designers in Aquent/Vitamin T's global network.
              </p>
              <p className="w-[13.5rem] font-font-soft h-4 text-btnText text-xs my-6 leading-3 text-right uppercase">
                Susie Pollasky
              </p>
              <p className="w-[13.5rem] font-font-soft  h-8 text-btnText text-xs my-[0.3125rem] text-right">
                Now: Leadership Recruiting @ Product Design
              </p>
            </div>
          </div>

          <div className="w-[23.5625rem]  h-[46.5625rem]  items-end lg:w-[31.25rem] lg:mt-[3.75rem] lg:h-[47.4375rem]  flex justify-start leading-[1.875rem] ">
            <div className="bg-skyBlue bg-bgClient w-[22.5625rem] h-[45.5625rem] rounded-t-[100%] lg:w-[23.125rem] lg:h-[45.5625rem]  rounded-br-[50%]  shadow-[shadow1] m-2 pt-[80px] pr-[40px] pb-[80px] pl-[60px] text-center">
              <Image
                className="w-20 h-20 border-2 border-white rounded-[32%]  text-center inline-block solid mr-[24px]"
                src={man1}
              />
              <h3 className="font-font-soft font-semibold leading-[30px] text-left my-6  text-titlecolor">
                &#8220;They’re a very well-rounded organization…&#8221;
              </h3>
              <p className="font-font-soft  text-lg text-btnText leading-[28.8px] text-left">
                Cost per conversion and all of those metrics have dropped
                significantly. We used to pay an average of $100 per lead that
                converts… now we have that down to about $20. Sessions and
                contacts have also gone up astronomically, at least threefold.
                Organic search and social media referrals have all continued to
                skyrocket. We’re really pleased.
              </p>
              <p className="w-[216px] font-font-soft h-[16px] text-btnText  text-xs my-4 leading-3 text-left uppercase">
                Martin Spritzer
              </p>
              <p className="w-[216px] font-font-soft  h-[16px] text-btnText text-xs my-[5px] text-left">
                General Manager @ iQuoteXpress
              </p>
            </div>
          </div>

          <div className="w-[22.4375rem] lg:w-[31.25rem] lg:h-[32.9375rem]   h-[32.0625rem] items-start flex justify-end leading-[1.875rem] lg:ml-4 ml-4 md:ml-0 ">
            <div className="bg-subtitleColor lg:w-[23.125rem] lg:h-[29.25rem]  bg-bgClient w-[21.4375rem] h-[31.0625rem] rounded-tl-[100%]  rounded-b-[60%]  shadow-[shadow1] m-2 pt-20 pr-10 pb-20 pl-[3.75rem] text-center">
              <Image
                className="w-20 h-20 border-2 border-white rounded-[32%]  text-center inline-block solid ml-6"
                src={man2}
              />
              <h3 className="font-font-soft font-semibold leading-[1.875rem] text-left my-6  text-titlecolor">
                &#8220;The Project was successful&#8221;
              </h3>
              <p className="font-font-soft  text-lg text-btnText leading-[1.8rem] text-left">
                They were a pleasure to work with and I'm really happy with the
                results. They pretty much nailed it.
              </p>
              <p className=" font-font-soft h-4 text-btnText  text-xs my-4 leading-3 text-left uppercase">
                Eric weiss
              </p>
              <p className=" font-font-soft  h-4 text-btnText text-xs mt-[0.3125rem] text-left">
                Founder @ Full Cycle Product Development
              </p>
            </div>
          </div>

          <div className="w-[22.4375rem] lg:w-[31.25rem] lg:h-[32.9375rem]   h-[38.5625rem] items-start flex justify-start leading-[1.875rem]  ">
            <div className="bg-btnColor lg:w-[29.375rem] lg:h-[31.0625rem]  bg-bgClient w-[21.4375rem] h-[37.5625rem] rounded-tr-[100%]  rounded-b-[60%]  shadow-[shadow1] m-2 py-20 px-10 text-center">
              <Image
                className="w-20 h-20 border-2 border-white rounded-[32%]  text-center inline-block solid ml-6"
                src={man3}
              />
              <h3 className="font-font-soft font-semibold leading-[1.875rem] text-right my-6  text-titlecolor">
                &#8220;They’re just good people.&#8221;
              </h3>
              <p className="font-font-soft  text-lg text-btnText leading-[1.8rem] text-right">
                They strive to come up with good design, and they focus on all
                the right things. The quality of their work is high, and all the
                deliverables are very well-organized and professional.
              </p>
              <p className=" font-font-soft h-4 text-btnText  text-xs my-4 leading-3 text-right uppercase">
                Michael Weisfeld
              </p>
              <p className=" font-font-soft  h-4 text-btnText text-xs mt-[0.3125rem] text-right">
                Director of Digital Marketing @ National Funding
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
