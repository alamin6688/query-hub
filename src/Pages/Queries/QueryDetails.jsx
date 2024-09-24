import { Link, useLoaderData } from "react-router-dom";

const QueryDetails = () => {
  const query = useLoaderData();

  const handleRecommend = async (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <section className="min-h-[calc(100vh-539px)] bg-gray-100 flex items-center justify-center">
      <div className="max-w-screen-2xl mx-auto w-full py-12 px-4">
        <div className="card-compact w-full bg-base-100 shadow-xl md:flex items-center justify-center rounded-2xl">
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

        {/* Recommendation */}
        <div className="my-12 bg-base-100 px-4 py-4 md:py-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl text-center font-extrabold lg:text-3xl text-gray-800 pt-4 font-poppins">
            Recommendation
          </h2>
          <p className="w-full md:w-2/3 mx-auto my-4 text-center text-gray-900 font-poppins text-[18px]">
            We recommend leveraging targeted insights for continuous improvement
            in your product offerings. Embrace a culture of innovation through
            regular feedback and strategic enhancements.
          </p>

          <hr className="border-2 border-gray-600 mb-6 md:mb-8" />

          <form onSubmit={handleRecommend}>
            {/* Recommended product Name */}
            <div>
              <label
                className="text-gray-700 font-semibold"
                htmlFor="product_name"
              >
                Recommended product Name
              </label>
              <input
                name="recommended_product_name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div className="space-y-4">
              {/* Recommendation Title */}
              <div className="flex flex-col gap-2 mt-4">
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="query_title"
                >
                  Recommendation Title
                </label>
                <input
                  name="recommended_query_title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              {/* Recommended Product Image */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="product_image"
                >
                  Recommended Product Image URL
                </label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  name="recommended_product_image"
                  type="text"
                />
              </div>

              {/* Recommendation reason */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-semibold">
                  Recommendation reason
                </label>
                <textarea
                  name="recommended_reason"
                  className="border w-full p-2 rounded-md"
                ></textarea>
              </div>
            </div>

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
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  ></path>
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
