export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* Taxi Checker Strip */}
      <div className="taxi-strip"></div>

      <div className="container text-center py-5">
        {/* Logo & Brand */}
        <img
          src="/images/shambhaviTravel.png"
          alt="Jodhpur Taxi Services"
          className="contact-logo"
        />

        <h6 className="brand-title">JODHPUR TAXI SERVICES</h6>
        <p className="brand-subtitle">FOR SAFE & RELIABLE JOURNEY</p>

        {/* Heading */}
        <h2 className="contact-heading">Customer Support</h2>

        <p className="contact-description">
          At Jodhpur Taxi Services, we’re here to help you 24/7. Whether you
          need assistance with bookings, fare details, or trip modifications,
          our support team is always ready to assist.
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-row">
            <span className="info-icon whatsapp">
              <i className="fab fa-whatsapp"></i>
            </span>
            <span className="info-text">+91 9660421712</span>
          </div>

          <div className="info-row">
            <span className="info-icon call">
              <i className="fas fa-phone"></i>
            </span>
            <span className="info-text">+91 9660421712</span>
          </div>

          <div className="info-row">
            <span className="info-icon email">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="info-text">yogendrv.i.p@gmail.com</span>
          </div>
        </div>

        {/* Reach Us */}
        <h2 className="reach-heading">Reach Us</h2>

        <p className="reach-description">
          Reliable rides, affordable fares, and 24/7 service across Rajasthan
          and major Indian cities.
        </p>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        © 2025 <span>Shambhavi Travels</span>. All Rights Reserved
      </footer>
    </section>
  );
}
