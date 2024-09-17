import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Query Hub | Home</title>
      </Helmet>
      <div className="animate__animated animate__zoomIn">
        <Banner></Banner>
        <HowItWorks></HowItWorks>
        <FAQ></FAQ>
      </div>
    </>
  );
};

export default Home;
