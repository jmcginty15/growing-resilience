const cleanUpTitle = (title) => {
  return title.replace(".", "").replace(/\s+/g, " ").trim();
};

const cleanUpCData = (str) => {
  return str.replace("<![CDATA[", "").replace("]]>", "").trim();
};

const cleanUpPTags = (str) => {
  return str.replace("<p>", "").replace("</p>", "").trim();
};

module.exports = { cleanUpTitle, cleanUpCData, cleanUpPTags };
