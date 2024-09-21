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
      <section className="min-h-[calc(100vh-538px)]">
        {/* Banner Section */}
        <div
          className="hero h-[300px] lg:h-[550px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/X7YzJVGh/adult-male-illustrator-working-tablet-device.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-full text-neutral-content text-center">
            <div>
              <h1 className="mb-5 text-5xl font-bold">My Queries</h1>
              <p className="mb-5 w-full md:w-2/3 mx-auto">
                Manage your queries easily. View, update or delete your queries
                and add new ones to get the answers you need.
              </p>
            </div>
          </div>
        </div>

        {/* My Query Section */}
        <div className="my-queries-section p-6">
          {/* Logic for displaying user queries */}
          {/* If no queries found */}
          <div className="text-center">
            <p className="mb-5 text-lg font-medium">No queries found.</p>
            <Link to="/add-query">
              <button className="btn border-none px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Add Your Query
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyQueries;
