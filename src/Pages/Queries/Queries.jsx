import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Queries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [visibleQueries, setVisibleQueries] = useState(6);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  // Fetch data with filter, sort, and search applied
  const getData = async () => {
    try {
      const { data } = await axiosSecure.get(`/myQueries`, {
        params: { filter, sort, search },
      });

      // Sort data based on `currentDate` field
      const sortedData = data.sort((a, b) => {
        if (sort === "asc") {
          return new Date(a.currentDate) - new Date(b.currentDate);
        }
        if (sort === "dsc") {
          return new Date(b.currentDate) - new Date(a.currentDate);
        }
        return 0;
      });

      return sortedData;
    } catch (error) {
      console.error("Error fetching data!", error);
      return [];
    }
  };

  const {
    data: queries = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn: getData,
    queryKey: ["queries", user?.email, filter, sort, search],
  });

  // Refetch data when filters or sorting change
  useEffect(() => {
    refetch();
  }, [filter, sort, search, refetch]);

  // Handle recommendation navigation
  const handleRecommend = (id) => {
    navigate(`/queries/${id}`);
  };

  // Load more queries
  const loadMore = () => {
    setVisibleQueries((prevVisible) => prevVisible + 6);
  };

  // Reset all filters and search
  const handleReset = () => {
    setFilter("");
    setSort("");
    setSearch("");
    setSearchText("");
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  return (
    <>
      <Helmet>
        <title>Queries | Query Hub</title>
      </Helmet>
      <section className="min-h-[calc(100vh-188px)]">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl text-center font-extrabold pt-6 font-poppins text-gray-800 capitalize mt-2">
            Queries
          </h2>
          <p className="w-full md:w-2/3 mx-auto mt-4 text-center text-gray-900 font-poppins text-[18px] pb-4">
            Effortlessly manage and track all your submitted queries in one
            place. Stay organized and get the answers you need without any
            hassle.
          </p>


          <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-5 my-6">
            <div>
              <select
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
                name="category"
                id="category"
                className="border p-4 rounded-lg"
              >
                <option value="">Filter By Brand Name</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Sony">Sony</option>
                <option value="Huawei">Huawei</option>
              </select>
            </div>

            <form onSubmit={handleSearch}>
              <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input
                  className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                  type="text"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  name="search"
                  placeholder="Enter Product Name"
                  aria-label="Enter Product Name"
                />
                <button className="px-6 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Search
                </button>
              </div>
            </form>

            <div>
              <select
                onChange={(e) => setSort(e.target.value)}
                value={sort}
                name="sort"
                id="sort"
                className="border p-4 rounded-md"
              >
                <option value="">Sort By Date Posted</option>
                <option value="asc">Ascending Order</option>
                <option value="dsc">Descending Order</option>
              </select>
            </div>

            <button
              onClick={handleReset}
              className="btn text-[16px] leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Reset
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-8 pb-12 mb-10">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              queries.slice(0, visibleQueries).map((query) => (
                <div
                  key={query._id}
                  className="card bg-base-100 shadow-2xl animate__animated animate__zoomIn"
                >
                  <figure>
                    <img src={query.product_image} alt="Product Image" />
                  </figure>
                  <div className="card-body">
                    <div className="flex items-center gap-2">
                      <h2 className="card-title font-bold">
                        {query.product_name}
                      </h2>
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
                      <span className="font-bold">Date Posted:</span>
                      {new Date(query.currentDate).toLocaleDateString()}
                    </p>
                    <p className="text-[18px]">
                      <span className="font-bold">Recommendation Count:</span> 0
                    </p>
                    <div className="my-2">
                      <button
                        onClick={() => handleRecommend(query._id)}
                        className="btn w-full font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-base-300 hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-none rounded-full group"
                        type="submit"
                      >
                        Recommend
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 19"
                          className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
                        >
                          <path
                            className="fill-gray-800 group-hover:fill-gray-800"
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L1.29289 6.29289C0.902369 6.68342 0.902369 7.31658 1.29289 7.70711C1.68342 8.09763 2.31658 8.09763 2.70711 7.70711L8 2.41421L13.2929 7.70711C13.6834 8.09763 14.3166 8.09763 14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289L8.70711 0.292893ZM9 18V1H7V18H9Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Load More */}
          {visibleQueries < queries.length && (
            <div className="w-full items-center flex justify-center mt-4 mb-10">
              <button
                onClick={loadMore}
                class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#0A0D2D] rounded-md group"
              >
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#12163C] rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#12163C] rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#181B46] rounded-md group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Load More
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Queries;
