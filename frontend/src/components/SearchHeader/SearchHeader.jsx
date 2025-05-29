import React, { useState } from "react";
import "./SearchHeader.scss";
import { Search } from 'lucide-react';
const SearchHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");

  
  return (
    <div className="search-header">
      <div className="search-container">
        <h1 className="search-title">Choose Your Favourite Hotel</h1>
        <p className="search-subtitle">
          Discover the perfect place to stay—handpicked hotels for every style,
          budget, and occasion.
        </p>

        <div className="search-bar">
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
