const HowItWorks = () => {
  const steps = [
    {
      title: "1. Add a Query",
      description:
        "Users can add their own query about any product in the system. Provide relevant details like product name, image, query title and the reason for alternation.",
      icon: "📝",
    },
    {
      title: "2. Browse and View Queries",
      description:
        "Users can browse and view other queries regarding alternative products. Explore product details, reasons for alternation and recommendations from other users.",
      icon: "🔍",
    },
    {
      title: "3. Add or Delete Recommendations",
      description:
        "Provide your own recommendations for alternative products. You can add or delete recommendations and provide reasoning for why the product is a better choice.",
      icon: "💡",
    },
    {
      title: "4. Manage Your Queries and Recommendations",
      description:
        "Users can update or delete their own queries and recommendations anytime, making it easy to keep the information up-to-date.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-screen-2xl mx-auto pb-6 px-4">
        <div className="mx-auto text-center">
          <h2 className="text-2xl text-center font-extrabold lg:text-3xl text-gray-800 pt-4 font-poppins">
            How It Works
          </h2>
          <p className="w-full md:w-2/3 mx-auto mt-4 text-center text-gray-900 font-poppins text-[18px]">
            Discover the simple steps to navigate our system with ease. From
            adding queries to managing recommendations, get a clear overview of
            each process involved.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-xl hover:shadow-2xl duration-300 hover:scale-[1.05] transition-all"
              >
                <div className="text-6xl mb-4">{step.icon}</div>
                <h3 className="text-xl text-gray-800 font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
