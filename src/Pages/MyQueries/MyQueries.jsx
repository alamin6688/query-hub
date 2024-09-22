import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

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

  return (
    <>
      <Helmet>
        <title>My Queries | Query Hub</title>
      </Helmet>
      <section className="min-h-[calc(100vh-538px)]">
        <div
          className="hero h-[300px] lg:h-[550px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/X7YzJVGh/adult-male-illustrator-working-tablet-device.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-full text-neutral-content text-center">
            <div>
              <h1 className="mb-5 text-5xl font-bold">My Queries</h1>
              <p className="mb-5 w-full md:w-2/3 mx-auto">
                Manage your queries easily. View, update, or delete your queries
                and add new ones to get the answers you need.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-screen-2xl mx-auto">
            {filteredQueries.map((query) => (
              <div key={query._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={query.product_image} alt="Product Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{query.product_name}</h2>
                  <p>{query.currentTime}</p>
                  <p>{query.alternationReason}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/query/${query._id}`}>
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                    <Link to={`/update/${query._id}`}>
                      <button className="btn btn-secondary">Update</button>
                    </Link>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(query._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
      </section>
    </>
  );
};

export default MyQueries;
