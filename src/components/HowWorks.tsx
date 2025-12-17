import React from "react";

const steps = [
  { id: 1, label: "Login or Sign Up" },
  { id: 2, label: "Enter pickup and delivery details" },
  { id: 3, label: "Choose a delivery option" },
  { id: 4, label: "Track your shipment in real-time" },
];
const HowWorks = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-32 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Header & Image */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-bold text-black mb-2">How it works</h2>
            <p className="text-gray-600 text-lg">
              Seamless and Simple Delivery, Every Step of the Way
            </p>
          </div>

          {/* Delivery Image */}
          <div className="w-full  rounded-2xl overflow-hidden shadow-sm">
            {/* Placeholder used: Replace src with your actual image path */}
            <img
              src="/images/how-works.png"
              alt="Courier delivering package to customer"
              className="w-full  object-cover"
            />
          </div>
        </div>

        {/* Right Side: Timeline Card */}
        <div className="w-full h-full border-gray-100 border-l-gray-300 bg-gradient-to-l from-[#ffff] to-[#f0f0f0] bg-gray-50/50 border border-gray-100 rounded-3xl p-8 md:p-12 flex flex-col justify-center shadow-sm">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.id} className="flex gap-6 relative">
                {/* Timeline Graphic Column */}
                <div className="flex flex-col items-center">
                  {/* Number Circle */}
                  <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-b from-[#dce1e9] to-[#cdd3e0] shadow-inner border border-white flex items-center justify-center shrink-0">
                    <span className="text-[#3c4a6b] font-bold text-lg drop-shadow-sm ">
                      {step.id}
                    </span>
                  </div>

                  {/* Dashed Connecting Line (Don't show for the last item) */}
                  {index !== steps.length - 1 && (
                    <div className="h-8  w-px border-l-2 border-dashed border-gray-300 my-1"></div>
                  )}
                </div>

                {/* Text Content Column */}
                <div className="pt-2.5 pb-8">
                  <p className="text-[#1f2937] text-lg font-medium">
                    {step.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
