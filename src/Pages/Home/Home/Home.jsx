import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import FAQ from "../FAQ/FAQ";
import RecentQueries from "../../RecentQueries/RecentQueries";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Query Hub</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <RecentQueries></RecentQueries>
        <HowItWorks></HowItWorks>
        <FAQ></FAQ>
      </div>
    </>
  );
};

export default Home;
