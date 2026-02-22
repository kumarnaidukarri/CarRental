// 'Cars Page' component shows list of all cars.

// my components
import { useState } from "react";
import { assets, dummyCarData } from "../assets/assets.js";
import Title from "../components/Title.jsx";
import CarCard from "../components/CarCard.jsx";

const Cars = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      {/* section 1 for title + search bar */}
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title
          title={"Available Cars"}
          subTitle={
            "Browse our selection of premium vehicles available for your next adventure."
          }
        />
        <div className="flex items-center bg-white px-4 mt-6 max-w-120 w-full h-12 rounded-full shadow">
          <img src={assets.search_icon} className="w-4.5 h-4.5 mr-2" alt="" />

          <input
            type="text"
            placeholder="Search by make, model, or features"
            value={input}
            onChange={(e) => {
              e.preventDefault();
              setInput(e.target.value);
            }}
            className="w-full h-full outline-none text-gray-500"
          />

          <img src={assets.filter_icon} className="w-4.5 h-4.5 ml-2" alt="" />
        </div>
      </div>

      {/* section 2 for no.of cars list */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">
          Showing {dummyCarData.length} Cars
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {
            // Map iterate on 'each car'
            dummyCarData.map((car, index) => {
              return (
                <div key={index}>
                  <CarCard car={car} />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Cars;
