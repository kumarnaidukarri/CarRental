// this component imported from "Prebuilt UI" website.
// 'Prebuilt UI' website provides tailwindcss components code.

// my components
import { assets } from "../assets/assets.js";
import Title from "./Title.jsx"; // custom heading

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: assets.testimonial_image_1,
      testimonial:
        "i have rented cars from various companies, but the experience with CarRental was exceptional.",
    },
    {
      name: "John Smith",
      location: "New York, USA",
      image: assets.testimonial_image_2,
      testimonial:
        "Car Rental made my trip so much easier. the car was delivered right to my door, the customer service was fantastic!",
    },

    {
      name: "Johnson",
      location: "Sydney, Australia",
      image: assets.testimonial_image_3,
      testimonial:
        "i highly recommend car rental! their fleet is amazing, and i always feel like i'm getting the best deal with excellent service.",
    },

    {
      name: "",
      location: "",
      image: assets.testimonial_image_1,
      testimonial: "",
    },
  ];

  return (
    <div className="py-28 px-2 md:px-16 lg:px-24 xl:px-44">
      {/* custom heading */}
      <Title
        title={"What our customers say"}
        subTitle={
          "Discover why discerning the travelers choose stay venture for their luxury accommodations around the world."
        }
      />

      {/* 'PrebuiltUI' component library - "Customer Testimonials" component. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg  hover:-translate-y-1  transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img src={assets.star_icon} alt="star-icon" key={index} />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
