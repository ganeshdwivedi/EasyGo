const Whychoose = () => {
  return (
    <div className="w-full py-20 px-4 md:px-0">
      <h2 className="text-3xl font-medium !text-center">Why Choose Us</h2>
      <p className="font-medium !text-center mt-2 text-lg">
        Reliable Delivery Services Tailored to Your Needs
      </p>

      <div className="mt-5 flex flex-col md:flex-row items-center justify-between md:px-32 py-10 gap-28">
        <div className="flex flex-col items-center">
          <img className="w-20 h-20" src="/icons/real-time-tracking.svg" />
          <h3 className="font-medium text-center text-lg mt-5">
            Real-Time Tracking
          </h3>
          <p className="!text-center">Track your shipment at every step</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-20 h-20" src="/icons/affordable-pricing.svg" />
          <h3 className="font-medium text-center text-lg mt-5">
            Affordable Pricing
          </h3>
          <p className="!text-center">Transparent and Competitive rates</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-20 h-20" src="/icons/support.svg" />
          <h3 className="font-medium text-center text-lg mt-5">
            Customer Support
          </h3>
          <p className="!text-center">
            24/7 assistance for any questions or issues
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-20 h-20" src="/icons/web-browsex.svg" />
          <h3 className="font-medium text-center text-lg mt-5">
            Reliable Network
          </h3>
          <p className="!text-center">wide Coverage and trusted couriers</p>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
