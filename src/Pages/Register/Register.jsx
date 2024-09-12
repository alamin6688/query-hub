import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin";
import logo from "../../assets/logo.svg";
import toast from "react-hot-toast";
// import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (!validatePassword(password)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid Password!",
        text: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        showConfirmButton: true,
      });
      return;
    }

    try {
      // User Register
      const result = await createUser(email, password);
      console.log(result.user);

      // Update User Profile
      await updateUserProfile(name, photoURL);

      // Fetch JWT Token
      //   const { data } = await axios.post(
      //     `${import.meta.env.VITE_API_URL}/jwt`,
      //     {
      //       email: result?.user?.email,
      //     },
      //     { withCredentials: true }
      //   );
      //   console.log(data);

      // Show Toast
      toast.success("Registration successful.");

      // Navigate To The Intended Route After Successful Sign-Up
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Registration failed!",
        text: error.message,
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Query Hub | Registration</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-[calc(100vh-220px)] my-4 px-2 md:my-12">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg  lg:max-w-4xl ">
          <div className="w-full px-6 py-6 md:px-8 lg:w-1/2">
            <div className="flex justify-center items-center gap-1 mx-auto">
              <img className="w-auto h-10 rounded-md" src={logo} alt="" />
            </div>

            <p className="mt-3 text-xl text-center text-gray-600">
              Get Your Free Account Now!
            </p>
            <div>
              <SocialLogin></SocialLogin>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-700 uppercase  hover:underline">
                or Registration with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-200 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="name"
                >
                  User Name
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  name="name"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="photo"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  autoComplete="photo"
                  name="photoURL"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  autoComplete="email"
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  required
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                </div>

                <input
                  id="loggingPassword"
                  autoComplete="current-password"
                  name="password"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Register
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  md:w-1/4"></span>

              <Link
                to="/login"
                className="text-xs font-bold text-gray-600 uppercase  hover:underline"
              >
                or Login
              </Link>

              <span className="w-1/5 border-b  md:w-1/4"></span>
            </div>
          </div>
          <div
            className="hidden bg-cover bg-center lg:block lg:w-1/2"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Register;
