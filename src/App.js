import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import components
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Form from "./components/Form";
import Card from "./components/Card";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Packages from "./components/Packages";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Form />
      <Card />
      <AboutUs />
      <Features />
      <Packages />
      <Contact />
    </>
  );
}

export default App;
