import { useInView } from "../hooks/useInView";

export default function CardItem({ vehicle, index }) {
  const [cardRef, cardInView] = useInView({ threshold: 0.2 });

  return (
    <div className="col-md-6 col-lg-4">
      <div
        ref={cardRef}
        className={`rate-card ${cardInView ? "fade-in-card" : ""}`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
        <div className="rate-header">
          <div className="rate-img">
            <img src={vehicle.image_url} alt={vehicle.vehicle_name} />
          </div>
        </div>

        <div className="rate-header-content">
          <h4>{vehicle.vehicle_name}</h4>
          <p className="rate-duration">Safe Journey</p>
        </div>

        <div className="rate-content">
          <div className="rate-icon">
            <span className="taxi-icon">
              <img src="/images/taxi-1.svg" alt="Taxi" className="taxi-icon" />
            </span>
          </div>

          <div className="rate-feature">
            <ul>
              <li>
                <span>Rate Per KM:</span> {vehicle.rate_per_km}
              </li>
              <li>
                <span>Daily Running:</span> {vehicle.daily_running}
              </li>
              <li>
                <span>Toll:</span> Extra
              </li>
              <li>
                <span>Parking:</span> Extra
              </li>
            </ul>

            <a href="tel:+916300445109" className="theme-btn">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
