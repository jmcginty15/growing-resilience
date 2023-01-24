import { useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "../about/About";
import Guide from "../guide/Guide";
import Podcast from "../podcast/Podcast";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import backgroundHorizontal from "../../assets/home-background-horizontal.jpg";
import backgroundVertical from "../../assets/home-background-vertical.jpg";
import logo from "../../assets/landing-logo.png";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [background, setBackground] = useState(
    window.innerWidth >= 950 ? backgroundHorizontal : backgroundVertical
  );
  const [photoRight, setPhotoRight] = useState(window.innerWidth > 768);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && !photoRight) setPhotoRight(true);
    else if (window.innerWidth < 768 && photoRight) setPhotoRight(false);

    if (
      window.innerWidth >= 950 &&
      JSON.stringify(background) !== JSON.stringify(backgroundHorizontal)
    )
      setBackground(backgroundHorizontal);
    else if (
      window.innerWidth < 950 &&
      JSON.stringify(background) !== JSON.stringify(backgroundVertical)
    )
      setBackground(backgroundVertical);
  });

  return (
    <div className="Home" style={{ backgroundImage: `url(${background})` }}>
      <div className="Home-overlay">
        <div className="Home-header">
          <img className="Home-logo" src={logo} alt="growing-resilience-logo" />
        </div>
        <Tabs
          defaultActiveKey="about-gr"
          id="Home-tab-bar"
          className="mb-0"
          justify
        >
          <Tab eventKey="about-gr" title="About GR">
            <About photoRight={photoRight} />
          </Tab>
          <Tab eventKey="guides" title="Guides">
            <Guide />
          </Tab>
          <Tab eventKey="podcast" title="Podcast">
            <Podcast />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
