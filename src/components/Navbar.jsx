import { Link, useLocation } from "react-router"; // React-Router library

// my components
import { assets, menuLinks } from "../assets/assets.js"; // images, dummy data

const Navbar = () => {
  const location = useLocation(); // hook returns "current URL" as an object. ex: {hash:'',pathname:'/',key:'',search:'',state:null}
  console.log(location);

  return (
    <div>
      <Link to="/">
        <img src={assets.logo} className="h-8" alt="logo" />
      </Link>

      <div
        className={`menu-container  max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border border-borderColor right-0  flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4   transition-all duration-300 z-50   ${location.pathname === "/" ? "bg-light" : "bg-white"}`}
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
