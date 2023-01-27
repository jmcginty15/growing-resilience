const express = require("express");
const path = require("path");
const router = new express.Router();
const Podcast = require("../models/podcast");

router.get("/", async (req, res, next) => {
  try {
    return res.json(await Podcast.getFromRssFeed(req.query.searchTerms));
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
