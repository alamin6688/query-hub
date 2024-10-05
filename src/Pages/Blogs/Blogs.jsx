import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Blogs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const getData = async () => {
    try {
      const { data } = await axiosSecure.get(`/blogPosts`);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching!", error);
      throw error;
    }
  };

  const { data: blogPosts = [], isLoading } = useQuery({
    queryFn: getData,
    queryKey: ["blogPosts", user?.email],
  });

  const [visible, setVisible] = useState(6); // Number of initially visible posts

  // Function to load more posts
  const loadMore = () => {
    setVisible((prev) => prev + 6);
  };

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-188px)] max-w-screen-2xl mx-auto">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blogs | Query Hub</title>
      </Helmet>
      <section className="bg-[#FAFDFF]">
        <div className="min-h-[calc(100vh-188px)] max-w-screen-2xl mx-auto mt-4 mb-6 pb-6 px-4">
          <div className="mx-auto text-center">
            <h2 className="text-3xl text-center font-extrabold pt-4 font-poppins text-gray-800 capitalize">
              Latest Blog Posts
            </h2>
            <p className="w-full md:w-2/3 mx-auto mt-4 text-center text-gray-900 font-poppins text-[18px] pb-4">
              Stay updated with our newest blog posts covering various topics.
              Discover valuable information and tips to enhance your knowledge.
            </p>
            <div className="grid grid-cols-1 gap-10 mt-10 mb-12 animate__animated animate__zoomIn px-2 md:px-4">
              {blogPosts.slice(0, visible).map((post, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl shadow-xl hover:shadow-2xl duration-300 hover:scale-[1.05] transition-all flex flex-col p-4"
                >
                  <div className="lg:flex items-center">
                    <img
                      className="w-full md:w-[40%]  object-cover h-64 rounded-2xl"
                      src={post.image}
                      alt={post.title}
                    />
                    <div className="md:w-3/4 flex flex-col justify-between py-6 lg:mx-6 space-y-4">
                      <a
                        href={`/blog/${post.id}`}
                        className="text-xl text-left font-semibold text-gray-800 hover:underline"
                      >
                        {post.title}
                      </a>
                      <p className="text-gray-600 mb-4 text-left">
                        {post.description.slice(0, 250)}...
                        <div className="flex items-center pt-6">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <p className="text-gray-800 font-semibold">
                              {post.author.name}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {post.author.role}
                            </p>
                          </div>
                        </div>
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-left text-gray-500 dark:text-gray-700">
                          {post.date}
                        </span>
                        <button
                          type="button"
                          className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-600 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                        >
                          Read More
                          <svg
                            className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                            viewBox="0 0 16 19"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                              className="fill-gray-800 group-hover:fill-gray-800"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {visible < blogPosts.length && ( // Check if there are more posts to show
              <div className="text-center">
                <button
                  onClick={loadMore}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>{" "}
      </section>
    </>
  );
};

export default Blogs;
