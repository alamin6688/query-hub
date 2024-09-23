import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaPlusCircle } from "react-icons/fa";

const MyQueries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: queries = [],
    isLoading,
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

  const filteredQueries = queries.filter(
    (query) => query.userEmail === user?.email
  );

  return (
    <>
      <Helmet>
        <title>My Queries | Query Hub</title>
      </Helmet>
      <section className="min-h-[calc(100vh-538px)]">
        <div
          className="hero h-[300px] lg:h-[450px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/X7YzJVGh/adult-male-illustrator-working-tablet-device.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-full text-neutral-content text-center">
            <div>
              <h1 className="mb-5 text-5xl font-bold">Queries</h1>
              <p className="mb-5 w-full md:w-2/3 mx-auto">
                Manage your queries easily. View, update, or delete your queries
                and add new ones to get the answers you need.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="py-4 md:pt-6 md:pb-4 lg:pt-8 lg:pb-6">
            <h1 className="text-2xl text-center font-extrabold lg:text-3xl text-gray-700 py-4 font-poppins">
              My Queries
            </h1>
          </div>
          <hr className="border-2 border-gray-600 mb-6 md:mb-8" />
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 md:pb-12 lg:pb-16">
              {filteredQueries.map((query) => (
                <div key={query._id} className="card bg-base-100 shadow-xl">
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
                      <span className="font-bold">Date Posted:</span>{" "}
                      {query.currentDate}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <Link to={`/query/${query._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                      <Link to={`/update/${query._id}`}>
                        <button className="btn btn-secondary">Update</button>
                      </Link>
                      <button
                        className="btn btn-error"
                        onClick={() => handleDelete(query._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show this div when the length is 1 or more */}
            {filteredQueries.length >= 1 && (
              <div className="mb-10 text-center">
                <Link to="/add-query">
                  <button className="btn border-none px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    <FaPlusCircle /> Add New One
                  </button>
                </Link>
              </div>
            )}

            {filteredQueries.length === 0 && (
              <div className="text-center min-h-screen">
                <p className="mb-5 text-lg font-medium">No queries found.</p>
                <Link to="/add-query">
                  <button className="btn border-none px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Add Your Query
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyQueries;
