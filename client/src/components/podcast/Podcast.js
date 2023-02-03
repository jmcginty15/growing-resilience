import { useState, useEffect } from "react";
import { BASE_URL } from "../../config";
import axios from "axios";
import SubscriptionLink from "./SubscriptionLink";
import PodcastPlayer from "./PodcastPlayer";
import PageNavigator from "./PageNavigator";
import { paginateEpisodes } from "../../utils";
import logo from "../../assets/podcast-logo.jpg";
import footer from "../../assets/tomatoes-compressed.jpg";
import "./Podcast.css";

const subscriptionLinks = [
  {
    name: "Amazon Music/Audible",
    link: "https://www.amazon.com/music/player/podcasts/5d711288-a91c-47e1-b265-89fb9f6eb8ef/growing-resilience",
    logo: null,
  },
  {
    name: "Google Podcasts",
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
    name: "Apple Podcasts",
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

const mockEpisodes = [
  {
    date: "Thu, 26 Jan 2023 17:18:54 +0000",
    description: "",
    duration: "01:48:11",
    keywords: ["gardening", "compost", "organic"],
    subtitle: "",
    title: "#10 Episode 10",
    url: "https://episode10.com",
  },
  {
    date: "Thu, 26 Jan 2023 17:18:54 +0000",
    description: "",
    duration: "01:48:11",
    keywords: ["gardening", "compost", "organic"],
    subtitle: "",
    title: "#9 Episode 9",
    url: "https://episode10.com",
  },
  {
    date: "Thu, 26 Jan 2023 17:18:54 +0000",
    description: "",
    duration: "01:48:11",
    keywords: ["gardening", "compost", "organic"],
    subtitle: "",
    title: "#8 Episode 8",
    url: "https://episode10.com",
  },
  {
    date: "Thu, 26 Jan 2023 17:18:54 +0000",
    description: "",
    duration: "01:48:11",
    keywords: ["gardening", "compost", "organic"],
    subtitle: "",
    title: "#7 Episode 7",
    url: "https://episode10.com",
  },
  {
    date: "Thu, 26 Jan 2023 17:18:54 +0000",
    description: "",
    duration: "01:48:11",
    keywords: ["gardening", "compost", "organic"],
    subtitle: "",
    title: "#6 Episode 6",
    url: "https://episode10.com",
  },
  {
    date: "Thu, 26 Jan 2023 17:18:54 +0000",
    description: "",
    duration: "01:48:11",
    keywords: ["gardening", "compost", "organic"],
    subtitle: "",
    title: "#5 Episode 5",
    url: "https://episode10.com",
  },
  {
    date: "Thu, 26 Jan 2023 17:18:54 +0000",
    description: "",
    duration: "01:48:11",
    keywords: ["gardening", "compost", "organic"],
    subtitle: "",
    title: "#4 Episode 4",
    url: "https://episode10.com",
  },
  {
    date: "Thu, 26 Jan 2023 17:18:54 +0000",
    description: "",
    duration: "01:48:11",
    keywords: ["gardening", "compost", "organic"],
    subtitle: "",
    title: "#3 Episode 3",
    url: "https://episode10.com",
  },
  {
    date: "Thu, 26 Jan 2023 17:18:54 +0000",
    description: "",
    duration: "01:48:11",
    keywords: ["gardening", "compost", "organic"],
    subtitle: "",
    title: "#2 Episode 2",
    url: "https://episode10.com",
  },
  {
    date: "Thu, 26 Jan 2023 17:18:54 +0000",
    description: "",
    duration: "01:48:11",
    keywords: ["gardening", "compost", "organic"],
    subtitle: "",
    title: "#1 Episode 1",
    url: "https://episode10.com",
  },
];

const getEpisodes = async (searchTerms = null) => {
  let url = `${BASE_URL}/episodes`;
  if (searchTerms) {
    const terms = searchTerms.split(" ");
    searchTerms = [];
    for (let term of terms) if (term !== "") searchTerms.push(term);
    url += `?searchTerms=${encodeURIComponent(searchTerms.join(" "))}`;
  }
  const res = await axios.get(url);
  return res.data;

  // return mockEpisodes;
};

const Podcast = ({ photoRight }) => {
  const [episodes, setEpisodes] = useState(null);
  const [paginatedEpisodes, setPaginatedEpisodes] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerms, setSearchTerms] = useState("");
  const [searching, setSearching] = useState(false);
  const handleChange = (evt) => setSearchTerms(evt.target.value);

  useEffect(() => {
    getEpisodes().then((data) => {
      setEpisodes(data);
      resetPaginatedEpisodes(data);
    });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchTerms) {
      setSearching(true);
      getEpisodes(searchTerms).then((data) => {
        setSearching(false);
        setEpisodes(data);
        resetPaginatedEpisodes(data);
      });
    }
  };

  const handleClear = () => {
    if (searchTerms) {
      setSearching(true);
      getEpisodes().then((data) => {
        setSearching(false);
        setEpisodes(data);
        resetPaginatedEpisodes(data);
      });
      setSearchTerms("");
    }
  };

  const resetPaginatedEpisodes = (episodes) => {
    setPaginatedEpisodes(paginateEpisodes(episodes));
    setCurrentPage(0);
  };

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const firstPage = () => setCurrentPage(0);
  const lastPage = () => setCurrentPage(paginatedEpisodes.length - 1);

  const handleNavClick = (buttonId) => {
    switch (buttonId) {
      case "first":
        firstPage();
        break;
      case "prev":
        prevPage();
        break;
      case "next":
        nextPage();
        break;
      case "last":
        lastPage();
        break;
    }
  };

  return (
    <div className="Podcast">
      <div className="Podcast-header">
        <h3 className="Podcast-title">
          Subscribe to the Growing Resilience Podcast:
        </h3>
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
      <div className="Podcast-content-main">
        <div className="Podcast-content">
          <div className="Podcast-content-episodes">
            {!photoRight && (
              <img
                className="Podcast-photo"
                src={logo}
                alt="growing-resilience-podcast"
              />
            )}
            <form className="Podcast-search-form" onSubmit={handleSubmit}>
              <input
                className="Podcast-search-input"
                type="text"
                placeholder="Search by episode title, description, or tags"
                autoComplete="off"
                onChange={handleChange}
                value={searchTerms}
              />
              {searching ? (
                <div className="Podcast-search-indicator">Searching...</div>
              ) : (
                <div className="Podcast-search-button-container">
                  <button
                    className="Podcast-search-button Podcast-search-button-left"
                    type="submit"
                  >
                    Search
                  </button>
                  <button
                    className="Podcast-search-button Podcast-search-button-right"
                    type="button"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              )}
            </form>
            {episodes && (
              <div>
                {episodes.length ? (
                  <div>
                    {paginatedEpisodes.length === 1 ? (
                      <div>
                        {episodes.map((episode) => (
                          <PodcastPlayer
                            key={episode.title}
                            podcast={episode}
                          />
                        ))}
                      </div>
                    ) : (
                      <div>
                        <PageNavigator
                          currentPage={currentPage}
                          handleNavClick={handleNavClick}
                          maxPage={paginatedEpisodes.length - 1}
                        />
                        {paginatedEpisodes[currentPage].map((episode) => (
                          <PodcastPlayer
                            key={episode.title}
                            podcast={episode}
                          />
                        ))}
                        <PageNavigator
                          currentPage={currentPage}
                          handleNavClick={handleNavClick}
                          maxPage={paginatedEpisodes.length - 1}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="Podcast-no-episodes">No episodes found</div>
                )}
              </div>
            )}
          </div>
          {photoRight && (
            <img
              className="Podcast-photo"
              src={logo}
              alt="growing-resilience-podcast"
            />
          )}
        </div>
        <img className="Podcast-footer" src={footer} alt="tomatoes" />
      </div>
    </div>
  );
};

export default Podcast;
