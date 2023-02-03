import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export const formatDate = (date) => {
  const dayNum = date.getDay();
  let day = null;
  switch (dayNum) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      break;
  }

  const monthNum = date.getMonth();
  let month = null;
  switch (monthNum) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      break;
  }

  return `${day} ${month} ${date.getDate()}, ${date.getFullYear()}`;
};

export const paginateEpisodes = (episodes) => {
  const paginatedEpisodes = [];
  let nextPage = [];

  let i = 0;
  let j = 0;

  while (i < episodes.length) {
    nextPage.push(episodes[i]);

    i++;
    j++;

    if (j === 5) {
      paginatedEpisodes.push(nextPage);
      nextPage = [];
      j = 0;
    }
  }

  if (nextPage.length) paginatedEpisodes.push(nextPage);

  return paginatedEpisodes;
};

export const getEmailBody = (guideTitle) => {
  return encodeURIComponent(
    `Hi Todd,\n\nI'd like to request ${guideTitle} as a PDF.\n\nThanks!`
  );
};

export const getEmailSubject = (guideTitle) => {
  return encodeURIComponent(`Request for ${guideTitle}`);
};
