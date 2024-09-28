import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const MyRecommendations = () => {
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

  const filteredRecommendations = recommendations.filter(
    (recommendation) => recommendation.recommenderEmail === user?.email
  );

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <>
      <Helmet>
        <title>My Recommendations | Query Hub</title>
      </Helmet>
      <section className="min-h-[calc(100vh-539px)] bg-gray-100">
        <div className="max-w-screen-2xl mx-auto pt-2 pb-10">
          <div>
            <h2 className="text-3xl text-center font-extrabold font-poppins text-gray-800 capitalize pt-12">
              Recommendations
            </h2>
            <p className="w-full md:w-2/3 mx-auto mt-4 mb-6 text-center text-gray-900 font-poppins text-[18px] pb-4">
              View all the recommendations you've made for various products.
              Manage or delete your suggestions to keep your recommendations
              list up-to-date.
            </p>
          </div>

          {/* Table */}
          <div>
            <h3 className="text-xl text-center md:text-left font-extrabold font-poppins text-gray-700 capitalize md:px-4">
              My Recommendations:
            </h3>
          </div>
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

                        <th className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
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
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              {/* Delete Button */}
                              <button
                                onClick={() => handleDelete(recommendation._id)}
                                class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                              >
                                <svg
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  class="h-5 w-5 mr-2"
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

export default MyRecommendations;
