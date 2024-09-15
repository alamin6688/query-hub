import React from "react";
import { Helmet } from "react-helmet-async";
import HowItWorks from "../HowItWorks/HowItWorks";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Query Hub | Home</title>
      </Helmet>
      <HowItWorks></HowItWorks>
      <FAQ></FAQ>
    </>
  );
};

export default Home;
