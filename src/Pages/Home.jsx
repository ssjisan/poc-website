import AppointmentSection from "../Components/Common/AppointmentSection/AppointmentSection";
import PhotoAlbums from "../Components/Common/PhotoAlbum/PhotoAlbums";
import ServicesSection from "../Components/Common/Services/ServicesSection";
import DoctorsProfile from "../Components/Home/DoctorsProfile/DoctorsProfile";
import HeroSection from "../Components/Home/HeroSection";
import LatestVideos from "../Components/Common/VideoGallery/VideoGallery";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import BlogSection from "../Components/Common/Articles/BlogSection";
import { Box, Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [allVideos, setAllVideos] = useState([]);
  const [skip, setSkip] = useState(0); // Track how many videos to skip
  const [hasMore, setHasMore] = useState(true); // Whether there are more videos to load
  const [loading, setLoading] = useState(false); // Track loading state
  const limit = 1; // Number of videos to load per request

  useEffect(() => {
    loadVideos(true); // Initial load
  }, []);

  const loadVideos = async (initial = false) => {
    if (loading) return; // Prevent multiple requests
    if (!hasMore && !initial) return; // Stop if no more videos

    try {
      setLoading(true);
      // Call the server with limit and skip as query parameters
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/videos`,
        {
          params: { limit, skip: initial ? 0 : skip },
        }
      );

      if (initial) {
        // If it's the initial load, replace the videos
        setAllVideos(data.videos);
        setSkip(limit); // Reset skip
      } else {
        // Otherwise, append the new videos
        setAllVideos((prev) => [...prev, ...data.videos]);
        setSkip((prev) => prev + limit); // Increment skip
      }

      setHasMore(data.hasMore); // Update hasMore based on the server response
    } catch (err) {
      toast.error("Error loading videos");
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  return (
    <>
      <Navbar />
      <HeroSection />
      <DoctorsProfile />
      <ServicesSection />
      <PhotoAlbums />
      <AppointmentSection />
      <LatestVideos />
      <BlogSection />
      {/* <Container>
      <Stack>
        total Data: {allVideos.length}
        {hasMore && !loading && (
        <button onClick={() => loadVideos()}>Load More</button>
      )}
      </Stack>
      </Container> */}
      <Footer />
    </>
  );
}
