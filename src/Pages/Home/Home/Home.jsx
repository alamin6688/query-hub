import React from "react";
import { Helmet } from "react-helmet-async";
import HowItWorks from "../HowItWorks/HowItWorks";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Query Hub | Home</title>
      </Helmet>
      <HowItWorks></HowItWorks>
    </>
  );
};

export default Home;
