import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const storedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(storedTheme);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <NavLink to="/" className="p-1 px-2">
        Home
      </NavLink>
      <NavLink to="/queries" className="p-1 px-2">
        Queries
      </NavLink>
    </>
  );

  // Update the theme in localStorage and on the document
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  // Handle theme toggle
  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <section
      className={`border-b-2 ${
        theme === "light"
          ? "bg-gray-200 text-gray-800"
          : "dark:bg-gray-900 text-white"
      }`}
    >
      <div className="z-50 relative max-w-screen-2xl mx-auto py-2">
        <div className="navbar px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden px-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1000] mt-3 w-52 shadow font-semibold">
                {navLinks}
              </ul>
            </div>
            <NavLink
              to="/"
              className="btn btn-ghost pl-1 gap-0 text-3xl md:text-4xl"
            >
              <div></div>
              <span className="pl-1">Query</span>
              <span className="text-gray-500">Hub</span>
            </NavLink>
          </div>
          <div className="navbar-end gap-0">
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal font-bold px-1">
                {navLinks}
              </ul>
            </div>
            <div className="mt-1">
              <label className="swap swap-rotate">
                <input
                  onChange={handleToggle}
                  type="checkbox"
                  className="theme-controller"
                  checked={theme === "dark"}
                />
                <svg
                  className={`swap-off h-10 w-10 fill-current ${
                    theme === "dark" ? "opacity-30" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className={`swap-on h-10 w-10 mr-2 fill-current ${
                    theme === "light" ? "opacity-30" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            {!user && (
              <div>
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
                      className="w-10 rounded-full"
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
                  <ul className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1000] mt-3 w-44 p-2 space-y-1 shadow font-semibold">
                    <li>
                      <NavLink to="/queries" className="p-1 px-2">
                        Queries
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/recommendations" className="p-1 px-2">
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
                        My recommendations
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
  );
};

export default Navbar;
