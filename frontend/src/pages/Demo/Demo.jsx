// import React, { useEffect, useState } from "react";
// import './Demo.scss'


// const Demo = () => {
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [location, setLocation] = useState("");
//   const [adults, setAdults] = useState(2);
//   const [children, setChildren] = useState(0);

//   const categories = [
//     {
//       icon: "fas fa-umbrella-beach",
//       title: "Beachfront",
//       desc: "Ocean view properties",
//     },
//     {
//       icon: "fas fa-paw",
//       title: "Pet-friendly",
//       desc: "Bring your furry friends",
//     },
//     {
//       icon: "fas fa-wallet",
//       title: "Budget-friendly",
//       desc: "Great value stays",
//     },
//     { icon: "fas fa-crown", title: "Luxury", desc: "Premium experiences" },
//     {
//       icon: "fas fa-users",
//       title: "Family-friendly",
//       desc: "Perfect for families",
//     },
//     {
//       icon: "fas fa-briefcase",
//       title: "Business",
//       desc: "Corporate travelers",
//     },
//   ];

//   const destinations = [
//     {
//       name: "Goa, India",
//       image:
//         "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Bali, Indonesia",
//       image:
//         "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Dubai, UAE",
//       image:
//         "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Maldives",
//       image:
//         "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
//     },
//   ];

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate");
//         }
//       });
//     }, observerOptions);

//     const animateElements = document.querySelectorAll(".animate-on-scroll");
//     animateElements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const handleSearch = () => {
//     console.log("Search initiated with:", {
//       location,
//       checkInDate,
//       checkOutDate,
//       adults,
//       children,
//     });
//     alert("Search functionality would be implemented here!");
//   };

//   return (
//     <>
//       {/* Header */}
//       <header className="main-header">
//         <nav className="navbar navbar-expand-lg">
//           <div className="container">
//             <a className="navbar-brand" href="#">
//               <i className="fas fa-hotel me-2"></i>
//               StayBooker
//             </a>

//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav mx-auto">
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     About
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     List Your Hotel
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Contact
//                   </a>
//                 </li>
//               </ul>

//               <button className="btn login-btn">
//                 <i className="fas fa-user me-2"></i>
//                 Login
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="floating-shapes">
//           <div className="shape"></div>
//           <div className="shape"></div>
//           <div className="shape"></div>
//         </div>

//         <div className="container hero-content">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <div className="text-center mb-5">
//                 <h1 className="hero-title">Find Your Perfect Stay</h1>
//                 <p className="hero-subtitle">
//                   Discover amazing hotels and resorts for your next adventure
//                   around the world
//                 </p>
//               </div>

//               {/* Search Card */}
//               <div className="search-card">
//                 <div className="row g-4">
//                   <div className="col-lg-6 col-xl-3">
//                     <div className="form-floating position-relative">
//                       <i className="fas fa-map-marker-alt input-icon"></i>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="floatingLocation"
//                         placeholder="Where are you going?"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                       />
//                       <label htmlFor="floatingLocation">Location</label>
//                     </div>
//                   </div>

//                   <div className="col-lg-6 col-xl-2">
//                     <div className="form-floating position-relative">
//                       <i className="fas fa-calendar-alt input-icon"></i>
//                       <input
//                         type="date"
//                         className="form-control"
//                         id="floatingCheckin"
//                         value={checkInDate}
//                         onChange={(e) => setCheckInDate(e.target.value)}
//                       />
//                       <label htmlFor="floatingCheckin">Check-in</label>
//                     </div>
//                   </div>

//                   <div className="col-lg-6 col-xl-2">
//                     <div className="form-floating position-relative">
//                       <i className="fas fa-calendar-alt input-icon"></i>
//                       <input
//                         type="date"
//                         className="form-control"
//                         id="floatingCheckout"
//                         value={checkOutDate}
//                         onChange={(e) => setCheckOutDate(e.target.value)}
//                       />
//                       <label htmlFor="floatingCheckout">Check-out</label>
//                     </div>
//                   </div>

//                   <div className="col-lg-6 col-xl-2">
//                     <div className="row g-2">
//                       <div className="col-6">
//                         <div className="form-floating position-relative">
//                           <i className="fas fa-user input-icon"></i>
//                           <select
//                             className="form-select"
//                             id="floatingAdults"
//                             value={adults}
//                             onChange={(e) => setAdults(Number(e.target.value))}
//                           >
//                             {[1, 2, 3, 4, 5, 6].map((num) => (
//                               <option key={num} value={num}>
//                                 {num}
//                               </option>
//                             ))}
//                           </select>
//                           <label htmlFor="floatingAdults">Adults</label>
//                         </div>
//                       </div>
//                       <div className="col-6">
//                         <div className="form-floating">
//                           <select
//                             className="form-select"
//                             id="floatingChildren"
//                             value={children}
//                             onChange={(e) =>
//                               setChildren(Number(e.target.value))
//                             }
//                           >
//                             {[0, 1, 2, 3, 4].map((num) => (
//                               <option key={num} value={num}>
//                                 {num}
//                               </option>
//                             ))}
//                           </select>
//                           <label htmlFor="floatingChildren">Children</label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 col-xl-3">
//                     <div className="d-flex justify-content-center h-100 align-items-end">
//                       <button className="btn search-btn" onClick={handleSearch}>
//                         <i className="fas fa-search me-2"></i>
//                         Search Hotels
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="categories-section">
//         <div className="container">
//           <div className="animate-on-scroll">
//             <h2 className="section-title">Browse by Category</h2>
//           </div>

//           <div className="row g-4">
//             {categories.map((category, index) => (
//               <div
//                 key={index}
//                 className="col-lg-4 col-md-6 animate-on-scroll"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="category-card">
//                   <div className="category-icon">
//                     <i className={category.icon}></i>
//                   </div>
//                   <h4 className="category-title">{category.title}</h4>
//                   <p className="category-desc">{category.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Popular Destinations */}
//       <section className="destinations-section">
//         <div className="container">
//           <div className="animate-on-scroll">
//             <h2 className="section-title">Popular Destinations</h2>
//           </div>

//           <div className="row g-4">
//             {destinations.map((destination, index) => (
//               <div
//                 key={index}
//                 className="col-lg-3 col-md-6 animate-on-scroll"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="destination-card">
//                   <img
//                     src={destination.image}
//                     alt={destination.name}
//                     className="destination-img"
//                   />
//                   <div className="destination-overlay">
//                     <h4 className="destination-title">{destination.name}</h4>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Demo;
