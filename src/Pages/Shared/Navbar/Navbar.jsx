import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

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
      <NavLink to="/blogs" className="p-1 px-2">
        Blogs
      </NavLink>
      <NavLink to="/contact" className="p-1 px-2">
        Contact Us
      </NavLink>
    </>
  );

  return (
    <section className="border-b-2">
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
          <div className="navbar-end gap-0 w-full">
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal font-bold px-1">
                {navLinks}
              </ul>
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
