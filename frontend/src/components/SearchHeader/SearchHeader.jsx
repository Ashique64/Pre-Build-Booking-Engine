import React, { useEffect, useState } from "react";
import "./SearchHeader.scss";
import { Search } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
const SearchHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="search-header">
      <div className="search-container">
        <h1 className="search-title" data-aos="fade-up">
          Choose Your Favourite Hotel
        </h1>
        <p className="search-subtitle" data-aos="fade-up">
          Discover the perfect place to stay—handpicked hotels for every style,
          budget, and occasion.
        </p>

        <div className="search-bar" data-aos="fade-up">
          <input
            type="text"
            placeholder="Search hotels by name"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn">
            <Search size={20} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
