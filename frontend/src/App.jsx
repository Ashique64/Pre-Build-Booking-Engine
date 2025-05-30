import "./App.scss";
// import Demo from './pages/Demo/Demo'
import Home from "./pages/Home/Home";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SearchHotels from "./pages/SearchHotels/SearchHotels";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import HotelDetails from "./pages/HotelDetails/HotelDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchHotels />} />
        <Route path="/hotel-details" element={<HotelDetails />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
