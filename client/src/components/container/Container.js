import NavBar from "../nav/NavBar";
import About from "../about/About";
import Guides from "../guides/Guides";
import Guide from "../guides/Guide";
import Podcast from "../podcast/Podcast";
import Footer from "../footer/Footer";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import backgroundHorizontal from "../../assets/home-background-horizontal.jpg";
import backgroundVertical from "../../assets/home-background-vertical.jpg";
import "./Container.css";

const Container = ({ page }) => {
  const params = useParams();
  const topRef = useRef();
  const bottomRef = useRef();
  const contactRef = useRef();
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

  const scrollToTop = (toContact, fromAbout, fromBottom = false) => {
    if (fromAbout)
      contactRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    else {
      if (fromBottom)
        bottomRef.current.scrollIntoView({ block: "end", behavior: "instant" });
      else topRef.current.scrollIntoView({ block: "end", behavior: "instant" });
      if (toContact)
        setTimeout(
          () =>
            contactRef.current.scrollIntoView({
              block: "center",
              behavior: "smooth",
            }),
          100
        );
    }
  };

  let Content = About;
  if (page === "podcast") Content = Podcast;
  else if (page === "guides") {
    if (params.guide) Content = Guide;
    else Content = Guides;
  }

  return (
    <div
      className="Container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <NavBar scrollToTop={scrollToTop} />
      <div id="Container" className="Container-overlay">
        <div ref={topRef} />
        <Content
          photoRight={photoRight}
          contactRef={contactRef}
          guide={params.guide}
        />
        <Footer scrollToTop={scrollToTop} />
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Container;
