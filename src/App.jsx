import { useState } from "react";
import { useLocation } from "react-router";

// my components
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner"); // true or false

  return (
    <>
      {
        // show navbar in all pages. but, hide it only in 'owner' url path. '/owner'.
        !isOwnerPath && <Navbar setShowLogin={setShowLogin} />
      }
    </>
  );
};

export default App;
