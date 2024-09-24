import { Link, useLoaderData } from "react-router-dom";

const QueryDetails = () => {
  const query = useLoaderData();
  console.log(query);

  return (
    <section className="min-h-[calc(100vh-539px)] bg-gray-100 flex items-center justify-center">
      <div className="max-w-screen-2xl mx-auto w-full py-12 px-4">
        <div className="card-compact w-full bg-base-100 shadow-2xl md:flex items-center justify-center rounded-2xl">
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


      </div>
    </section>
  );
};

export default QueryDetails;
