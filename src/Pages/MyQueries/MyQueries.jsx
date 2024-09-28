import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaPlusCircle, FaEye, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { BiEdit } from "react-icons/bi";

const MyQueries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

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

  const filteredQueries = queries.filter(
    (query) => query.userEmail === user?.email
  );

  // Handle Delete
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: "bg-[#FFFFFF] rounded-xl",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/myQueries/${id}`);
          console.log(data);

          // Display Success Toast
          toast.success("Delete Successful.");

          // Refresh UI
          refetch();
        } catch (err) {
          console.log(err.message);
          toast.error(err.message);
        }
      } else {
        toast.error("Delete canceled!");
      }
    });
  };

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

                    <div className="flex items-center gap-2 justify-between mt-4">
                      {/* View Details Button */}
                      <Link to={`/queries/${query._id}`}>
                        <button className="inline-flex items-center px-4 py-2 bg-green-600 transition ease-in-out delay-75 hover:bg-green-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
                          <FaEye className="mr-2 text-xl" /> View Details
                        </button>
                      </Link>

                      {/* Update Button */}
                      <Link to={`/update/${query._id}`}>
                        <button className="inline-flex items-center px-4 py-2 bg-blue-600 transition ease-in-out delay-75 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
                          <FaEdit className="mr-2 text-xl" /> Update
                        </button>
                      </Link>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(query._id)}
                        class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                      >
                        <svg
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          fill="none"
                          class="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
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
