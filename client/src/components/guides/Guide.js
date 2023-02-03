import QuickStart from "./pages/QuickStart";
import "./Guide.css";

const Guide = ({ photoRight, guide }) => {
  let Content = QuickStart;
  let guideTitle = "Quick Start Garden Guide";

  return (
    <div className="Guide">
      <Content photoRight={photoRight} guideTitle={guideTitle} />
    </div>
  );
};

export default Guide;
