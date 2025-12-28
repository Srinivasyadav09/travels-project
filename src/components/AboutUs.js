import { useInView } from "../hooks/useInView";

export default function AboutUs() {
  const [imgRef, imgInView] = useInView({ threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ threshold: 0.2 });
  const [leftRef, leftInView] = useInView({ threshold: 0.2 });
  const [textRef, textInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              ref={imgRef}
              className={`about-image ${imgInView ? "fade-up-visible" : ""}`}
            >
              <img
                src="https://i.pinimg.com/736x/0c/bb/1e/0cbb1e14e126ae62798248d7cee52b90.jpg"
                alt="Taxi Service"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6">
            <div className="site-title-tagline">ABOUT US</div>

            <h1 className="site-title">
              Your Reliable <span>Travel Partner</span> Across Hyderabad &
              Telangana
            </h1>

            <p
              ref={rightRef}
              className={`mt-4 fade-right ${rightInView ? "fade-visible" : ""}`}
            >
              Welcome to Shambhavi Travels, your trusted destination for safe,
              comfortable, and affordable taxi rides across major cities in
              South and Central India. Whether you're exploring the historic
              Charminar in Hyderabad, visiting Secunderabad, heading to
              Warangal, or traveling to Karimnagar, we make every journey
              memorable and hassle-free.
            </p>

            <h5
              ref={leftRef}
              className={`mt-4 fw-bold fade-left ${
                leftInView ? "fade-visible" : ""
              }`}
            >
              Who We Are
            </h5>

            <p
              ref={textRef}
              className={`about-text fade-up ${
                textInView ? "fade-visible" : ""
              }`}
            >
              At Shambhavi Travels, we're more than just a cab provider — we're
              your travel companion on the road. With years of experience in the
              transportation industry across Telangana and surrounding regions,
              we've built a reputation for reliability, professionalism, and
              customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        <a
          href="https://wa.me/917995267449"
          className="float-btn whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="tel:+917995267449"
          className="float-btn call-btn"
          title="Call Us"
        >
          <i className="fas fa-phone"></i>
        </a>
      </div>
    </section>
  );
}
