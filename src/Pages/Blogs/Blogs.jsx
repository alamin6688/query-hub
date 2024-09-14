const Blogs = () => {
  const blogPosts = [
    {
      title: "Understanding Product Alternatives",
      date: "September 10, 2024",
      description:
        "Learn how product alternatives can help consumers make better purchasing decisions. Discover the importance of researching alternative options before finalizing a purchase.",
      image: "/images/product-alternatives.jpg",
    },
    {
      title: "How to Add and Manage Product Queries",
      date: "August 25, 2024",
      description:
        "This guide explains how users can add their own queries about products and manage them effectively. Learn the best practices for making your queries helpful to others.",
      image: "/images/manage-queries.jpg",
    },
    {
      title: "Top Tools for Finding Product Recommendations",
      date: "July 30, 2024",
      description:
        "Explore a list of the top tools available for finding and providing product recommendations. Understand the factors that make a recommendation reliable and trustworthy.",
      image: "/images/product-recommendations.jpg",
    },
    {
      title: "Best Practices for Comparing Products",
      date: "July 15, 2024",
      description:
        "Discover the best practices when comparing similar products and making informed decisions about your next purchase.",
      image: "/images/comparing-products.jpg",
    },
    {
      title: "How Reviews Can Help You Choose the Right Product",
      date: "June 28, 2024",
      description:
        "Learn the importance of reading product reviews and how they can provide valuable insights into the quality and usability of a product.",
      image: "/images/product-reviews.jpg",
    },
    {
      title: "5 Mistakes to Avoid When Choosing Alternatives",
      date: "June 10, 2024",
      description:
        "Explore common mistakes buyers make when considering product alternatives and how to avoid them.",
      image: "/images/alternative-mistakes.jpg",
    },
    {
      title: "The Role of Product Alternatives in Sustainable Shopping",
      date: "May 23, 2024",
      description:
        "Learn how considering alternatives can contribute to sustainable shopping and the reduction of waste.",
      image: "/images/sustainable-shopping.jpg",
    },
    {
      title: "How to Leverage Online Communities for Product Insights",
      date: "May 5, 2024",
      description:
        "Join online communities to get real-time insights from people who have already purchased or reviewed a product you are interested in.",
      image: "/images/online-communities.jpg",
    },
    {
      title: "Top 10 Sites for Product Recommendations in 2024",
      date: "April 15, 2024",
      description:
        "Explore the top websites where you can find reliable product recommendations for various categories.",
      image: "/images/top-recommendations.jpg",
    },
    {
      title: "How Product Comparisons Can Save You Money",
      date: "March 30, 2024",
      description:
        "Learn how comparing products before buying can help you make cost-effective choices and avoid overspending.",
      image: "/images/save-money.jpg",
    },
    {
      title: "Why Reading Product Labels is Critical",
      date: "March 10, 2024",
      description:
        "Find out why it's crucial to read product labels and what important information they can reveal about the items you're considering.",
      image: "/images/product-labels.jpg",
    },
    {
      title: "The Future of Product Alternatives: Trends for 2025",
      date: "February 20, 2024",
      description:
        "Get a glimpse into the future of product alternatives and the upcoming trends that will shape the shopping experience in 2025.",
      image: "/images/future-trends.jpg",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-585px)] max-w-screen-2xl mx-auto mt-4 mb-8 pb-6 px-4">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-center capitalize lg:text-3xl pt-4 pb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300 hover:scale-[1.05] transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl text-gray-800 font-bold mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-600">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
