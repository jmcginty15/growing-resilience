import "./SubscriptionLink.css";

const SubscriptionLink = ({ name, link, logo }) => {
  return (
    <div className="SubscriptionLink">
      <a
        className="SubscriptionLink-link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
    </div>
  );
};

export default SubscriptionLink;
