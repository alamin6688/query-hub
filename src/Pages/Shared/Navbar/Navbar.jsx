import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  // Determine the text color based on the current page
  const textColorClass =
    location.pathname === "/" ? "text-white" : "text-[#FAFDFF]";

  const navLinks = (
    <>
      <NavLink to="/" className={`p-1 px-2 text-[18px] md:${textColorClass}`}>
        Home
      </NavLink>
      <NavLink
        to="/queries"
        className={`p-1 px-2 text-[18px] md:${textColorClass}`}
      >
        Queries
      </NavLink>
      <NavLink
        to="/blogs"
        className={`p-1 px-2 text-[18px] md:${textColorClass}`}
      >
        Blogs
      </NavLink>
      <NavLink
        to="/contact"
        className={`p-1 px-2 text-[18px] md:${textColorClass}`}
      >
        Contact Us
      </NavLink>
    </>
  );

  return (
    <>
      <section className="w-full bg-gradient-to-l from-[#1b243a] to-[#020617]/90 fixed left-0 top-0 h-20 z-50">
        <div className="relative z-50">
          {/* Ensure the navbar spans the full width and uses container for centering */}
          <div className="navbar max-w-screen-2xl mx-auto w-full">
            <div className="navbar-start ">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden px-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-40 mt-3 w-52 shadow font-semibold text-gray-900">
                  {navLinks}
                </ul>
              </div>
              <NavLink
                to="/"
                className="md:pl-2 hover:shadow-lg duration-300 hover:scale-[1.05] transition-all"
              >
                <div className="font-poppns tracking-wide w-full">
                  <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-xl backdrop-blur-lg py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50">
                    <span
                      className={`text-2xl md:text-3xl px-4 ${textColorClass}`}
                    >
                      Query Hub
                    </span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                      <div className="relative h-full w-10 bg-white/20"></div>
                    </div>
                  </button>
                </div>
              </NavLink>
            </div>

            <div className="navbar-end lg:justify-between gap-0 md:w-full">
              <div className="navbar-end hidden lg:flex md:justify-center">
                <ul className="menu menu-horizontal font-bold px-1 text-white flex items-center justify-center">
                  {navLinks}
                </ul>
              </div>
              {!user && (
                <div className="ml-auto">
                  <Link
                    to="/login"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white bg-gray-800 rounded-lg hover:bg-gray-700"
                  >
                    Login
                  </Link>
                </div>
              )}
              <div className="dropdown dropdown-end">
                {user && (
                  <div>
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div
                        className="w-12 rounded-full my-2"
                        title={user?.displayName || "Guest"}
                      >
                        <img
                          referrerPolicy="no-referrer"
                          alt="User avatar"
                          src={
                            user?.photoURL ||
                            "https://i.postimg.cc/wM5cB69C/istockphoto-1300845620-612x612.jpg"
                          }
                        />
                      </div>
                    </div>
                    <ul className="menu menu-sm dropdown-content bg-base-200 rounded-box z-50 mt-3 w-44 p-2 space-y-1 shadow font-semibold text-gray-900">
                      <li>
                        <NavLink to="/profile" className="p-1 px-2">
                          My Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/queries" className="p-1 px-2">
                          Queries
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/recommendations-for-me"
                          className="p-1 px-2"
                        >
                          Recommendations For Me
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/my-queries" className="p-1 px-2">
                          My Queries
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/my-recommendations" className="p-1 px-2">
                          My Recommendations
                        </NavLink>
                      </li>
                      <li>
                        {user && (
                          <Link
                            onClick={handleLogout}
                            className="btn bg-red-500 hover:bg-red-600 text-white border-none hover:font-bold"
                          >
                            Logout
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
