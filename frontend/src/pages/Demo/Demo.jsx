// import React, { useState } from "react";
// import { Search, MapPin, Star, Wifi, Car, Coffee, Waves, Filter, Grid, List, ChevronDown } from 'lucide-react';
// import "./Demo.scss";

// const Demo = () => {
//   const [viewMode, setViewMode] = useState("grid");
//   const [filters, setFilters] = useState({
//     priceRange: [0, 15000],
//     starRating: 0,
//     amenities: [],
//     hotelType: "",
//     userRating: 0,
//   });
//   const [searchQuery, setSearchQuery] = useState("");

//   const hotels = [
//     {
//       id: 1,
//       name: "Sunrise Paradise Resort",
//       location: "Goa, India",
//       rating: 4.5,
//       userRating: 4.3,
//       price: 6500,
//       image:
//         "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
//       amenities: ["Free Breakfast", "Wi-Fi", "Pool"],
//       tags: ["Free Cancellation", "Beach Front"],
//       type: "Resort",
//     },
//     {
//       id: 2,
//       name: "Urban Boutique Hotel",
//       location: "Mumbai, India",
//       rating: 4.2,
//       userRating: 4.0,
//       price: 4200,
//       image:
//         "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
//       amenities: ["Wi-Fi", "Parking", "Gym"],
//       tags: ["Pet-friendly", "City Center"],
//       type: "Boutique",
//     },
//     {
//       id: 3,
//       name: "Heritage Palace",
//       location: "Rajasthan, India",
//       rating: 4.8,
//       userRating: 4.6,
//       price: 8900,
//       image:
//         "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
//       amenities: ["Free Breakfast", "Wi-Fi", "Spa", "Pool"],
//       tags: ["Heritage", "Luxury"],
//       type: "Resort",
//     },
//     {
//       id: 4,
//       name: "Modern Apartment Suites",
//       location: "Bangalore, India",
//       rating: 4.1,
//       userRating: 3.9,
//       price: 3200,
//       image:
//         "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
//       amenities: ["Wi-Fi", "Kitchen", "Parking"],
//       tags: ["Budget-friendly", "Self-service"],
//       type: "Apartment",
//     },
//   ];

//   const categories = [
//     "Beachfront",
//     "Pet-friendly",
//     "Budget-friendly",
//     "Luxury",
//   ];
//   // const destinations = ["Goa", "Bali", "Dubai", "Maldives"];
//   const amenitiesList = [
//     "Wi-Fi",
//     "Pool",
//     "Parking",
//     "Gym",
//     "Spa",
//     "Restaurant",
//   ];
//   const hotelTypes = ["Boutique", "Resort", "Apartment", "Hotel"];

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <Star
//         key={i}
//         size={16}
//         className={
//           i < Math.floor(rating)
//             ? "fill-yellow-400 text-yellow-400"
//             : "text-gray-300"
//         }
//       />
//     ));
//   };

//   const HotelCard = ({ hotel, isListView = false }) => (
//     <div className={`hotel-card ${isListView ? "hotel-card--list" : ""}`}>
//       <div className="hotel-card__image">
//         <img src={hotel.image} alt={hotel.name} />
//         <div className="hotel-card__rating">
//           <div className="stars">{renderStars(hotel.rating)}</div>
//           <span className="rating-text">({hotel.rating})</span>
//         </div>
//       </div>

//       <div className="hotel-card__content">
//         <h3 className="hotel-card__name">{hotel.name}</h3>

//         <div className="hotel-card__location">
//           <MapPin size={16} />
//           <span>{hotel.location}</span>
//         </div>

//         <div className="hotel-card__user-rating">
//           <div className="stars">{renderStars(hotel.userRating)}</div>
//           <span>({hotel.userRating}) User Reviews</span>
//         </div>

//         <div className="hotel-card__price">
//           <span className="currency">₹</span>
//           <span className="amount">{hotel.price.toLocaleString()}</span>
//           <span className="period">/ night</span>
//         </div>

