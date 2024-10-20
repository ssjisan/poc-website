import { Grid } from "@mui/material";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function VideoCardDeck() {
  const [latestVideos, setLatestVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

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
      setLatestVideos(latestVideos);
      setAllVideos(data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const albumsToDisplay = location.pathname === "/" ? latestVideos : allVideos;

  const getVideoId = (url) => {
    const videoIdRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|(?:\S+\?v=))|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null; // Return video ID or null
  };
  return (
    <Grid container rowSpacing={4} columnSpacing={2} justifyContent="center">
      {albumsToDisplay.map((data) => {
        const videoId = getVideoId(data.url); // Get video ID
        const thumb = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
        return (
          <Grid item xs={12} sm={6} md={6} lg={4} key={data._id}>
            <VideoCard data={data} thumb={thumb} />
          </Grid>
        );
      })}
    </Grid>
  );
}
