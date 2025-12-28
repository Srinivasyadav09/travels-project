import { useState, useEffect } from "react";
import { getVehicles } from "../components/api/userApi";
import CardItem from "./CardItem";

export default function Card() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    try {
      const res = await getVehicles();
      setVehicles(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="site-heading text-center">
            <span className="site-title-tagline">OUR FLEETS</span>
            <h2 className="site-title">Our Taxi Fleet For You</h2>
            <div className="heading-divider"></div>
          </div>
        </div>
      </div>

      <div className="row">
        {vehicles.map((v, index) => (
          <CardItem key={index} vehicle={v} index={index} />
        ))}
      </div>
    </div>
  );
}