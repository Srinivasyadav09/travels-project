import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Carousel() {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide custom-carousel-wrapper"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner coursel-first-image">
        <div className="carousel-inner coursel-first-image">
          {/* SLIDE 1 */}
          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/736x/01/58/21/01582121a8a352b20efc42c0627a6a0a.jpg"
              className="d-block w-100 coursel-first-image"
              alt="Jodhpur Taxi Services"
            />

            <div className="carousel-caption custom-caption">
              <h6 className="top-tagline">WELCOME TO JODHPUR TAXI SERVICES</h6>

              <h1 className="main-heading">
                RIDE WITH <span>COMFORT,</span>
                <br />
                EXPLORE JODHPUR
                <br />
                WITH EASE
              </h1>

              <h1 className="bottom-text">
                From Jodhpur to Jaipur, Jaisalmer, and beyond —<br />
                we make every mile smooth and memorable.
              </h1>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/736x/7d/b0/26/7db02666282faa1d42f012a6707cd747.jpg"
              className="d-block w-100 coursel-first-image"
              alt="Reliable Taxi Service"
            />

            <div className="carousel-caption custom-caption">
              <h6 className="top-tagline">SAFE • RELIABLE • AFFORDABLE</h6>

              <h1 className="main-heading">
                TRUSTED RIDES
                <br />
                ACROSS <span>RAJASTHAN</span>
              </h1>

              <h1 className="bottom-text">
                Airport transfers, city rides, and outstation trips —<br />
                travel stress-free with professional drivers.
              </h1>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/1200x/01/d6/e2/01d6e2fc9b018bd33ed2c2fb358e73a0.jpg"
              className="d-block w-100 coursel-first-image"
              alt="24x7 Taxi Service"
            />

            <div className="carousel-caption custom-caption">
              <h6 className="top-tagline">24/7 CUSTOMER SUPPORT</h6>

              <h1 className="main-heading">
                YOUR JOURNEY,
                <br />
                OUR <span>PRIORITY</span>
              </h1>

              <p className="bottom-text">
                Well-maintained cars, transparent pricing,
                <br />
                and round-the-clock availability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons container */}
      <div className="carousel-controls-bottom">
        <button
          className="carousel-control-prev custom-carousel-btn"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <FaArrowLeftLong size={22} />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next custom-carousel-btn"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <FaArrowRightLong size={22} />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
