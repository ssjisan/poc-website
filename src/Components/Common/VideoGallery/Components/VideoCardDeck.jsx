import { Grid, Skeleton } from "@mui/material";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

export default function VideoCardDeck() {
  const [latestVideos, setLatestVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [allExerciseVideos, setAllExerciseVideos] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/exercise_video") {
      loadExerciseVideos();
    } else {
      loadVideos();
    }
  }, [location.pathname]);

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
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const loadExerciseVideos = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/list-exercise-videos`
      );
      setAllExerciseVideos(data);
    } catch (err) {
      toast.error("Problem loading exercise videos");
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const albumsToDisplay =
    location.pathname === "/"
      ? latestVideos
      : location.pathname === "/exercise_video"
      ? allExerciseVideos
      : allVideos;

  const getVideoId = (url) => {
    const videoIdRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|(?:\S+\?v=))|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null; // Return video ID or null
  };

  return (
    <Grid container rowSpacing={4} columnSpacing={2} justifyContent="center">
      {loading
        ? [0, 1, 2].map((index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Skeleton
                variant="rectangular"
                height={220}
                sx={{ borderRadius: "16px" }} // Match the style of VideoCard
              />
              <Skeleton
                variant="text"
                sx={{ mt: "16px" }}
                width="80%" // Adjust width as necessary
              />
              <Skeleton variant="text" width="60%" />
            </Grid>
          ))
        : albumsToDisplay.map((data) => {
            const videoId = getVideoId(data.url); // Get video ID from URL
            const thumb =
              data.videoType === "google-drive"
                ? data.thumbnail[0]?.url
                : `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} key={data._id}>
                <VideoCard data={data} thumb={thumb} />
              </Grid>
            );
          })}
    </Grid>
  );
}
