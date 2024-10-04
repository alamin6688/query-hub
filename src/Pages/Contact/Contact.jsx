import { Helmet } from "react-helmet-async";
import { MdEmail, MdLocationOn, MdPhone, MdWeb } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Query Hub </title>
      </Helmet>
      <div className="bg-[#FAFDFF] pt-16">
        <section className="min-h-[calc(100vh-188px)] max-w-screen-2xl mx-auto">
          <div className="px-6 pt-10 pb-16">
            <div className="animate__animated animate__slideInDown">
              <h2 className="text-3xl text-center font-extrabold pt-4 font-poppins text-blue-500 capitalize">
                Get in touch
              </h2>
              <p className="w-full md:w-2/3 mx-auto mt-4 text-center text-gray-900 font-poppins text-[18px]">
                Our friendly team would love to hear from you. We are always
                here to assist with any questions or concerns you may have.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1 animate__animated animate__slideInLeft">
                {/* Email Contact */}
                <div className="text-center">
                  <div className="md:text-left">
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <MdEmail className="w-5 h-5" />
                    </span>
                    <h2 className="mt-4 text-base font-bold text-gray-800">
                      Email
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Our friendly team is here to help.
                    </p>
                    <p className="mt-2 text-sm text-blue-500">
                      hello@gmail.com
                    </p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="text-center">
                  <div className="md:text-left">
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <MdLocationOn className="w-5 h-5" />
                    </span>
                    <h2 className="mt-4 text-base font-bold text-gray-800">
                      Office
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Come say hello at our office HQ.
                    </p>
                    <p className="mt-2 text-sm text-blue-500">
                      123 Gulshan Avenue, Dhaka 1212, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="text-center">
                  <div className="md:text-left">
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <MdPhone className="w-5 h-5" />
                    </span>
                    <h2 className="mt-4 text-base font-bold text-gray-800">
                      Phone
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Mon-Fri from 9am to 5pm.
                    </p>
                    <p className="mt-2 text-sm text-blue-500">
                      +880 1234 567890
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="text-center">
                  <div className="md:text-left">
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <MdWeb className="w-5 h-5" />
                    </span>
                    <h2 className="mt-4 text-base font-bold text-gray-800">
                      Website
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Visit our website for more information.
                    </p>
                    <p className="mt-2 text-sm text-blue-500">
                      <a
                        href="https://www.example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.website.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map with Marker for Dhaka, Bangladesh */}
              <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto animate__animated animate__slideInRight">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="map"
                  marginHeight="0"
                  marginWidth="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?q=Dhaka,Bangladesh&amp;hl=en&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
