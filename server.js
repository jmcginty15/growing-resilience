require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const podcastRoutes = require("./routes/podcastRoutes");

app.use(cors({ origin: "*" }));

const CLIENT_ROUTES = ["/", "/about", "/guides", "/podcast"];
app.use((req, res, next) => {
  if (CLIENT_ROUTES.includes(req.path)) {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
    res.sendFile(path.join(__dirname, "./client/build", "index.html"));
  } else {
    next();
  }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));
app.use("/episodes", podcastRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
