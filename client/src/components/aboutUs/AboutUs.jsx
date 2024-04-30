import About from "../about/About";
import Header from "../header/Header";
import Navbars from "../navbar/navBar";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Navbars />
      <Header />
      <div className="homeContainer">
        <About />
      </div>
    </div>
  );
};

export default AboutUs;
