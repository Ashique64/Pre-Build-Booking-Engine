import React, { useState, useEffect } from "react";
import {
  Star,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Dumbbell,
  Waves,
  Heart,
  Share2,
  Calendar,
  Users,
  Phone,
  Mail,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from "lucide-react";
import "./HotelDetails.scss";
import { useNavigate } from "react-router-dom";

const HotelDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleBackNavigate = () => {
    navigate("/search");
  };

  const hotel = {
    name: "Elixir Hills Resort",
    rating: 4.8,
    reviews: 1247,
    location: "Munnar, Kerala",
    photos: [
      "/assets/demo-hotel-1.jpg",
      "/assets/eli-1.png",
      "/assets/eli-2.png",
      "/assets/eli-3.png",
    ],
    description:
      "Immerse yourself in unparalleled luxury at Elixir Hills Resort & Spa, where contemporary elegance meets timeless sophistication. Nestled in the vibrant heart of the city, our award-winning property offers breathtaking panoramic views, world-class amenities, and personalized service that exceeds every expectation. Whether you're here for business or leisure, discover a sanctuary where every detail is crafted to perfection.",
    amenities: [
      { name: "Free High-Speed WiFi", icon: Wifi, color: "#3B82F6" },
      { name: "Infinity Pool", icon: Waves, color: "#06B6D4" },
      { name: "Luxury Spa", icon: Heart, color: "#EC4899" },
      { name: "State-of-the-Art Gym", icon: Dumbbell, color: "#10B981" },
      { name: "Fine Dining Restaurant", icon: Utensils, color: "#F59E0B" },
      { name: "24/7 Room Service", icon: Coffee, color: "#8B5CF6" },
      { name: "Valet Parking", icon: Car, color: "#EF4444" },
      { name: "Concierge Service", icon: Phone, color: "#6366F1" },
    ],
    rooms: [
      {
        id: 1,
        name: "Deluxe City View",
        price: 299,
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        features: ["King Bed", "City View", "45 sqm", "Free WiFi"],
      },
      {
        id: 2,
        name: "Executive Suite",
        price: 499,
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        features: [
          "Separate Living Area",
          "Premium View",
          "75 sqm",
          "Butler Service",
        ],
      },
      {
        id: 3,
        name: "Presidential Suite",
        price: 899,
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        features: [
          "Private Terrace",
          "Panoramic View",
          "120 sqm",
          "Personal Chef",
        ],
      },
    ],
    latitude: 40.7128,
    longitude: -74.006,
    bookingLink: "https://live.ipms247.com/booking/book-rooms-elixirhills",
    contact: {
      phone: "+1 (555) 123-4567",
      email: "reservations@elixirhills.com",
    },
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + hotel.photos.length) % hotel.photos.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  });

  const ImageModal = () => (
    <div className="image-modal" onClick={() => setIsImageModalOpen(false)}>
      <div className="image-modal__content">
        <button
          onClick={() => setIsImageModalOpen(false)}
          className="image-modal__close"
        >
          <X size={32} />
        </button>
        <img
          src={hotel.photos[currentImageIndex]}
          alt="Hotel view"
          className="image-modal__image"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          className="image-modal__nav image-modal__nav--left"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="image-modal__nav image-modal__nav--right"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="hotel-details">
        {/* Hero Section */}
        <div className="hero">
          <div className="hero__image-container">
            <img
              src={hotel.photos[currentImageIndex]}
              alt="Hotel view"
              className="hero__image"
            />
            <div className="hero__overlay"></div>
          </div>

          {/* Navigation Overlay */}
          <div className="hero__nav">
            <div className="hero__nav-content">
              <button onClick={handleBackNavigate} className="hero__back-btn">
                <ArrowLeft size={24} />
                <span>Back to Search</span>
              </button>
              <div className="hero__actions">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`hero__action-btn ${
                    isLiked ? "hero__action-btn--liked" : ""
                  }`}
                >
                  <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                </button>
                <button className="hero__action-btn">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Image Navigation */}
          <button onClick={prevImage} className="hero__arrow hero__arrow--left">
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="hero__arrow hero__arrow--right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Hero Content */}
          <div className="hero__content">
            <div className="hero__content-wrapper">
              <h1 className="hero__title">{hotel.name}</h1>
              <div className="hero__info">
                <div className="hero__location">
                  <MapPin size={20} />
                  <span>{hotel.location}</span>
                </div>
                <div className="hero__rating">
                  <div className="hero__stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} />
                    ))}
                  </div>
                  <span className="hero__rating-value">{hotel.rating}</span>
                  <span className="hero__reviews">
                    ({hotel.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="hero__dots">
                {hotel.photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`hero__dot ${
                      index === currentImageIndex ? "hero__dot--active" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content-2 container">
          <div className="description-section row">
            <div className="description-section__content col-md-12">
              <h2 className="section-title">About Our Hotel</h2>
              <p className="description-section__text">{hotel.description}</p>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="amenities-section">
            <h2 className="section-title section-title--center">
              Premium Amenities
            </h2>
            <div className="amenities-grid">
              {hotel.amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div key={index} className="amenity-card">
                    <div
                      className="amenity-card__icon"
                      style={{ backgroundColor: `${amenity.color}15` }}
                    >
                      <IconComponent
                        size={32}
                        style={{ color: amenity.color }}
                      />
                    </div>
                    <h4 className="amenity-card__name">{amenity.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2 className="section-title section-title--center">
              Perfect Location
            </h2>
            <div className="map-container">
              <iframe
                src={`https://www.google.com/maps?q=${hotel.latitude},${hotel.longitude}&z=15&output=embed`}
                className="map-iframe"
                allowFullScreen
                loading="lazy"
                title="Hotel Location"
              ></iframe>
            </div>
          </div>

          {/* Final CTA */}
          <div className="final-cta">
            <h2 className="final-cta__title">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="final-cta__text">
              Book your luxury escape today and create memories that last a
              lifetime.
            </p>
            <a
              href={hotel.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta__btn"
            >
              Book Your Stay Now
            </a>
          </div>
        </div>

        {/* Image Modal */}
        {isImageModalOpen && <ImageModal />}
      </div>
    </>
  );
};

export default HotelDetails;
