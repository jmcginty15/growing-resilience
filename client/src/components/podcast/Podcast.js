import { useState, useEffect } from "react";
import { BASE_URL } from "../../config";
import logo from "../../assets/podcast-logo.jpg";
import "./Podcast.css";
import SubscriptionLink from "./SubscriptionLink";
import axios from "axios";
import PodcastPlayer from "./PodcastPlayer";

const subscriptionLinks = [
  {
    name: "Amazon",
    link: "https://www.amazon.com/music/player/podcasts/5d711288-a91c-47e1-b265-89fb9f6eb8ef/growing-resilience",
    logo: null,
  },
  {
    name: "Google",
    link: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5saWJzeW4uY29tLzQxMTUwOS9yc3M",
    logo: null,
  },
  {
    name: "Audacy",
    link: "https://www.audacy.com/podcast/growing-resilience-7e582",
    logo: null,
  },
  {
    name: "Deezer",
    link: "https://www.deezer.com/us/show/3612557",
    logo: null,
  },
  {
    name: "Gaana",
    link: "https://gaana.com/podcast/growing-resilience-season-1",
    logo: null,
  },
  {
    name: "Apple",
    link: "https://podcasts.apple.com/us/podcast/growing-resilience/id1619817801",
    logo: null,
  },
  {
    name: "JioSaavn",
    link: "https://www.jiosaavn.com/shows/growing-resilience/32/kXKz8eu-L9E_",
    logo: null,
  },
  {
    name: "Libsyn",
    link: "https://sites.libsyn.com/GrowingResilience",
    logo: null,
  },
  {
    name: "Player.fm",
    link: "https://player.fm/series/growing-resilience",
    logo: null,
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/show/2spShcGyxh6gX5YXDaoezZ",
    logo: null,
  },
];

const getEpisodes = async () => {
  const res = await axios.get(`${BASE_URL}/podcast`);
  return res.data;
};

const Podcast = () => {
  const [episodes, setEpisodes] = useState(null);
  const [searchTerms, setSearchTerms] = useState(null);

  useEffect(() => {
    getEpisodes().then((data) => setEpisodes(data));
  }, [searchTerms]);

  return (
    <div className="Podcast">
      <div className="Podcast-header">
        <h3>Subscribe to the Growing Resilience Podcast:</h3>
        <div className="Podcast-header-content">
          {subscriptionLinks.map((link) => (
            <SubscriptionLink
              key={link.name}
              name={link.name}
              link={link.link}
              logo={link.logo}
            />
          ))}
        </div>
      </div>
      <div className="Podcast-content">
        <div className="Podcast-content-episodes">
          {episodes &&
            episodes.map((episode) => (
              <PodcastPlayer key={episode.title} podcast={episode} />
            ))}
        </div>
        <img className="Podcast-photo" src={logo} alt="peppers" />
      </div>
    </div>
  );
};

export default Podcast;
