import leaf from "../../assets/leaf.jpg";
import "./Guide.css";
import GuideCard from "./GuideCard";

const guides = [
  {
    title: "Beginners' Guide",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
    link: "/beginner",
  },
  {
    title: "Intermediate Guide",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
    link: "/intermediate",
  },
  {
    title: "Advanced Guide",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
    link: "/advanced",
  },
];

const Guide = ({ photoRight }) => {
  return (
    <div className="Guide">
      <h1 className="About-title">Something to get you started.</h1>
      <div className="About-content">
        {photoRight && <img className="About-photo" src={leaf} alt="peppers" />}
        <h2>Downloadable guides to help you along the way.</h2>
        {guides.map((guide) => (
          <GuideCard key={guide.title} guide={guide} />
        ))}
        {!photoRight && (
          <img className="About-photo" src={leaf} alt="peppers" />
        )}
      </div>
    </div>
  );
};

export default Guide;
