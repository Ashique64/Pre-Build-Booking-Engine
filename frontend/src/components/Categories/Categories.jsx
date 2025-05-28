import React, { useEffect } from "react";
import "./Categories.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  const categories = [
    {
      icon: "fas fa-umbrella-beach",
      title: "Beachfront",
      desc: "Ocean view properties",
      image: "/assets/beach.jpg",
    },
    {
      icon: "fas fa-paw",
      title: "Pet-friendly",
      desc: "Bring your furry friends",
      image: "/assets/pet.jpg",
    },
    {
      icon: "fas fa-wallet",
      title: "Budget-friendly",
      desc: "Great value stays",
      image: "/assets/budget.jpg",
    },
    {
      icon: "fas fa-crown",
      title: "Luxury",
      desc: "Premium experiences",
      image: "/assets/luxury.jpg",
    },
    {
      icon: "fas fa-users",
      title: "Family-friendly",
      desc: "Perfect for families",
      image: "/assets/family.jpg",
    },
    {
      icon: "fas fa-briefcase",
      title: "Business",
      desc: "Corporate travelers",
      image: "/assets/business.jpg",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="categories-section">
      <div className="container categories-container">
        <div className="animate-on-scroll" data-aos="fade-up">
          <h2 className="section-title">Browse by Category</h2>
        </div>

        <div className="row g-4 category-row">
          {categories.map((category, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 animate-on-scroll category-col"
              data-aos="fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-card">
                <div className="category-img">
                  <img src={category.image} alt={category.title} />
                </div>
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h4 className="category-title">{category.title}</h4>
                <p className="category-desc">{category.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
