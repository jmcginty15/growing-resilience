const cleanUpTitle = (title) => {
  title = title.replace(".", "").replace(/\s+/g, " ").trim();
  if (title[0] !== "#") title = `#${title}`;
  return title;
};

const cleanUpCData = (str) => {
  return str.replace("<![CDATA[", "").replace("]]>", "").trim();
};

const cleanUpPTags = (str) => {
  return str.replace("<p>", "").replace("</p>", "").trim();
};

module.exports = { cleanUpTitle, cleanUpCData, cleanUpPTags };
