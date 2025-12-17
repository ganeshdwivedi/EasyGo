import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <img src={"/icons/Logo.svg"} />
    </div>
  );
};

export default Logo;
