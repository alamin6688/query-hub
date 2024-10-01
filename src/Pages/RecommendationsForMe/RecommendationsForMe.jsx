import React from "react";
import { Helmet } from "react-helmet-async";

const RecommendationsForMe = () => {
  return (
    <>
      <Helmet>
        <title>Recommendations For Me | Query Hub</title>
      </Helmet>
      <section className="min-h-[calc(100vh-539px)] bg-gray-100">
        <div>
          <h2>Recommendations For Me</h2>
        </div>
      </section>
    </>
  );
};

export default RecommendationsForMe;
