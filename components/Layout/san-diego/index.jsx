import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";

function SanDiego() {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef) {
      videoRef.current?.play();
    }
  }, []);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full scale-[3.2]">
        <video ref={videoRef} loop autoPlay muted className="w-full h-full">
          <source
            src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black And White Video Of Man Infront Of The Computer-transcode.webm"
            data-wf-ignore="true"
          />
        </video>
      </div>

      <div className="relative bg-black bg-opacity-40  ">
        <div className="relative   md:left-52 md:flex-row md:items-center lg:left-52 flex lg:flex-row lg:items-center flex-col gap-12 py-10 px-8 ">
          <div>
            <Image
              src={
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86db21b4d0ca56dee6a263_sddd_lockup_reverse.svg"
              }
              width={140}
              height={120}
              alt="san diego design team"
            />
          </div>
          <div className="font-font-soft  flex flex-col gap-4">
            <h3 className="text-btnText  lg:w-[26.75rem] lg:h-[6.625rem] lg:text-[3rem] text-4xl font-bold">
              Psst…
              <br /> are you a designer?
            </h3>
            <h5 className="text-btnText font-bold text-[0.94rem]  md:w-[25rem] md:h-[6rem] lg:w-[45rem] lg:h-[6rem] lg:text-xl  leading-[1.5rem]">
              Consider joining our{" "}
              <span className="text-redTitle">San Diego Design Designers</span>{" "}
              group. More than 700 people, we meet online via Slack and in
              person at social events around the city. It’s a great opportunity
              to share ideas, get inspired, find support, and celebrate great
              design.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SanDiego;
