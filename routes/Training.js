import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import TrainigSection from "../components/Training";
import Footer from "../components/Footer";

const Trainig = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="TRAINIG" text="Pre-Flight & In-Flight Training" />
      <TrainigSection/>
      <Footer />
    </div>
  );
};

export default Trainig;
