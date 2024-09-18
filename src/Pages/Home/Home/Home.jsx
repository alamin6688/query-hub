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
      <div>
        <Banner></Banner>
        <HowItWorks></HowItWorks>
        <FAQ></FAQ>
      </div>
    </>
  );
};

export default Home;
