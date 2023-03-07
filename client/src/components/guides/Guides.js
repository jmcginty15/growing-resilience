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
  {
    title: "Guide to Woody Perennial Placement, Preparation, and Planting",
    description:
      "We all want to get our perennials planted as soon as possible because they may take years to produce a crop. The catch is that you need to know your land well to place these long lived plants in the best location. Be as patient as you can be in choosing a spot, and only plant when you are as reasonably sure as you can be that you have made a sound decision.",
    fileName: "/guide-to-woody-perennial-placement-preparation-and-planting",
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
