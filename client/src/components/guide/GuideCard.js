import "./GuideCard.css";

const GuideCard = ({ guide }) => {
  return (
    <div className="GuideCard">
      <h4>{guide.title}</h4>
      <p className="GuideCard-text">{guide.description}</p>
      <a className="GuideCard-link" href={guide.link} download>
        Download the PDF
      </a>
    </div>
  );
};

export default GuideCard;
