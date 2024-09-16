import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Understanding Product Alternatives",
      date: "September 10, 2024",
      description:
        "Learn how product alternatives can help consumers make better purchasing decisions. Discover the importance of researching alternative options before finalizing a purchase.",
      image:
        "https://i.postimg.cc/Sstb9v2S/andrey-matveev-0qzsj330-Cn-Q-unsplash.jpg",
      author: {
        name: "Emily Carter",
        role: "Product Manager",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "How to Add and Manage Product Queries",
      date: "August 25, 2024",
      description:
        "This guide explains how users can add their own queries about products and manage them effectively. Learn the best practices for making your queries helpful to others.",
      image:
        "https://i.postimg.cc/zGfMCjN3/austin-distel-go-FBjl-Qi-ZFU-unsplash.jpg",
      author: {
        name: "Emily Carter",
        role: "Product Manager",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "Top Tools for Finding Product Recommendations",
      date: "July 30, 2024",
      description:
        "Explore a list of the top tools available for finding and providing product recommendations. Understand the factors that make a recommendation reliable and trustworthy.",
      image: "/images/product-recommendations.jpg",
      author: {
        name: "Jacob Miller",
        role: "Marketer",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "Best Practices for Comparing Products",
      date: "July 15, 2024",
      description:
        "Discover the best practices when comparing similar products and making informed decisions about your next purchase.",
      image: "/images/comparing-products.jpg",
      author: {
        name: "Jacob Miller",
        role: "Marketer",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "How Reviews Can Help You Choose the Right Product",
      date: "June 28, 2024",
      description:
        "Learn the importance of reading product reviews and how they can provide valuable insights into the quality and usability of a product.",
      image: "/images/product-reviews.jpg",
      author: {
        name: "Ava Johnson",
        role: "Content Strategist",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "5 Mistakes to Avoid When Choosing Alternatives",
      date: "June 10, 2024",
      description:
        "Explore common mistakes buyers make when considering product alternatives and how to avoid them.",
      image: "/images/alternative-mistakes.jpg",
      author: {
        name: "Ava Johnson",
        role: "Content Strategist",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "The Role of Product Alternatives in Sustainable Shopping",
      date: "May 23, 2024",
      description:
        "Learn how considering alternatives can contribute to sustainable shopping and the reduction of waste.",
      image: "/images/sustainable-shopping.jpg",
      author: {
        name: "Olivia Brown",
        role: "Sustainability Expert",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "How to Leverage Online Communities for Product Insights",
      date: "May 5, 2024",
      description:
        "Join online communities to get real-time insights from people who have already purchased or reviewed a product you are interested in.",
      image: "/images/online-communities.jpg",
      author: {
        name: "Olivia Brown",
        role: "Sustainability Expert",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "Top 10 Sites for Product Recommendations in 2024",
      date: "April 15, 2024",
      description:
        "Explore the top websites where you can find reliable product recommendations for various categories.",
      image: "/images/top-recommendations.jpg",
      author: {
        name: "Ethan Smith",
        role: "Digital Marketing Specialist",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "How Product Comparisons Can Save You Money",
      date: "March 30, 2024",
      description:
        "Learn how comparing products before buying can help you make cost-effective choices and avoid overspending.",
      image: "/images/save-money.jpg",
      author: {
        name: "Ethan Smith",
        role: "Digital Marketing Specialist",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "Why Reading Product Labels is Critical",
      date: "March 10, 2024",
      description:
        "Find out why it's crucial to read product labels and what important information they can reveal about the items you're considering.",
      image: "/images/product-labels.jpg",
      author: {
        name: "Mia Williams",
        role: "Consumer Insights Analyst",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      title: "The Future of Product Alternatives: Trends for 2025",
      date: "February 20, 2024",
      description:
        "Get a glimpse into the future of product alternatives and the upcoming trends that will shape the shopping experience in 2025.",
      image: "/images/future-trends.jpg",
      author: {
        name: "Mia Williams",
        role: "Consumer Insights Analyst",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
  ];
  return (
    <>
    <Helmet>
      <title>Query Hub | Blogs</title>
    </Helmet>
      <div className="min-h-[calc(100vh-585px)] max-w-screen-2xl mx-auto mt-4 mb-8 pb-6 px-4">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-center capitalize lg:text-3xl pt-4 pb-8">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-lg duration-300 hover:scale-[1.05] transition-all flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl text-gray-800 font-bold mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{post.date}</p>
                  <p className="text-gray-600 mb-4">
                    {post.description.slice(0, 150)}...
                  </p>
                </div>
                <div className="flex  items-center justify-between ">
                  {/* Author Details */}
                  <div className="flex items-center">
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
                  {/* Button */}
                  <div className="flex justify-end">
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
