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
    <div className="max-w-screen-2xl mx-auto my-8 pb-6 px-4">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-center capitalize lg:text-3xl pt-4 pb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg duration-300 hover:scale-[1.05] transition-all"
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
  );
};

export default HowItWorks;
