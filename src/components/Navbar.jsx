import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"; // React-Router library

// my components
import { assets, menuLinks } from "../assets/assets.js"; // images, dummy data

const Navbar = ({ setShowLogin }) => {
  const location = useLocation(); // hook returns "current URL" as an object. ex: {hash:'',pathname:'/',key:'',search:'',state:null}
  const navigate = useNavigate(); // hook to navigate to different URL paths.
  const [menuOpen, setMenuOpen] = useState(false); // state variable to 'show/hide menu' in mobile screens, laptop devices.

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all   ${location.pathname === "/" && "bg-light"}`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="h-8" alt="logo" />
      </Link>

      {/* Menu container */}
      <div
        className={`menu-container  max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t  right-0  flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4   transition-all duration-300 z-50   ${location.pathname === "/" ? "bg-light" : "bg-white"}   ${menuOpen === true ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {
          // Map on each 'menu item'
          menuLinks.map((menuLink, index) => {
            return (
              <Link key={index} to={menuLink.path}>
                {menuLink.name}
              </Link>
            );
          })
        }

        {/* Search input box container */}
        <div className="search-inputbox-container   hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
          <input
            type="text"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            placeholder="Search Products"
          />
          <img src={assets.search_icon} alt="search" />
        </div>

        {/* Dashboard container*/}
        <div className="dashboard-container   flex max-sm:flex-col items-start sm:items-center gap-6">
          <button className="cursor-pointer" onClick={() => navigate("/owner")}>
            Dashboard
          </button>
          <button
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        </div>
      </div>

      {/* Menu open close icon */}
      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={menuOpen === true ? assets.close_icon : assets.menu_icon}
          alt="menu"
        />
      </button>
    </div>
  );
};

export default Navbar;
