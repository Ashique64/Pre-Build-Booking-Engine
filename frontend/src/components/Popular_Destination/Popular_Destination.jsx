import React, { useEffect } from "react";
import "./Popular_Destination.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Popular_Destination = () => {
  const destinations = [
    {
      name: "Goa, India",
      image:
        "/assets/goa.jpg",
    },
    {
      name: "Bali, Indonesia",
      image:
        "/assets/bali.jpg",
    },
    {
      name: "Dubai, UAE",
      image:
        "/assets/dubai.jpg",
    },
    {
      name: "Maldives",
      image:
        "/assets/maldives.jpg",
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
