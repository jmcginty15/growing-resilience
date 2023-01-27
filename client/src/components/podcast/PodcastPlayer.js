import { formatDate } from "../../utils";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./PodcastPlayer.css";

const PodcastPlayer = ({ podcast }) => {
  const { title, subtitle, url, date, description } = podcast;
  const formattedDate = formatDate(new Date(date));

  return (
    <div className="PodcastPlayer">
      <h4 className="PodcastPlayer-title">{title}</h4>
      {subtitle && <h5 className="PodcastPlayer-subtitle">{subtitle}</h5>}
      <h6 className="PodcastPlayer-title-date">{formattedDate}</h6>
      {description && description !== subtitle && (
        <p className="PodcastPlayer-description">{description}</p>
      )}
      <AudioPlayer src={url} hasDefaultKeyBindings />
    </div>
  );
};

export default PodcastPlayer;
