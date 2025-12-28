import React, { useState } from "react";

export default function Features() {
  const features = [
    {
      icon: "/images/pickup.svg",
      title: "Fast Pickup",
      description:
        "We value your time! Our drivers ensure quick and punctual pickups from your location — whether it's your home, hotel, or airport — so you can start your journey without delay.",
    },
    {
      icon: "/images/money2.svg",
      title: "Affordable Rate",
      description:
        "Premium taxi services at pocket-friendly prices. We offer transparent fares with no hidden charges — giving you the best value for every ride.",
    },
    {
      icon: "/images/taxi-safety.svg",
      title: "Professional Service",
      description:
        "Our highly trained drivers provide courteous and professional service on every journey.",
    },
    {
      icon: "/images/support.svg",
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist you anytime, anywhere.",
    },
  ];

  const [flipped, setFlipped] = useState(false);

  return (
    <section id="features" className="features-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="site-title-tagline">FEATURE</span>
          <h2 className="site-title">Why Choose Shambhavi Travels</h2>
          <div className="heading-divider mx-auto"></div>
        </div>

        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div
                className="feature-card container text-center p-4 h-100"
                onMouseEnter={() => setFlipped(true)}
              >
                <span className={`yellow-circle ${flipped ? "flipped" : ""}`}>
                  <img
                    src={feature.icon}
                    className="feature-icon"
                    alt={feature.title}
                  />
                </span>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
