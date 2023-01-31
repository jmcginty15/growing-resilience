import NavBar from "../nav/NavBar";
import About from "../about/About";
import Guide from "../guide/Guide";
import Podcast from "../podcast/Podcast";
import Footer from "../footer/Footer";
import { useRef, useState } from "react";
import backgroundHorizontal from "../../assets/home-background-horizontal.jpg";
import backgroundVertical from "../../assets/home-background-vertical.jpg";
import "./Container.css";

const Container = ({ page }) => {
  const topRef = useRef();
  const [background, setBackground] = useState(
    window.innerWidth >= 950 ? backgroundHorizontal : backgroundVertical
  );
  const [photoRight, setPhotoRight] = useState(window.innerWidth > 768);
  const body = document.querySelector("#Container");

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

  let Content = About;
  if (page === "guides") Content = Guide;
  else if (page === "podcast") Content = Podcast;

  const scrollToTop = () =>
    topRef.current.scrollIntoView({ block: "end", behavior: "instant" });

  return (
    <div
      className="Container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <NavBar scrollToTop={scrollToTop} />
      <div id="Container" className="Container-overlay">
        <div ref={topRef} />
        <Content photoRight={photoRight} />
        <Footer />
      </div>
    </div>
  );
};

export default Container;
