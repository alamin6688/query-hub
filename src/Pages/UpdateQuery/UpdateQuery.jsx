import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const UpdateQuery = () => {
  const query = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Update Query | Query Hub</title>
      </Helmet>
      <div className="max-w-screen-2xl mx-auto flex justify-center items-center min-h-[calc(100vh-538px)] md:mt-14 md:mb-14">
        <section className="w-full md:w-3/4 lg:w-1/2 p-4 pb-6 md:p-6 mx-auto bg-base-100 rounded-md shadow-2xl animate__animated animate__zoomIn">
          <h2 className="text-2xl text-center font-extrabold lg:text-3xl text-gray-700 py-4 font-poppins">
            Update Product Query
          </h2>
          <hr className="mt-2" />

          <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* Product Name */}
              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="product_name"
                >
                  Product Name
                </label>
                <input
                  defaultValue={query.product_name}
                  id="product_name"
                  name="product_name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              {/* Product Brand */}
              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="product_brand"
                >
                  Product Brand
                </label>
                <input
                  defaultValue={query.product_brand}
                  id="product_brand"
                  name="product_brand"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="space-y-4">
              {/* Query Title */}
              <div className="flex flex-col gap-2 mt-4">
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="query_title"
                >
                  Query Title
                </label>
                <input
                  defaultValue={query.query_title}
                  id="query_title"
                  name="query_title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              {/* Image URL */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="product_image"
                >
                  Product Image URL
                </label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  name="product_image"
                  id="product_image"
                  defaultValue={query.product_image}
                  type="text"
                />
              </div>

              {/* Boycotting Reason */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-semibold">
                  Boycotting Reason Details
                </label>
                <textarea
                  defaultValue={query.boycotting_reason}
                  id="boycotting_reason"
                  name="boycotting_reason"
                  className="border w-full p-2 rounded-md"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-8 pb-4">
              <button className="btn border-none px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Update Query
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default UpdateQuery;
