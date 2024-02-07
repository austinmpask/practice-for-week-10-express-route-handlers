// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("request-body: " + JSON.stringify(req.body));
  next();
});

app.get("/artists", (req, res) => {
  const artists = getAllArtists();
  res.status(200).json(artists);
});

app.post("/artists", (req, res) => {
  const data = req.body;
  const added = addArtist(data);
  res.status(201).json(added);
});

// Your code here

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log("Server is listening on port", port));
} else {
  module.exports = app;
}
