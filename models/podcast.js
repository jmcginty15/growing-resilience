const axios = require("axios");
const { cleanUpTitle, cleanUpCData, cleanUpPTags } = require("../utils");

class Podcast {
  static async getFromRssFeed(searchTerms) {
    const rssFeed = (await axios.get(process.env.RSS_URL)).data;
    let itemIndex = rssFeed.indexOf("<item>");
    const episodes = [];

    while (itemIndex > 0) {
      itemIndex += 6;
      const nextEpisode = {};

      const titleStartIndex = rssFeed.indexOf("<title>", itemIndex) + 7;
      const titleEndIndex = rssFeed.indexOf("</title>", titleStartIndex);
      nextEpisode.title = cleanUpTitle(
        rssFeed.slice(titleStartIndex, titleEndIndex)
      );

      //   nextEpisode.number = nextEpisode.title.slice(
      //     1,
      //     nextEpisode.title.indexOf(" ")
      //   );

      const dateStartIndex = rssFeed.indexOf("<pubDate>", titleEndIndex) + 9;
      const dateEndIndex = rssFeed.indexOf("</pubDate>", dateStartIndex);
      nextEpisode.date = rssFeed.slice(dateStartIndex, dateEndIndex);

      const descriptionStartIndex =
        rssFeed.indexOf("<description>", dateEndIndex) + 13;
      const descriptionEndIndex = rssFeed.indexOf(
        "</description>",
        descriptionStartIndex
      );
      nextEpisode.description = cleanUpPTags(
        cleanUpCData(rssFeed.slice(descriptionStartIndex, descriptionEndIndex))
      );

      const urlStartIndex = rssFeed.indexOf('url="', descriptionEndIndex) + 5;
      const urlEndIndex = rssFeed.indexOf(".mp3", urlStartIndex) + 4;
      nextEpisode.url = cleanUpCData(rssFeed.slice(urlStartIndex, urlEndIndex));

      const durationStartIndex =
        rssFeed.indexOf("<itunes:duration>", urlEndIndex) + 17;
      const durationEndIndex = rssFeed.indexOf(
        "</itunes:duration>",
        durationStartIndex
      );
      nextEpisode.duration = rssFeed.slice(
        durationStartIndex,
        durationEndIndex
      );

      const keywordStartIndex =
        rssFeed.indexOf("<itunes:keywords>", durationEndIndex) + 17;
      const keywordEndIndex = rssFeed.indexOf(
        "</itunes:keywords>",
        keywordStartIndex
      );
      nextEpisode.keywords = rssFeed
        .slice(keywordStartIndex, keywordEndIndex)
        .split(",");

      const subtitleStartIndex =
        rssFeed.indexOf("<itunes:subtitle>", keywordEndIndex) + 17;
      const subtitleEndIndex = rssFeed.indexOf(
        "</itunes:subtitle>",
        subtitleStartIndex
      );
      nextEpisode.subtitle = cleanUpCData(
        rssFeed.slice(subtitleStartIndex, subtitleEndIndex)
      );

      itemIndex = rssFeed.indexOf("<item>", itemIndex);

      episodes.push(nextEpisode);
    }

    const filteredEpisodes = [];
    if (searchTerms) {
      searchTerms = searchTerms.split("+");

      for (let episode of episodes)
        for (let term of searchTerms) {
          if (
            episode.title.indexOf(term) !== -1 ||
            episode.description.indexOf(term) !== -1
          ) {
            filteredEpisodes.push(episode);
            break;
          }

          let matched = false;
          for (let keyword of episode.keywords)
            if (keyword.indexOf(term) !== -1) {
              filteredEpisodes.push(episode);
              matched = true;
              break;
            }

          if (matched) break;
        }
    }

    return searchTerms ? filteredEpisodes : episodes;
  }
}

module.exports = Podcast;
