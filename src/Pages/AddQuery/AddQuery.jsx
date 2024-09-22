import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddQuery = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const product_brand = form.product_brand.value;
    const query_title = form.query_title.value;
    const product_image = form.product_image.value;
    const boycotting_reason = form.boycotting_reason.value;

    // Get current date in dd/mm/yyyy format
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-GB");
    const formattedTime = currentDate.toLocaleTimeString();

    // Query data object
    const addQueryData = {
      product_name,
      product_brand,
      query_title,
      product_image,
      boycotting_reason,
      user_email: user?.email,
      user_name: user?.displayName,
      user_photoURL: user?.photoURL,
      query_date: startDate,
      current_date: formattedDate,
      current_time: formattedTime,
    };
    console.log(addQueryData);

    try {
      const { data } = await axiosSecure.post("/myQueries", addQueryData);
      toast.success("Query Data Updated Successfully.");
      console.log(data);
      navigate("/my-queries");
    } catch (err) {
      console.error(err, err.message);
      toast.error("Failed to submit the query!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Query | Query Hub</title>
      </Helmet>
      <div className="max-w-screen-2xl mx-auto flex justify-center items-center min-h-[calc(100vh-538px)] md:mt-14 md:mb-14">
        <section className="w-full md:w-3/4 lg:w-1/2 p-4 pb-6 md:p-6 mx-auto bg-base-100 rounded-md shadow-2xl animate__animated animate__zoomIn">
          <h2 className="text-2xl text-center font-extrabold lg:text-3xl text-gray-700 py-4 font-poppins">
            Add Product Query
          </h2>
          <hr className="mt-2" />

          <form onSubmit={handleSubmit}>
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
                  type="text"
                />
              </div>

              {/* Boycotting Reason */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-semibold">
                  Boycotting Reason Details
                </label>
                <textarea
                  id="boycotting_reason"
                  name="boycotting_reason"
                  className="border w-full p-2 rounded-md"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-8 pb-4">
              <button className="btn border-none px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Submit Query
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddQuery;
