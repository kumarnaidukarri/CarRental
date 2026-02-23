import { useState } from "react";
import { useLocation, Route, Routes } from "react-router";

// my components
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CarDetails from "./pages/CarDetails.jsx";
import Cars from "./pages/Cars.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import Footer from "./components/Footer.jsx";

import Layout from "./pages/owner/Layout.jsx";
import Dashboard from "./pages/owner/Dashboard.jsx";
import AddCar from "./pages/owner/AddCar.jsx";
import ManageCars from "./pages/owner/ManageCars.jsx";
import ManageBookings from "./pages/owner/ManageBookings.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner"); // true or false

  return (
    <>
      {
        // show navbar in all pages. but, hide it only in 'owner' url path. '/owner'.
        !isOwnerPath && <Navbar setShowLogin={setShowLogin} />
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>

      {/*  Footer must be present in all Pages. so, we added here instead of in home page. Also, Footer shouldn't be show in 'Owner Dashboard Page'*/}
      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
