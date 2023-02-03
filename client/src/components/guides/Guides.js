import GuideCard from "./GuideCard";
import beets from "../../assets/beets.jpg";
import footer from "../../assets/guides-footer-compressed.jpg";
import "./Guides.css";

const guides = [
  {
    title: "Quick Start Garden Guide",
    description: `No rototiller needed! A silage tarp, a broadfork, some hard work and patience will get you on your way. With extra effort, you can get a small portion of your long-term garden growing now.`,
    fileName: "/quick-start-garden-guide",
  },
];

const Guides = () => {
  return (
    <div className="Guides">
      <h1 className="Guides-title">Something to get you started.</h1>
      <div className="Guides-content">
        <div className="Guides-content-main">
          <div className="Guides-content-guides">
            <h2>Free guides to help you along the way.</h2>
            {guides.map((guide) => (
              <GuideCard key={guide.title} guide={guide} />
            ))}
            <h4 className="Guides-more">
              Check back here for more free guide offerings in the future.
            </h4>
          </div>
          <img className="Guides-photo" src={beets} alt="beets" />
        </div>
        <img className="Guides-footer" src={footer} alt="garden" />
      </div>
    </div>
  );
};

export default Guides;
