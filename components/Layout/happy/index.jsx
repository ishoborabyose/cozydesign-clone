import React from "react";
import ClientList from "./HappyList";

function Happy() {
  return (
    <section className="bg-textColor flex flex-col text-xl  px-2 py-0">
      <div className=" items-center flex flex-col text-xl leading-8 py-0 px-5">
        <h2 className="text-titlecolor font-font-soft text-3xl mt-16 text-center ">
          More than 150 happy clients
        </h2>
        <div className=" items-center flex flex-col justify-center ml-4 py-8 px-2">
          <ClientList />
        </div>
      </div>
    </section>
  );
}

export default Happy;
