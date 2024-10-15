import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const RecentQueries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const visibleQueries = 6; // Adjust the number of recent queries to show here

  const getData = async () => {
    try {
      const { data } = await axiosSecure.get(`/myQueries`);
      // Sort by most recent date
      return data.sort(
        (a, b) => new Date(b.currentDate) - new Date(a.currentDate)
      );
    } catch (error) {
      console.error("Error fetching data!", error);
    }
  };

  const {
    data: queries = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn: getData,
    queryKey: ["queries", user?.email],
  });

  const handleRecommend = (id) => {
    // Function to handle recommending a query
    console.log("Recommend clicked for query with id:", id);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="mb-16">
      <div className="py-4 px-4 max-w-screen-2xl mx-auto">
        <h2 className="text-2xl text-center font-extrabold lg:text-3xl text-gray-800 pt-4 font-poppins">
          Recent Queries
        </h2>
        <p className="w-full md:w-2/3 mx-auto mt-4 mb-6 text-center text-gray-900 font-poppins text-[18px]">
          Stay updated with our most recent product queries. Dive into user
          insights, explore reasons for boycotting and engage in thoughtful
          recommendations!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-screen-2xl mx-auto animate__animated animate__zoomIn">
        {queries.slice(0, visibleQueries).map((query) => (
          <div
            key={query._id}
            className="card bg-base-100 shadow-2xl hover:shadow-lg duration-300 hover:scale-[1.05] transition-all"
          >
            <figure>
              <img
                src={query.product_image}
                alt="Product"
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2">
                <h2 className="card-title font-bold">{query.product_name}</h2>
                <h2 className="card-title text-gray-600">
                  ({query.product_brand})
                </h2>
              </div>
              <p className="text-[18px]">
                <span className="font-bold">Query Title:</span>{" "}
                {query.query_title}
              </p>
              <p className="text-[18px]">
                <span className="font-bold">Alternation Reason:</span>{" "}
                {query.boycotting_reason}
              </p>
              <p className="text-[18px]">
                <span className="font-bold">Date Posted:</span>{" "}
                {new Date(query.currentDate).toLocaleDateString()}
              </p>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[16px]">
                    <span className="font-bold">Query Creator: </span>
                  </p>
                  <p className="text-xl font-semibold italic text-gray-700">
                    {query.userName}
                  </p>
                </div>
                <img
                  src={query.userPhotoURL}
                  alt="User PhotoURL Image"
                  className="w-10 h-10 rounded-md object-cover"
                  title="Service Provider Image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Button to navigate to the /queries page */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/queries")}
          className="relative font-poppins inline-flex h-12 transition-transform duration-300 transform overflow-hidden rounded-lg p-[1px] focus:outline-none bg-slate-950 text-white hover:scale-105 hover:bg-slate-800"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000ff_0%,#00ffff_50%,#0000ff_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium backdrop-blur-3xl gap-2">
            View All Queries
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default RecentQueries;
