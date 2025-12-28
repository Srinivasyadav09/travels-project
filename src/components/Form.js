import { useState } from "react";
import { createBooking } from "../components/api/userApi"; // your axios API file

export default function Form() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");

  const minDate = `${yyyy}-${mm}-${dd}`;
  const minTime = `${hh}:${min}`;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [cabType, setCabType] = useState("");
  const [tripType, setTripType] = useState("");

  const todayString = minDate;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare data for POST request
    const bookingData = {
      full_name: fullName,
      phone: phone,
      pickup_location: pickupLocation,
      dropoff_location: dropoffLocation,
      cab_type: cabType,
      trip_type: tripType,
      pickup_date: date,
      pickup_time: time,
    };

    try {
      const response = await createBooking(bookingData);
      console.log("Booking created:", response.data);
      alert("Booking successful!");
      // Reset form
      setFullName("");
      setPhone("");
      setPickupLocation("");
      setDropoffLocation("");
      setCabType("");
      setTripType("");
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Failed to create booking");
    }
  };

  return (
    <div className="booking-card shadow-lg mb-4" id="book">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2 className="mb-3 booking-title">Book Your Ride</h2>

        <div className="mb-3 input-with-icon">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <span className="input-icon">
            <i className="fas fa-user"></i>
          </span>
        </div>

        <div className="mb-3 input-with-icon">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Mobile No."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <span className="input-icon">
            <i className="fas fa-phone-alt"></i>
          </span>
        </div>

        <div className="mb-3 input-with-icon">
          <label className="form-label">Pick Up Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type Location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          />
          <span className="input-icon">
            <i className="fas fa-map-marker-alt"></i>
          </span>
        </div>

        <div className="mb-3 input-with-icon">
          <label className="form-label">Drop Off Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type Location"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            required
          />
          <span className="input-icon">
            <i className="fas fa-map-pin"></i>
          </span>
        </div>

        <div className="mb-3 input-with-icon">
          <label className="form-label">Cab Type</label>
          <select
            className="form-control"
            value={cabType}
            onChange={(e) => setCabType(e.target.value)}
            required
          >
            <option value="">Choose Cab</option>
            <option>Economy</option>
            <option>Premium</option>
          </select>
          <span className="input-icon">
            <i className="fas fa-taxi"></i>
          </span>
        </div>

        <div className="mb-3 input-with-icon">
          <label className="form-label">Trip Type</label>
          <select
            className="form-control"
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            required
          >
            <option value="">Choose Type</option>
            <option>One Way</option>
            <option>Round Trip</option>
          </select>
          <span className="input-icon">
            <i className="fas fa-road"></i>
          </span>
        </div>

        <div className="mb-3 input-with-icon">
          <label className="form-label">Pick Up Date</label>
          <input
            type="date"
            className="form-control"
            min={minDate}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setTime("");
            }}
            required
          />
        </div>

        <div className="mb-3 input-with-icon">
          <label className="form-label">Pick Up Time</label>
          <input
            type="time"
            className="form-control"
            value={time}
            min={date === todayString ? minTime : undefined}
            onChange={(e) => setTime(e.target.value)}
            disabled={!date}
            required
          />
        </div>

        <button type="submit" className="theme-btn w-100">
          Book Now
        </button>
      </form>
    </div>
  );
}
