import React from "react";

type LogoSize = "sm" | "md" | "lg";

interface LogoWhiteProps {
  size?: LogoSize;
}

const sizeClasses = {
  sm: {
    icon: "w-6",
    text: "text-xl",
    gap: "gap-0",
  },
  md: {
    icon: "w-10",
    text: "text-3xl",
    gap: "gap-0",
  },
  lg: {
    icon: "w-14",
    text: "text-4xl",
    gap: "gap-0",
  },
};

const LogoWhite = ({ size = "md" }: LogoWhiteProps) => {
  const s = sizeClasses[size];

  return (
    <div className={`flex items-center ${s.gap}`}>
      <img className={s.icon} src="/icons/logo-white.svg" alt="logo-white" />
      <h4 className={`text-white font-medium ${s.text}`}>EasyGo</h4>
    </div>
  );
};

export default LogoWhite;
