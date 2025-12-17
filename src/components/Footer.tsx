import React from "react";
import Logo from "./Logos/Logo";
import PlayStoreBtn from "./buttons/PlayStoreBtn";
import AppleStoreBtn from "./buttons/AppleStoreBtn";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 w-full font-sans">
      <div className="md:px-32">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Brand & App Stores */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <Logo />
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 mt-6">
              {/* Google Play Button */}
              <PlayStoreBtn />
              {/* App Store Button */}
              <AppleStoreBtn />
            </div>
          </div>

          {/* Links Section (Spans 3 columns on large screens) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-[#242b4d] font-bold text-lg mb-6 uppercase tracking-wide">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  "About us",
                  "Privacy Policy",
                  "Terms & Conditions",
                  "FAQ",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#242b4d] hover:translate-x-1 inline-block transition-transform duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h3 className="text-[#242b4d] font-bold text-lg mb-6 uppercase tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {["Book a Delivery", "Become a Courier"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#242b4d] hover:translate-x-1 inline-block transition-transform duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h3 className="text-[#242b4d] font-bold text-lg mb-6 uppercase tracking-wide">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-600">
                  <p className="font-medium hover:text-[#242b4d] transition-colors cursor-pointer">
                    (505) 555-0125
                  </p>
                  <p className="text-sm text-gray-500">(9am - 5pm)</p>
                </li>
                <li>
                  <a
                    href="mailto:Abc123@gmail.com"
                    className="text-gray-600 hover:text-[#242b4d] transition-colors"
                  >
                    Abc123@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Follow Us */}
            <div>
              <h3 className="text-[#242b4d] font-bold text-lg mb-6 uppercase tracking-wide">
                Follow Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-gray-600  transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ">
                      <img
                        src="/icons/instagram.svg"
                        alt="Instagram-icon"
                        className="text-lg"
                      />
                    </div>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors duration-300 group"
                  >
                    <div className="w-7 h-7 rounded-sm bg-gray-900 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                      <img
                        src="/icons/twitter.svg"
                        alt="Twitter-icon"
                        className="text-lg"
                      />
                    </div>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#1877F2] transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8  flex items-center justify-center ">
                      <img
                        src="/icons/facebook.svg"
                        alt="Facebook-icon"
                        className="text-lg"
                      />
                    </div>
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
      </div>
      <div className="w-full bg-[#242b4d] text-white py-6 rounded-2xl text-center text-sm font-light shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="opacity-80 hover:opacity-100 transition-opacity">
          @ 2024 EasyGo | Delivery App All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
