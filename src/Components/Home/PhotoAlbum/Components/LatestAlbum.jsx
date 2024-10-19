import { Grid } from "@mui/material";
import AlbumCard from "./AlbumCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function LatestAlbum() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/albums`
      );
      // Only take the first 3 items
      const limitedAlbums = data.slice(0, 3);
      setAlbums(limitedAlbums);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <AlbumCard albums={albums} />
    </Grid>
  );
}
