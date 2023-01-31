import "./Landing.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import backgroundHorizontal from "../../assets/landing-background-horizontal.jpg";
import backgroundVertical from "../../assets/landing-background-vertical.jpg";
import logoHorizontal from "../../assets/landing-logo-permaculture.png";
import logoVertical from "../../assets/landing-logo.png";

const Landing = () => {
  const navigate = useNavigate();
  const [background, setBackground] = useState(
    window.innerWidth >= 950 ? backgroundHorizontal : backgroundVertical
  );
  const [logo, setLogo] = useState(
    window.innerWidth >= 950 ? logoHorizontal : logoVertical
  );
  const [photoRight, setPhotoRight] = useState(window.innerWidth > 768);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && !photoRight) setPhotoRight(true);
    else if (window.innerWidth <= 768 && photoRight) setPhotoRight(false);

    if (window.innerWidth >= 950) {
      if (JSON.stringify(background) !== JSON.stringify(backgroundHorizontal))
        setBackground(backgroundHorizontal);
      if (JSON.stringify(logo) !== JSON.stringify(logoHorizontal))
        setLogo(logoHorizontal);
    } else {
      if (JSON.stringify(background) !== JSON.stringify(backgroundVertical))
        setBackground(backgroundVertical);
      if (JSON.stringify(logo) !== JSON.stringify(logoVertical))
        setLogo(logoVertical);
    }
  });

  return (
    <div className="Landing" style={{ backgroundImage: `url(${background})` }}>
      <div className="Landing-overlay">
        <img
          className="Landing-logo"
          src={logo}
          alt="growing-resilience-logo"
        />
        <div className="Landing-content Landing-text">
          <h2>Growing your own food is easier than you may think.</h2>
          <h2>Today is the day to begin.</h2>
        </div>
        <div className="Landing-content Landing-button-container">
          <button className="Landing-button" onClick={() => navigate("/about")}>
            Find out how {`->`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
