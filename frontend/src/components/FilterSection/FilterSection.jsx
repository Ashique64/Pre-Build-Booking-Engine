import React, { useEffect, useState } from "react";
import "./FilterSection.scss";
import { Star, Filter } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

const FilterSection = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 15000],
    starRating: 0,
    amenities: [],
    hotelType: "",
    userRating: 0,
  });

  const amenitiesList = [
    "Wi-Fi",
    "Pool",
    "Parking",
    "Gym",
    "Spa",
    "Restaurant",
  ];

  const hotelTypes = ["Boutique", "Resort", "Apartment", "Hotel"];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="sidebar" data-aos="fade-right">
      <h3>
        <Filter size={20} />
        Filters
      </h3>

      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-range">
          <input
            type="range"
            min="0"
            max="20000"
            value={filters.priceRange[1]}
            className="price-input"
            onChange={(e) =>
              setFilters({
                ...filters,
                priceRange: [0, parseInt(e.target.value)],
              })
            }
          />
          <div>₹0 - ₹{filters.priceRange[1].toLocaleString()}</div>
        </div>
      </div>

      <div className="filter-section">
        <h4>Star Rating</h4>
        <div className="star-filter">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className="star-btn"
              onClick={() => setFilters({ ...filters, starRating: star })}
            >
              <Star
                size={20}
                className={
                  star <= filters.starRating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Amenities</h4>
        <div className="checkbox-group">
          {amenitiesList.map((amenity) => (
            <label key={amenity} className="checkbox-item">
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters({
                      ...filters,
                      amenities: [...filters.amenities, amenity],
                    });
                  } else {
                    setFilters({
                      ...filters,
                      amenities: filters.amenities.filter((a) => a !== amenity),
                    });
                  }
                }}
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Hotel Type</h4>
        <div className="checkbox-group">
          {hotelTypes.map((type) => (
            <label key={type} className="checkbox-item">
              <input
                type="radio"
                name="hotelType"
                checked={filters.hotelType === type}
                onChange={() => setFilters({ ...filters, hotelType: type })}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
