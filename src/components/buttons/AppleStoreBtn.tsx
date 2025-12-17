import React from "react";

type ButtonSize = "sm" | "md" | "lg";

interface AppleStoreBtnProps {
  isWhite?: boolean;
  size?: ButtonSize;
}

const sizeClasses = {
  sm: {
    button: "px-3 py-1.5 gap-2 rounded-md",
    icon: "w-5 h-5",
    smallText: "text-[9px]",
    mainText: "text-sm",
  },
  md: {
    button: "px-4 py-2 gap-3 rounded-lg",
    icon: "w-6 h-6",
    smallText: "text-[8px]",
    mainText: "text-base",
  },
  lg: {
    button: "px-5 py-3 gap-4 rounded-xl",
    icon: "w-7 h-7",
    smallText: "text-[11px]",
    mainText: "text-lg",
  },
};

const AppleStoreBtn = ({
  isWhite = false,
  size = "md",
}: AppleStoreBtnProps) => {
  const s = sizeClasses[size];

  return (
    <button
      className={`
        flex items-center ${s.button}
        ${isWhite ? "bg-black  border-white" : "bg-white border-gray-300"}
        border
        hover:shadow-lg hover:border-[#242b4d]
        transition-all duration-300
        w-fit group
      `}
    >
      <img
        alt="apple-store-icon"
        src={isWhite ? "/icons/flowbite_apple-solid.svg" : "/icons/Apple.svg"}
        className={s.icon}
      />

      <div className="text-left">
        <p
          className={`
            ${s.smallText}
            uppercase font-semibold leading-none
            ${isWhite ? "text-white/80" : "text-gray-500"}
          `}
        >
          Download on the
        </p>

        <p
          className={`
            ${s.mainText}
            font-medium leading-none mt-1
            ${isWhite ? "text-white" : "text-black"}
          `}
        >
          App Store
        </p>
      </div>
    </button>
  );
};

export default AppleStoreBtn;
