import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getVehicles = () => API.get("/vehicles");
export const getPackages = () => API.get("/packages");
export const createBooking = (bookingData) =>
  API.post("/booking_request", bookingData); 