const express = require("express");
const path = require("path");
const router = new express.Router();

router.get("/:fileName", async (req, res, next) => {
  try {
    res.download(
      path.join(__dirname, `../pdfGuides/${req.params.fileName}.pdf`)
    );
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