//         <div className="hotel-card__amenities">
//           {hotel.amenities.map((amenity, index) => (
//             <span key={index} className="amenity-tag">
//               {amenity === "Wi-Fi" && <Wifi size={14} />}
//               {amenity === "Pool" && <Waves size={14} />}
//               {amenity === "Parking" && <Car size={14} />}
//               {amenity === "Free Breakfast" && <Coffee size={14} />}
//               {amenity}
//             </span>
//           ))}
//         </div>

//         <div className="hotel-card__tags">
//           {hotel.tags.map((tag, index) => (
//             <span key={index} className="hotel-tag">
//               {tag}
//             </span>
//           ))}
//         </div>

//         <button className="hotel-card__book-btn">Book Now</button>
//       </div>
//     </div>
//   );
//   return (
//     <>
//       <div className="search-header">
//         <div className="search-container">
//           <h1 className="search-title">Find Your Perfect Stay</h1>
//           <p className="search-subtitle">
//             Discover amazing hotels and accommodations worldwide
//           </p>

//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Where are you going?"
//               className="search-input"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="search-btn">
//               <Search size={20} />
//               Search
//             </button>
//           </div>

//           <div className="category-tabs">
//             {categories.map((category) => (
//               <button key={category} className="category-tab">
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="main-content">
//         {/* Sidebar Filters */}
//         <div className="sidebar">
//           <h3>
//             <Filter size={20} />
//             Filters
//           </h3>

//           <div className="filter-section">
//             <h4>Price Range</h4>
//             <div className="price-range">
//               <input
//                 type="range"
//                 min="0"
//                 max="20000"
//                 value={filters.priceRange[1]}
//                 className="price-input"
//                 onChange={(e) =>
//                   setFilters({
//                     ...filters,
//                     priceRange: [0, parseInt(e.target.value)],
//                   })
//                 }
//               />
//               <div>₹0 - ₹{filters.priceRange[1].toLocaleString()}</div>
//             </div>
//           </div>

//           <div className="filter-section">
//             <h4>Star Rating</h4>
//             <div className="star-filter">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   className="star-btn"
//                   onClick={() => setFilters({ ...filters, starRating: star })}
//                 >
//                   <Star
//                     size={20}
//                     className={
//                       star <= filters.starRating
//                         ? "fill-yellow-400 text-yellow-400"
//                         : "text-gray-300"
//                     }
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="filter-section">
//             <h4>Amenities</h4>
//             <div className="checkbox-group">
//               {amenitiesList.map((amenity) => (
//                 <label key={amenity} className="checkbox-item">
//                   <input
//                     type="checkbox"
//                     checked={filters.amenities.includes(amenity)}
//                     onChange={(e) => {
//                       if (e.target.checked) {
//                         setFilters({
//                           ...filters,
//                           amenities: [...filters.amenities, amenity],
//                         });
//                       } else {
//                         setFilters({
//                           ...filters,
//                           amenities: filters.amenities.filter(
//                             (a) => a !== amenity
//                           ),
//                         });
//                       }
//                     }}
//                   />
//                   {amenity}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="filter-section">
//             <h4>Hotel Type</h4>
//             <div className="checkbox-group">
//               {hotelTypes.map((type) => (
//                 <label key={type} className="checkbox-item">
//                   <input
//                     type="radio"
//                     name="hotelType"
//                     checked={filters.hotelType === type}
//                     onChange={() => setFilters({ ...filters, hotelType: type })}
//                   />
//                   {type}
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Results Section */}
//         <div className="results-section">
//           <div className="results-header">
//             <h2 className="results-title">{hotels.length} Hotels Found</h2>
//             <div className="view-controls">
//               <button
//                 className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
//                 onClick={() => setViewMode("grid")}
//               >
//                 <Grid size={20} />
//               </button>
//               <button
//                 className={`view-btn ${viewMode === "list" ? "active" : ""}`}
//                 onClick={() => setViewMode("list")}
//               >
//                 <List size={20} />
//               </button>
//             </div>
//           </div>

//           <div className={viewMode === "grid" ? "hotels-grid" : "hotels-list"}>
//             {hotels.map((hotel) => (
//               <HotelCard
//                 key={hotel.id}
//                 hotel={hotel}
//                 isListView={viewMode === "list"}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Demo;
