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
      <div className="flex justify-center items-center min-h-[calc(100vh-538px)]">
        <Link to="/add-query">
          <button className="btn btn-primary">Add Query</button>
        </Link>
      </div>
    </>
  );
};

export default MyQueries;
