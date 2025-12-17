import React from "react";
import AppleStoreBtn from "./buttons/AppleStoreBtn";
import PlayStoreBtn from "./buttons/PlayStoreBtn";
import Logo from "./Logos/Logo";

const AboveFooter = () => {
  return (
    <div className="w-full flex justify-center py-10">
      {/* Card container */}
      <div className="relative w-[99%] rounded-2xl bg-[#2A2E55] flex items-center justify-center px-4 md:px-32 py-12  max-h-[400px]">
        <div className="w-1/2 z-10 relative bottom-0">
          <img
            src="/images/delivery-partner.png"
            alt="EasyGo delivery partner"
            className="bottom-8 max-w-lg relative"
          />
          <div className="absolute bottom-32 left-16">
            <Logo className="w-28 rotate-12" />
          </div>
        </div>

        <div className="w-1/2  relative flex justify-center items-center">
          <div
            className="
          absolute
          w-[400px] h-[400px]
          rounded-full
          bg-white/25
          border-white
          backdrop-blur-2xl
          border 
          flex flex-col items-center justify-center
          text-white overflow-hidden
        "
          >
            {/* Phone images */}
            <div className="relative -bottom-8 flex gap-4 mb-4">
              <img
                src="/images/iphone-16.png"
                alt="EasyGo app screen"
                className="w-[280px] h-[350px]  "
              />
            </div>
          </div>
          {/* Store buttons */}
          <div className=" absolute top-12 border  rounded-md border-white backdrop-blur-xs bg-[#5363FE]/35 p-5">
            <h3 className="text-black font-medium text-2xl mb-3">
              Experience the EasyGo App{" "}
            </h3>
            <div className="flex flex-row justify-between  items-center gap-3">
              <PlayStoreBtn dark />
              <AppleStoreBtn isWhite />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;
