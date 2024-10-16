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
      return data;
    } catch (error) {
      console.error("Error fetching!", error);
    }
  };

  // Filter recommendations made by others for the logged-in user's queries
  const filteredRecommendations = recommendations.filter(
    (recommendation) =>
      recommendation.query_userEmail === user?.email &&
      recommendation.recommenderEmail !== user?.email
  );

  return (
    <>
      <Helmet>
        <title>Recommendations For Me | Query Hub</title>
      </Helmet>
      <section className="min-h-[calc(100vh-188px)] bg-gray-100 pt-20">
        <div className="max-w-screen-2xl mx-auto pt-2 pb-10">
          <div>
            <h2 className="text-2xl md:text-3xl text-center font-extrabold font-poppins text-gray-800 capitalize pt-12">
              Recommendations For Me
            </h2>
            <p className="w-full md:w-2/3 mx-auto mt-4 mb-6 text-center text-gray-900 font-poppins text-[16px] md:text-[18px] px-4 pb-4">
              View all the recommendations made by others for your queries in a
              convenient table format. Easily browse through detailed
              suggestions tailored to your specific needs.
            </p>
          </div>

          {/* Table */}
          <div className="flex flex-col pt-4 pb-12">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-bold text-left text-gray-500"
                        >
                          No.
                        </th>
                        <th
                          scope="col"
                          className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm font-bold text-left text-gray-500"
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm font-bold text-left text-gray-500"
                        >
                          Query Title
                        </th>
                        <th
                          scope="col"
                          className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm font-bold text-left text-gray-500"
                        >
                          Recommended Query Title
                        </th>
                        <th
                          scope="col"
                          className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm font-bold text-left text-gray-500"
                        >
                          Date Posted
                        </th>
                        <th
                          scope="col"
                          className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm font-bold text-left text-gray-500"
                        >
                          Recommended Reason
                        </th>
                        <th
                          scope="col"
                          className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm font-bold text-left text-gray-500"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredRecommendations?.map((recommendation, idx) => (
                        <tr key={recommendation._id}>
                          <td className="px-2 md:px-4 py-2 text-xs md:text-sm text-gray-500 whitespace-nowrap">
                            {idx + 1}
                          </td>
                          <td className="px-2 md:px-4 py-2 text-xs md:text-sm text-gray-500 whitespace-nowrap">
                            {recommendation.product_name}
                          </td>
                          <td className="px-2 md:px-4 py-2 text-xs md:text-sm text-gray-500 whitespace-nowrap">
                            {recommendation.query_title}
                          </td>
                          <td className="px-2 md:px-4 py-2 text-xs md:text-sm text-gray-500 whitespace-nowrap">
                            {recommendation.recommended_query_title}
                          </td>
                          <td className="px-2 md:px-4 py-2 text-xs md:text-sm whitespace-nowrap">
                            {recommendation.currentTimestamp}
                          </td>
                          <td className="px-2 md:px-4 py-2 text-xs md:text-sm text-gray-500 whitespace-nowrap">
                            {recommendation.recommended_reason}
                          </td>
                          <td className="px-2 md:px-4 py-2 text-xs md:text-sm text-gray-500 whitespace-nowrap">
                            <Link to={`/recommendations/${recommendation._id}`}>
                              <button className="inline-flex items-center px-3 md:px-4 py-1 md:py-2 bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm font-medium rounded-md">
                                <FaEye className="mr-2" /> View Details
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
