import React from "react";
import {
  FaCommentAlt,
  FaSearch,
  FaLightbulb,
  FaEdit,
  FaRegCreditCard,
  FaQuestionCircle,
} from "react-icons/fa";

const FAQ = () => {
  return (
    <section className="bg-white text-gray-900 mb-12">
      <div className="max-w-screen-2xl px-6 py-12 mx-auto">
        <h1 className="text-2xl text-center font-extrabold lg:text-3xl text-gray-800 font-poppins">
          Frequently Asked Questions
        </h1>
        <p className="w-full md:w-2/3 mx-auto mt-4 text-center text-gray-900 font-poppins text-[18px]">
          Find answers to common queries about our services and processes. Our
          FAQs cover everything from initial consultations to our cancellation
          policy.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {/* First Question */}
          <div>
            <div className="inline-block p-3 bg-green-600 rounded-lg text-white mb-2">
              <FaCommentAlt className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                How can I add a query about a product?
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                To add a query, navigate to the "Add Query" page from the
                navbar. Fill out the form with details such as product name,
                image, query title and reason for alternation. Submit the form
                to add your query to the system.
              </p>
            </div>
          </div>

          {/* Second Question */}
          <div>
            <div className="inline-block p-3 bg-blue-600 rounded-lg text-white mb-2">
              <FaSearch className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                How can I view other's queries?
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                You can browse and view other users' queries on the "All
                Queries" page. This page displays a list of queries with details
                including product name, brand, alternation reason and user
                information.
              </p>
            </div>
          </div>

          {/* Third Question */}
          <div>
            <div className="inline-block p-3 bg-yellow-600 rounded-lg text-white mb-2">
              <FaLightbulb className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Can I modify or delete my recommendations?
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Yes, you can manage your recommendations from the "My
                Recommendations" page. Here you can view, delete and manage your
                recommendations as needed.
              </p>
            </div>
          </div>

          {/* Fourth Question */}
          <div>
            <div className="inline-block p-3 bg-orange-600 rounded-lg text-white mb-2">
              <FaEdit className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                What is the process to manage my queries and recommendations?
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                You can update or delete your queries and recommendations from
                the "Manage" page. This section allows you to keep your
                information current and relevant.
              </p>
            </div>
          </div>

          {/* Fifth Question */}
          <div>
            <div className="inline-block p-3 bg-red-600 rounded-lg text-white mb-2">
              <FaRegCreditCard className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Is there a cost associated with using the system?
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                The use of the system is free for all users. You can add
                queries, view other users' queries and manage recommendations at
                no cost.
              </p>
            </div>
          </div>

          {/* Sixth Question */}
          <div>
            <div className="inline-block p-3 bg-gray-600 rounded-lg text-white mb-2">
              <FaQuestionCircle className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                What should I do if I encounter an error or issue?
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                If you encounter any issues, please contact our support team
                through the "Contact Us" page. We are here to help resolve any
                problems you may face.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
