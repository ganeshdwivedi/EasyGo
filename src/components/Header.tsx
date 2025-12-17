const BtnClass =
  "bg-[#1D7BD8] font-medium transition-transform transform-gpu hover:bg-[#2A2E55] cursor-pointer py-2 px-4 font-medium rounded-sm text-white";
const Header = () => {
  return (
    <div className="relative w-full">
      <img
        className=" md:mx-3 md:w-[98%] md:h-full h-[300px] object-cover"
        src="/images/header-img.png"
      />
      <div className="z-20 absolute top-10 left-5 px-4 md:top-40 md:left-32">
        <h2 className="text-white text-2xl md:text-6xl font-medium md:leading-14">
          Fast, Reliable, and Secure <br /> Delivery Services
        </h2>
        <h4 className="text-white overflow-wrap wrap-break-word mt-5 font-medium text-lg md:text-xl">
          From parcels to packages, we deliver everything – anywhere, anytime.
        </h4>
        <div className="flex  flex-row item-center gap-5 mt-7">
          <button className={BtnClass}>Book a Delivery</button>
          <button className={BtnClass}>Become a Courier</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
