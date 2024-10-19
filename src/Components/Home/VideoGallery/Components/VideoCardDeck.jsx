import { Grid } from "@mui/material";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function VideoCardDeck() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/list_videos`
      );
      // Only take the first 3 items
      const latestVideos = data.slice(0, 3);
      setVideos(latestVideos);
    } catch (err) {
      toast.error(err.message);
    }
  };
  console.log(videos);
  
  return (
    <Grid container spacing={2} justifyContent="center">
      <VideoCard videos={videos} />
    </Grid>
  );
}
