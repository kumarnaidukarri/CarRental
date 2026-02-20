import { useState } from "react";
import { Link, useLocation } from "react-router"; // React-Router library

// my components
import { assets, menuLinks } from "../assets/assets.js"; // images, dummy data

const Navbar = () => {
  const location = useLocation(); // hook returns "current URL" as an object. ex: {hash:'',pathname:'/',key:'',search:'',state:null}
  const [menuOpen, setMenuOpen] = useState(false); //  state variable to 'show/hide menu' in mobile screens, laptop devices.

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all   ${location.pathname === "/" && "bg-light"}`}
    >
      <Link to="/">
        <img src={assets.logo} className="h-8" alt="logo" />
      </Link>

      <div
        className={`menu-container  max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border border-borderColor right-0  flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4   transition-all duration-300 z-50   ${location.pathname === "/" ? "bg-light" : "bg-white"}   ${menuOpen === true ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {
          // Map on each 'link item'
          menuLinks.map((menuLink, index) => {
            return (
              <Link key={index} to={menuLink.path}>
                {menuLink.name}
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Navbar;
