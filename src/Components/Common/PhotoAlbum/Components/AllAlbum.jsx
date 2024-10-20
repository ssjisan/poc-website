import { Grid } from "@mui/material";
import AlbumCard from "./AlbumCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PhotoViewer from "../../PhotoViewer/PhotoViewer";

export default function AllAlbum() {
  const [latestAlbums, setLatestAlbums] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]);
  const location = useLocation();

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
      setLatestAlbums(limitedAlbums);
      setAllAlbums(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  const albumsToDisplay = location.pathname === "/" ? latestAlbums : allAlbums;
  

  return (
    <Grid container spacing={2} justifyContent="center">
      {albumsToDisplay.map((data) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AlbumCard data={data} />
          </Grid>
        );
      })}
    </Grid>
  );
}
