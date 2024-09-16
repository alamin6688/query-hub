import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin";
import logo from "../../assets/logo.svg";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    try {
      // User Login
      const result = await signIn(email, pass);
      console.log(result);
      // Get JWT Token And Set It As Cookie
      // const { data } = await axios.post(
      //   `${import.meta.env.VITE_API_URL}/jwt`,
      //   { email: result?.user?.email },
      //   { withCredentials: true }
      // );
      // console.log(data);

      // Navigate To The Intended Route
      navigate(from, { replace: true });
      toast.success("Login Successful!");
    } catch (err) {
      console.log(err);
      toast.error(err?.message || "Login Failed!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Query Hub | Login</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-[calc(100vh-186px)] p-2 md:px-0 animate__animated animate__zoomIn">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-xl shadow-2xl lg:max-w-4xl bg-white">
          <div
            className="hidden bg-cover bg-center lg:block lg:w-1/2"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
            }}
          ></div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center items-center gap-1 mx-auto">
              <img className="w-auto h-10 rounded-md" src={logo} alt="" />
            </div>

            <p className="mt-3 text-xl text-center text-gray-600">
              Welcome back!
            </p>

            <div>
              <SocialLogin></SocialLogin>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-700 uppercase hover:underline">
                or login with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-200 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600"
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  autoComplete="email"
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600"
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                </div>

                <input
                  id="loggingPassword"
                  autoComplete="current-password"
                  name="password"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b md:w-1/4"></span>

              <Link
                to="/register"
                className="text-xs font-bold text-gray-600 uppercase hover:underline"
              >
                or Register
              </Link>

              <span className="w-1/5 border-b md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
