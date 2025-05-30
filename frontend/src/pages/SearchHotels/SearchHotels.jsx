import React, { useEffect } from "react";
import "./SearchHotels.scss";
import NavBar2 from "../../components/NavBar2/NavBar2";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import FilterSection from "../../components/FilterSection/FilterSection";
import SearchResult from "../../components/SearchResult/SearchResult";

const SearchHotels = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect
  return (
    <>
      <NavBar2 />
      <SearchHeader />
      <div className="main-content">
        <FilterSection />
        <SearchResult />
      </div>
    </>
  );
};

export default SearchHotels;
