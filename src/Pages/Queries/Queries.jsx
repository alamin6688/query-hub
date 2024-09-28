import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

const Queries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [visibleQueries, setVisibleQueries] = useState(6);

  const {
    data: queries = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["queries", user?.email],
  });

  const getData = async () => {
    try {
      const { data } = await axiosSecure.get(`/myQueries`);
      return data;
    } catch (error) {
      console.error("Error fetching!", error);
    }
  };

  const handleRecommend = (id) => {
    console.log(id);
    navigate(`/queries/${id}`);
  };

  const loadMore = () => {
    setVisibleQueries((prevVisible) => prevVisible + 6);
  };

  return (
    <section className="min-h-[calc(100vh-538px)]">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl text-center font-extrabold pt-4 font-poppins text-gray-800 capitalize mt-2">
          Queries
        </h2>
        <p className="w-full md:w-2/3 mx-auto mt-4 text-center text-gray-900 font-poppins text-[18px] pb-4">
          Effortlessly manage and track all your submitted queries in one place.
          Stay organized and get the answers you need without any hassle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-8 pb-12">
          {queries.slice(0, visibleQueries).map((query) => (
            <div key={query._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={query.product_image} alt="Product Image" />
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
                  <span className="font-bold">Boycotting Reason:</span>{" "}
                  {query.boycotting_reason}
                </p>
                <p className="text-[18px]">
                  <span className="font-bold">Date Posted:</span>{" "}
                  {query.currentDate}
                </p>
                <p className="text-[18px]">
                  <span className="font-bold">Recommendation Count:</span> 0
                </p>
                <div className="my-2">
                  <button
                    onClick={() => handleRecommend(query._id)}
                    class="btn w-full font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-base-300 hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-none rounded-full group"
                    type="submit"
                  >
                    Recommend
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 19"
                      class="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
                    >
                      <path
                        class="fill-gray-800 group-hover:fill-gray-800"
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleQueries < queries.length && (
          <div className="text-center mt-4 mb-10">
            <button
              onClick={loadMore}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Queries;
