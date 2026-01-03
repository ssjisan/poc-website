import { Grid, Skeleton, Stack } from "@mui/material";
import AlbumCard from "./AlbumCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function AllAlbum() {
  const [latestAlbums, setLatestAlbums] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const location = useLocation();

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    try {
      const { data } = await axios.get(
        `https://server.pediatricorthocare.com/albums`
      );
      // Only take the first 3 items
      const limitedAlbums = data.slice(0, 3);
      setLatestAlbums(limitedAlbums);
      setAllAlbums(data);
    } catch (err) {
      toast.error(`Albums can't load for ${err.message}`);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const albumsToDisplay = location.pathname === "/" ? latestAlbums : allAlbums;

  return (
    <Grid container spacing={2} justifyContent="center">
      {loading
        ? [0, 1, 2].map(
            (
              index // Always show three skeletons
            ) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <Skeleton
                  variant="rectangular"
                  height={220} // Adjust height to match AlbumCard
                  sx={{ borderRadius: "16px" }} // Match the style of AlbumCard
                />
                <Stack justifyContent="space-between" direction="row">
                  <Skeleton
                    variant="text"
                    sx={{ mt: "16px" }}
                    width="40%" // Adjust width as necessary
                  />
                  <Skeleton variant="text" width="40%" sx={{ mt: "16px" }} />
                </Stack>
              </Grid>
            )
          )
        : albumsToDisplay.map((data) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={data._id}>
              <AlbumCard data={data} />
            </Grid>
          ))}
    </Grid>
  );
}
