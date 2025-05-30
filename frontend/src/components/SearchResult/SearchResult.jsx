import React, { useState } from "react";
import "./SearchResult.scss";
import {
  Car,
  Coffee,
  Grid,
  List,
  MapPin,
  Star,
  Waves,
  Wifi,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "Elixir Hills",
    location: "Munnar, Kerala",
    rating: 4.5,
    userRating: 4.3,
    price: 6500,
    image: "/assets/demo-hotel-1.jpg",
    amenities: ["Free Breakfast", "Wi-Fi", "Pool"],
    tags: ["Luxury", "Beach Front"],
    type: "Resort",
    bookingLink: "https://live.ipms247.com/booking/book-rooms-elixirhills",
    officialWebsite: "https://www.elixirhills.com/",
  },
  {
    id: 2,
    name: "Inda Family",
    location: "Varkala, Kerala",
    rating: 4.2,
    userRating: 4.0,
    price: 4200,
    image: "/assets/demo-hotel-2.jpg",
    amenities: ["Wi-Fi", "Parking", "Gym"],
    tags: ["Pet-friendly", "City Center"],
    type: "Boutique",
    bookingLink: "https://indafamily.in/",
    officialWebsite: "https://indafamily.in/",
  },
  {
    id: 3,
    name: "The Gundumalai Bungalow",
    location: "Munnar, Kerala",
    rating: 4.8,
    userRating: 4.6,
    price: 8900,
    image: "/assets/demo-hotel-3.jpg",
    amenities: ["Free Breakfast", "Wi-Fi", "Spa", "Pool"],
    tags: ["Heritage", "Luxury"],
    type: "Resort",
    bookingLink: "https://thegundumalaibungalow.bookingjini.in/",
    officialWebsite: "https://www.thegundumalaibungalow.com/",
  },
  {
    id: 4,
    name: "Forthill Wildlife Resort",
    location: "Sultan Bathery, Kerala",
    rating: 4.1,
    userRating: 3.9,
    price: 3200,
    image: "/assets/demo-hotel-4.jpg",
    amenities: ["Wi-Fi", "Kitchen", "Parking"],
    tags: ["Budget-friendly", "Self-service"],
    type: "Apartment",
    bookingLink: "http://forthillwildliferesort.com/",
    officialWebsite: "http://forthillwildliferesort.com/",
  },
];

const SearchResult = () => {
  const [viewMode, setViewMode] = useState("grid");

  const navigate = useNavigate()

  const handleOfficialWebsiteNavigate = (event, url) => {
    event.stopPropagation();
    window.open(url, "_blank");
    console.log("Official website opened");
  };

  const handleCardNavigate = () => {
    navigate('/hotel-details')
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }
      />
    ));
  };

  const HotelCard = ({ hotel, isListView = false }) => (
    <div onClick={handleCardNavigate} className={`hotel-card ${isListView ? "hotel-card--list" : ""}`}>
      <div className="hotel-card__image">
        <div className="verified-tag">
          <img src="/assets/logo (3).png" alt="Verified" />
          <span>Verified</span>
        </div>
        <img src={hotel.image} alt={hotel.name} />
        <div className="hotel-card__rating">
          <div className="stars">{renderStars(hotel.rating)}</div>
          <span className="rating-text">({hotel.rating})</span>
        </div>
      </div>

      <div className="hotel-card__content">
        <h3 className="hotel-card__name">
          {hotel.name}
          <span
            className="official-tag"
            onClick={(e) =>
              handleOfficialWebsiteNavigate(e, hotel.officialWebsite)
            }
          >
            <i className="bx bxs-shield me-1 text-primary"></i>Official
          </span>
        </h3>

        <div className="hotel-card__location">
          <MapPin size={16} />
          <span>{hotel.location}</span>
        </div>

        <div className="hotel-card__user-rating">
          <div className="stars">{renderStars(hotel.userRating)}</div>
          <span>({hotel.userRating}) User Reviews</span>
        </div>

        <div className="hotel-card__price">
          <span className="currency">₹</span>
          <span className="amount">{hotel.price.toLocaleString()}</span>
          <span className="period">/ night</span>
        </div>

        <div className="hotel-card__amenities">
          {hotel.amenities.map((amenity, index) => (
            <span key={index} className="amenity-tag">
              {amenity === "Wi-Fi" && <Wifi size={14} />}
              {amenity === "Pool" && <Waves size={14} />}
              {amenity === "Parking" && <Car size={14} />}
              {amenity === "Free Breakfast" && <Coffee size={14} />}
              {amenity}
            </span>
          ))}
        </div>

        <div className="hotel-card__tags">
          {hotel.tags.map((tag, index) => (
            <span key={index} className="hotel-tag">
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => window.open(hotel.bookingLink, "_blank")}
          className="hotel-card__book-btn"
        >
          Book Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="results-section">
      <div className="results-header">
        <h2 className="results-title">{hotels.length} Hotels Found</h2>
        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            <Grid size={20} />
          </button>
          <button
            className={`view-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      <div className={viewMode === "grid" ? "hotels-grid" : "hotels-list"}>
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            isListView={viewMode === "list"}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
