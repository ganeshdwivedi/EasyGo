import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HowWorks from "../components/HowWorks";
import Service from "../components/Service";
import Whychoose from "../components/Whychoose";
import Footer from "../components/Footer";
import TestimonialCarousel from "../components/Testiomnials";
import AboveFooter from "../components/AboveFooter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HowWorks />
      <Whychoose />
      <Service />
      <TestimonialCarousel />
      <AboveFooter />
      <Footer />
    </div>
  );
};

export default Home;
