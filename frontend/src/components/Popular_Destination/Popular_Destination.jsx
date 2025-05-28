import React, { useEffect } from "react";
import "./Popular_Destination.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Popular_Destination = () => {
  const destinations = [
    {
      name: "Goa, India",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
    },
    {
      name: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
    },
    {
      name: "Dubai, UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
    },
    {
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="destinations-section">
      <div className="container">
        <div className="animate-on-scroll" data-aos="fade-up">
          <h2 className="section-title">Popular Destinations</h2>
        </div>

        <div className="row g-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="col-lg-3 col-md-6 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="destination-card">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-img"
                />
                <div className="destination-overlay">
                  <h4 className="destination-title">{destination.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular_Destination;
