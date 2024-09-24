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
              <button className="btn w-full border-none px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Add Recommendation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QueryDetails;
