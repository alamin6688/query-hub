import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const QueryDetails = () => {
  const query = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // Function to format the timestamp
  const formatTimestamp = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert hour '0' to '12'

    return `${day}/${month}/${year}, ${hours}:${minutes} ${ampm}`;
  };

  // Handle recommendation form submission
  const handleRecommend = async (e) => {
    e.preventDefault();
    const form = e.target;
    const recommended_product_name = form.recommended_product_name.value;
    const recommended_query_title = form.recommended_query_title.value;
    const recommended_product_image = form.recommended_product_image.value;
    const recommended_reason = form.recommended_reason.value;

    // Generate the current timestamp in the desired format: dd/mm/yyyy, hh:mm AM/PM
    const currentTimestamp = formatTimestamp(new Date());

    // Forming the data to be submitted
    const recommendedData = {
      recommended_product_name,
      recommended_query_title,
      recommended_product_image,
      recommended_reason,
      query_userEmail: query.userEmail,
      query_userName: query.userName,
      recommenderEmail: user?.email,
      recommenderName: user?.displayName,
      queryId: query._id,
      query_title: query.query_title,
      product_name: query.product_name,
      currentTimestamp,
    };

    try {
      const { data } = await axiosSecure.post(
        "/recommendations",
        recommendedData
      );
      if (data.acknowledged) {
        toast.success("Recommendation Data Submitted Successfully.");
        navigate("/my-recommendations");
      }
    } catch (err) {
      console.error(err.message);
      toast.error("Failed to submit the recommendation!");
    }
  };

  return (
    <section className="min-h-[calc(100vh-539px)] bg-gray-100 flex items-center justify-center">
      <div className="max-w-screen-2xl mx-auto w-full py-12 px-4">
        <h2 className="text-3xl text-center font-extrabold font-poppins text-gray-800 capitalize">
          Query Details
        </h2>
        <p className="w-full md:w-2/3 mx-auto mt-4 mb-6 text-center text-gray-900 font-poppins text-[18px] pb-4">
          Explore detailed information about each query including product
          specifics and user insights. Find recommendations and alternatives to
          enhance your decision-making process.
        </p>
        <div className="card-compact w-full bg-base-100 shadow-xl md:flex items-center justify-center rounded-2xl animate__animated animate__zoomIn">
          <div className="md:w-1/2 p-4 lg:p-6">
            <figure>
              <img
                src={query.product_image}
                className="object-cover rounded-2xl"
                alt="Product Image"
              />
            </figure>
          </div>
          <div className="card-body space-y-2">
            <div>
              <h2 className="card-title text-2xl md:text-3xl text-gray-700 font-bold font-poppins">
                {query.query_title}
              </h2>
            </div>
            <p className="text-[16px]">
              <span className="font-bold">Product Name: </span>
              {query.product_name}
            </p>
            <p className="text-[16px]">
              <span className="font-bold">Brand Name: </span>
              {query.product_brand}
            </p>{" "}
            <p className="text-[16px]">
              <span className="font-bold">Alternation Reason: </span>
              {query.boycotting_reason}
            </p>
            <p className="text-[16px]">
              <span className="font-bold">Date Posted: </span>
              {query.currentDate} <span>({query.currentTime})</span>
            </p>
            <p className="text-[16px]">
              <span className="font-bold">Recommendation Count: </span>0
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
                className="w-16 h-16 rounded-md object-cover"
                title="Service Provider Image"
              />
            </div>
          </div>
        </div>

        {/* Recommendation Section */}
        <div className="my-12 bg-base-100 px-4 py-4 md:py-8 rounded-2xl shadow-2xl animate__animated animate__zoomIn">
          <h2 className="text-2xl text-center font-extrabold lg:text-3xl text-gray-800 pt-4 font-poppins">
            Recommendation
          </h2>

          <form onSubmit={handleRecommend}>
            {/* Form fields */}
            <div className="mt-4">
              <label
                className="text-gray-700 font-semibold"
                htmlFor="recommended_product_name"
              >
                Recommended Product Name:
              </label>
              <input
                id="recommended_product_name"
                name="recommended_product_name"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div className="mt-4">
              <label
                className="text-gray-700 font-semibold"
                htmlFor="recommended_query_title"
              >
                Recommendation Title:
              </label>
              <input
                id="recommended_query_title"
                name="recommended_query_title"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div className="mt-4">
              <label
                className="text-gray-700 font-semibold"
                htmlFor="recommended_product_image"
              >
                Recommended Product Image URL:
              </label>
              <input
                id="recommended_product_image"
                name="recommended_product_image"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div className="mt-4">
              <label
                className="text-gray-700 font-semibold"
                htmlFor="recommended_reason"
              >
                Recommendation reason:
              </label>
              <textarea
                id="recommended_reason"
                name="recommended_reason"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-8 pb-4">
              <button
                class="btn w-full font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-base-300 hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-none rounded-full group"
                type="submit"
              >
                Add Recommendation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 19"
                  class="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
                >
                  <path
                    class="fill-gray-800 group-hover:fill-gray-800"
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18V1H7V18H9Z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QueryDetails;
