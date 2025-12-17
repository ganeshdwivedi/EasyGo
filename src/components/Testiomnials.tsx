import React from "react";
import useEmblaCarousel from "embla-carousel-react";

// data/testimonials.ts
const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    author: "Morem ipsum dolor",
    heading: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    author: "Morem ipsum dolor",
    heading: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    author: "Morem ipsum dolor",
    heading: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section className="w-full py-16 my-10 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What Our Customer Says
        </h2>
        <p className="text-gray-500 mt-2">
          Qorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Carousel + Controls */}
      <div className="relative md:px-32 flex items-center gap-4">
        <div className="absolute top-0 left-10  hidden md:block">
          <img
            className="w-16"
            src="/icons/double-quotes.svg"
            alt="double-quote-icon"
          />
        </div>
        {/* Left Button */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="hidden md:flex w-7 h-7 pb-2 text-2xl rounded-full border items-center justify-center hover:bg-[#2A2E55] hover:text-white transition"
        >
          ‹
        </button>

        {/* Carousel */}
        <div className="overflow-hidden flex-1" ref={emblaRef}>
          <div className="flex py-10">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] px-3 "
              >
                <div className="bg-white rounded-xl border !border-gray-200 shadow-xl p-6 h-full text-center">
                  <h4 className="text-gray-500 leading-6 text-xl font-medium">
                    {item.heading}
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed">{item.text}</p>
                  <p className="mt-4 font-semibold text-sm">{item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="hidden md:flex w-7 h-7 pb-2 text-2xl rounded-full border items-center  justify-center hover:bg-[#2A2E55] hover:text-white transition "
        >
          ›
        </button>
        <div className="absolute top-0 right-10 rotate-180 hidden md:block">
          <img
            className="w-16"
            src="/icons/double-quotes.svg"
            alt="double-quote-icon"
          />
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="flex md:hidden justify-center gap-4 mt-6">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="w-10 h-10 rounded-full border  flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="w-10 h-10 rounded-full border flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
