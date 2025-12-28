import '../../src/Navbar.css'; // Adjust path if needed

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top"
      style={{ zIndex: 1050 }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="/images/shabhavi.png"
            alt="logo"
            height={40}
            width={40}
            style={{ borderRadius: "50%", marginRight: "8px" }}
          />
          <span style={{ color: "#f39c12" }}>SHAMBHAVI</span>&nbsp;TRAVELS
        </a>

        {/* Animated Hamburger */}
        <button
          className="navbar-toggler custom-hamburger-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="hamburger hamburger--spin">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse bg-white shadow-sm" id="navbarCollapse">
          <ul className="navbar-nav ms-auto text-center w-100">
            <li className="nav-item w-100">
              <a className="nav-link custom-nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item w-100">
              <a className="nav-link custom-nav-link" href="#book">Book Now</a>
            </li>
            <li className="nav-item w-100">
              <a className="nav-link custom-nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item w-100">
              <a className="nav-link custom-nav-link" href="#packages">Packages</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}