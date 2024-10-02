import React from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const RecommendationsForMe = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: recommendations = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["recommendations", user?.email],
  });

  const getData = async () => {
    try {
      const { data } = await axiosSecure.get(`/recommendations`);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching!", error);
    }
  };

  // Filter recommendations made by others for the logged-in user's queries
  const filteredRecommendations = recommendations.filter(
    (recommendation) =>
      recommendation.query_userEmail === user?.email && // Show only for user's queries
      recommendation.recommenderEmail !== user?.email // Show only recommendations made by others
  );

  return (
    <>
      <Helmet>
        <title>Recommendations For Me | Query Hub</title>
      </Helmet>
      <section className="min-h-[calc(100vh-539px)] bg-gray-100">
        <div className="max-w-screen-2xl mx-auto pt-2 pb-10">
          <div>
            <h2 className="text-3xl text-center font-extrabold font-poppins text-gray-800 capitalize pt-12">
              Recommendations For Me
            </h2>
            <p className="w-full md:w-2/3 mx-auto mt-4 mb-6 text-center text-gray-900 font-poppins text-[18px] pb-4">
              View all the recommendations made by others for your queries in a
              convenient table format. Easily browse through detailed
              suggestions tailored to your specific needs.
            </p>
          </div>

          {/* Table */}
          <div className="flex flex-col pt-4 pb-12">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full align-middle px-4 md:px-6">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>No.</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500"
                        >
                          <span>Product Name</span>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Query Title</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Recommended Query Title</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500"
                        >
                          Date Posted
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500"
                        >
                          Recommended Reason
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredRecommendations?.map((recommendation, idx) => (
                        <tr key={recommendation._id}>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {idx + 1}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {recommendation.product_name}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {recommendation.query_title}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {recommendation.recommended_query_title}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              {recommendation.currentTimestamp}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {recommendation.recommended_reason}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <Link to={`/recommendations/${recommendation._id}`}>
                              <button className="inline-flex items-center px-4 py-2 bg-green-600 transition ease-in-out delay-75 hover:bg-green-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
                                <FaEye className="mr-2 text-xl" /> View Details
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecommendationsForMe;
