import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Users,
  DollarSign,
  MousePointer,
  ExternalLink,
  Hotel,
  Plus,
  Calendar,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Activity,
} from "lucide-react";
import "./AdminDashboard.scss";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [formData, setFormData] = useState({
    hotelName: "",
    websiteUrl: "",
    bookingEngine: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
  });

  // Sample data for analytics
  const trafficData = [
    {
      hotel: "Sunrise Paradise",
      clicks: 1250,
      redirects: 980,
      conversions: 156,
      revenue: 98400,
    },
    {
      hotel: "Urban Boutique",
      clicks: 890,
      redirects: 720,
      conversions: 89,
      revenue: 56800,
    },
    {
      hotel: "Heritage Palace",
      clicks: 2100,
      redirects: 1800,
      conversions: 290,
      revenue: 185600,
    },
    {
      hotel: "Modern Suites",
      clicks: 650,
      redirects: 520,
      conversions: 67,
      revenue: 42800,
    },
  ];

  const bookingSummary = [
    {
      id: "BK001",
      hotelName: "Sunrise Paradise Resort",
      date: "2024-05-25",
      amount: 6500,
      referralId: "REF123",
    },
    {
      id: "BK002",
      hotelName: "Urban Boutique Hotel",
      date: "2024-05-24",
      amount: 4200,
      referralId: "REF124",
    },
    {
      id: "BK003",
      hotelName: "Heritage Palace",
      date: "2024-05-23",
      amount: 8900,
      referralId: "REF125",
    },
    {
      id: "BK004",
      hotelName: "Modern Apartment Suites",
      date: "2024-05-22",
      amount: 3200,
      referralId: "REF126",
    },
  ];

  const monthlyData = [
    { month: "Jan", revenue: 45000, bookings: 120 },
    { month: "Feb", revenue: 52000, bookings: 140 },
    { month: "Mar", revenue: 48000, bookings: 135 },
    { month: "Apr", revenue: 61000, bookings: 165 },
    { month: "May", revenue: 58000, bookings: 158 },
  ];

  const conversionData = [
    { name: "Conversions", value: 602, color: "#667eea" },
    { name: "Clicks", value: 4288, color: "#764ba2" },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const StatCard = ({
    icon: Icon,
    title,
    value,
    subtitle,
    trend,
    color = "primary",
  }) => (
    <div className={`stat-card stat-card--${color}`}>
      <div className="stat-card__icon">
        <Icon size={24} />
      </div>
      <div className="stat-card__content">
        <h3 className="stat-card__title">{title}</h3>
        <div className="stat-card__value">{value}</div>
        <div className="stat-card__subtitle">
          {subtitle}
          {trend && (
            <span
              className={`trend ${trend > 0 ? "trend--up" : "trend--down"}`}
            >
              <TrendingUp size={16} />
              {Math.abs(trend)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-nav">
          <h1 className="dashboard-title">
            <img src="/assets/logo (3).png" alt="" />
          </h1>
          <div className="nav-tabs">
            <button
              className={`nav-tab ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              <BarChart3 size={20} />
              Analytics Dashboard
            </button>
            <button
              className={`nav-tab ${
                activeTab === "list-hotel" ? "active" : ""
              }`}
              onClick={() => setActiveTab("list-hotel")}
            >
              <Plus size={20} />
              List Your Hotel
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {activeTab === "dashboard" && (
          <>
            {/* Stats Overview */}
            <div className="stats-grid">
              <StatCard
                icon={MousePointer}
                title="Total Clicks"
                value="4,890"
                subtitle="This month"
                trend={12.5}
                color="primary"
              />
              <StatCard
                icon={ExternalLink}
                title="Total Redirects"
                value="4,020"
                subtitle="This month"
                trend={8.3}
                color="secondary"
              />
              <StatCard
                icon={Users}
                title="Conversions"
                value="602"
                subtitle="This month"
                trend={15.2}
                color="success"
              />
              <StatCard
                icon={DollarSign}
                title="Revenue"
                value="₹3,83,600"
                subtitle="This month"
                trend={22.1}
                color="warning"
              />
            </div>

            {/* Charts */}
            <div className="charts-grid">
              <div className="chart-card">
                <h3 className="chart-card__title">
                  <Activity size={20} />
                  Monthly Performance
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#718096" />
                    <YAxis stroke="#718096" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#667eea"
                      strokeWidth={3}
                      dot={{ fill: "#667eea", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="chart-card">
                <h3 className="chart-card__title">
                  <PieChart size={20} />
                  Conversion Ratio
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={conversionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {conversionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Data Tables */}
            <div className="data-tables">
              {/* Hotel Traffic Tracking */}
              <div className="table-card">
                <div className="table-card__header">
                  <h3 className="table-card__title">Hotel Traffic Tracking</h3>
                </div>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Hotel Name</th>
                      <th>Clicks</th>
                      <th>Redirects</th>
                      <th>Estimated Conversions</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trafficData.map((hotel, index) => (
                      <tr key={index}>
                        <td>{hotel.hotel}</td>
                        <td>
                          <span className="metric-value metric-value--clicks">
                            {hotel.clicks}
                          </span>
                        </td>
                        <td>
                          <span className="metric-value">
                            {hotel.redirects}
                          </span>
                        </td>
                        <td>
                          <span className="metric-value metric-value--conversions">
                            {hotel.conversions}
                          </span>
                        </td>
                        <td>
                          <span className="metric-value metric-value--revenue">
                            ₹{hotel.revenue.toLocaleString()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Booking Summary */}
              <div className="table-card">
                <div className="table-card__header">
                  <h3 className="table-card__title">Booking Summary</h3>
                </div>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Booking ID</th>
                      <th>Hotel Name</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Referral ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingSummary.map((booking) => (
                      <tr key={booking.id}>
                        <td>
                          <strong>{booking.id}</strong>
                        </td>
                        <td>{booking.hotelName}</td>
                        <td>{booking.date}</td>
                        <td>
                          <span className="metric-value metric-value--revenue">
                            ₹{booking.amount.toLocaleString()}
                          </span>
                        </td>
                        <td>{booking.referralId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === "list-hotel" && (
          <div className="form-container">
            {/* Benefits Section */}
            <div className="benefits-list">
              <h3>
                <CheckCircle size={20} color="#48bb78" />
                Benefits of Being Listed
              </h3>
              <ul>
                <li>
                  <CheckCircle size={16} color="#48bb78" />
                  Increased visibility and reach to potential customers
                </li>
                <li>
                  <CheckCircle size={16} color="#48bb78" />
                  Detailed traffic reports and analytics
                </li>
                <li>
                  <CheckCircle size={16} color="#48bb78" />
                  Real-time booking tracking and conversion insights
                </li>
                <li>
                  <CheckCircle size={16} color="#48bb78" />
                  Professional listing with high-quality images
                </li>
                <li>
                  <CheckCircle size={16} color="#48bb78" />
                  Integration with major booking engines
                </li>
              </ul>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
              <div className="form-card">
                <div className="form-section">
                  <h3 className="form-section__title">
                    <Hotel size={20} />
                    Hotel Information
                  </h3>

                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">
                        <Hotel size={16} />
                        Hotel Name *
                      </label>
                      <input
                        type="text"
                        name="hotelName"
                        className="form-input"
                        placeholder="Enter your hotel name"
                        value={formData.hotelName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Globe size={16} />
                        Website URL *
                      </label>
                      <input
                        type="url"
                        name="websiteUrl"
                        className="form-input"
                        placeholder="https://your-hotel-website.com"
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* <div className="form-group">
                      <label className="form-label">
                        <Star size={16} />
                        Booking Engine Provider
                      </label>
                      <select
                        name="bookingEngine"
                        className="form-select"
                        value={formData.bookingEngine}
                        onChange={handleInputChange}
                      >
                        <option value="">Select provider</option>
                        <option value="cloudbeds">Cloudbeds</option>
                        <option value="ezee">eZee</option>
                        <option value="booking">Booking.com</option>
                        <option value="expedia">Expedia</option>
                        <option value="other">Other</option>
                      </select>
                    </div> */}
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section__title">
                    <Phone size={20} />
                    Contact Information
                  </h3>

                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Contact Name *</label>
                      <input
                        type="text"
                        name="contactName"
                        className="form-input"
                        placeholder="Your full name"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Mail size={16} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="your.email@domain.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Phone size={16} />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <MapPin size={16} />
                      Hotel Address
                    </label>
                    <textarea
                      name="address"
                      className="form-textarea"
                      placeholder="Enter complete address with city, state, and postal code"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <Plus size={20} />
                  Submit Hotel Listing Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
