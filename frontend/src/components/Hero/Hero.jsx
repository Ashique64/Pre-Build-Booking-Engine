import React, { useEffect, useState } from "react";
import "./Hero.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    console.log("Search initiated with:", {
      location,
      checkInDate,
      checkOutDate,
      guests,
    });
    alert("Search functionality would be implemented here!");
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero-section">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="container hero-content py-5">
        <div className="row justify-content-center hero-content-row">
          <div className="col-lg-10 hero-content-col">
            <div className="text-center mb-5 hero-content-title">
              <h1 className="hero-title" data-aos="fade-up">Find Your Perfect Stay</h1>
              <p className="hero-subtitle" data-aos="fade-up">
                Discover amazing hotels and resorts for your next adventure
                around the world
              </p>
            </div>

            {/* Search Card */}
            <div className="search-card" data-aos="fade-up">
              <div className="row g-4 search-card-row">
                <div className="col-lg-6 col-xl-4">
                  <div className="form-floating position-relative">
                    <i className="fas fa-map-marker-alt input-icon"></i>
                    <input
                      type="text"
                      className="form-control"
                      id="floatingLocation"
                      placeholder="Where are you going?"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <label htmlFor="floatingLocation">Location</label>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-2">
                  <div className="form-floating position-relative">
                    <i className="fas fa-calendar-alt input-icon"></i>
                    <input
                      type="date"
                      className="form-control"
                      id="floatingCheckin"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                    />
                    <label htmlFor="floatingCheckin">Check-in</label>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-2">
                  <div className="form-floating position-relative">
                    <i className="fas fa-calendar-alt input-icon"></i>
                    <input
                      type="date"
                      className="form-control"
                      id="floatingCheckout"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                    <label htmlFor="floatingCheckout">Check-out</label>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-2">
                  <div className="row g-2">
                    <div className="col-12">
                      <div className="form-floating position-relative">
                        <i className="fas fa-user input-icon"></i>
                        <select
                          className="form-select"
                          id="floatingAdults"
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="floatingAdults">Guests</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-xl-2 mb-3">
                  <div className="d-flex justify-content-center h-100 align-items-center">
                    <button className="btn search-btn text-white" onClick={handleSearch}>
                      <i className="fas fa-search me-2"></i>
                      Search Hotels
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
