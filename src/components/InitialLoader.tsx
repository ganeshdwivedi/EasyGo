import { useEffect, useState } from "react";
import LogoWhite from "./Logos/LogoWhite";

export default function InitialLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const slideTimer = setTimeout(() => setSlide(true), 1800); // start slide
    const hideTimer = setTimeout(() => setShowLoader(false), 3000); // end loader

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showLoader) return children;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative w-52 h-16 overflow-hidden">
        {/* Static logo */}
        <img
          className="w-16 animate-rotate-swing"
          src="/icons/logo-white.svg"
          alt="logo-white"
        />

        {/* Sliding logo */}
        <div
          className={`absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black transform ${
            slide ? "animate-slide-in" : "-translate-x-full"
          }`}
        >
          <LogoWhite />
        </div>
      </div>
    </div>
  );
}
