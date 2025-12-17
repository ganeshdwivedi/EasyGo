import React from "react";

const Service = () => {
  return (
    <section className="bg-[#242b4d] min-h-[500px] flex items-center justify-center px-4 md:px-32 py-20 rounded-2xl mx-2">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-left md:w-1/3">
          <h2 className="text-white text-4xl font-semibold mb-4">Services</h2>
          <p className="text-white font-light text-lg leading-relaxed">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-60 h-72 rounded-lg border border-white/20 bg-gradient-to-b from-[#3e456d] to-[#2b3155] flex flex-col items-center justify-center text-center shadow-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="mb-6">
              <img src="/icons/express-delivery.svg" />
            </div>
            <h3 className="text-white text-lg font-semibold">
              Standard Delivery
            </h3>
            <p className="text-white text-sm mt-2 font-light">
              Delivery Time: 2-3 Day
            </p>
          </div>

          <div className="w-60 h-72 rounded-lg border border-white/20 bg-gradient-to-b from-[#3e456d] to-[#2b3155] flex flex-col items-center justify-center text-center shadow-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="mb-6 relative">
              <img src="/icons/free-delivery.svg" />
            </div>
            <h3 className="text-white text-lg font-semibold">
              Express Delivery
            </h3>
            <p className="text-white text-sm mt-2 font-light">
              Delivery Time: 1 Day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
