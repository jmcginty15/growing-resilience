import { GUIDE_EMAIL } from "../../config";
import { getEmailBody, getEmailSubject } from "../../utils";
import { useNavigate } from "react-router-dom";
import "./GuideCard.css";

const GuideCard = ({ guide }) => {
  const navigate = useNavigate();

  return (
    <div className="GuideCard">
      <h4>
        <span
        // className="GuideCard-title"
        // onClick={() => navigate(`/guides${guide.fileName}`, false)}
        >
          {guide.title}
        </span>
      </h4>
      <p className="GuideCard-text">{guide.description}</p>
      <a
        className="GuideCard-link"
        href={`mailto:${GUIDE_EMAIL}?subject=${getEmailSubject(
          guide.title
        )}&body=${getEmailBody(guide.title)}`}
      >
        Request the PDF
      </a>
    </div>
  );
};

export default GuideCard;
