import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyQueries = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <Helmet>
        <title>My Queries | Query Hub</title>
      </Helmet>
      <section className="flex justify-center items-center min-h-[calc(100vh-538px)]">
        <div>
          <Link to="/add-query">
            <button className="btn btn-primary">Add Query</button>
          </Link>
        </div>
        <div>
          <Link to="/add-query">
            <button className="btn btn-primary">Add Query</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MyQueries;
