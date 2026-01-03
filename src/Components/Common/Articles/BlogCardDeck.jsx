import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import BlogCard from "./BlogCard";
import { useNavigate, useLocation } from "react-router-dom";
import BlogCardSkeleton from "./BlogCardSkeleton";

export default function BlogCardDeck() {
  const [blogs, setBlogs] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    loadBlogs();
    loadTreatments();
  }, []);

  const loadBlogs = async () => {
    try {
      const { data } = await axios.get("/blogs");
      // Only take the first 3 items
      const latestVideos = data.slice(0, 3);
      setLatestBlogs(latestVideos);
      setBlogs(data);
      setLoading(false); // Stop loading after data fetch
    } catch (err) {
      toast.error("Problem loading blogs");
      setLoading(false); // Stop loading on error as well
    }
  };

  const loadTreatments = async () => {
    try {
      const { data: treatmentData } = await axios.get(
        `https://server.pediatricorthocare.com/guidance_list`
      );
      setTreatments(treatmentData);
    } catch (err) {
      toast.error("Can't load treatment lists");
    }
  };

  const blogToDisplay =
    location.pathname === "/" || location.pathname === "/parents_guidance"
      ? latestBlogs
      : blogs;

  const handlePreview = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {loading
          ? // Show skeletons while loading
            Array.from(new Array(3)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <BlogCardSkeleton />
              </Grid>
            ))
          : // Display actual blog cards once loaded
            blogToDisplay.map((data) => {
              const matchedTreatment = treatments.find(
                (treatment) => treatment._id === data.category
              );
              const categoryTitle = matchedTreatment
                ? matchedTreatment.title
                : "Unknown Category";

              const formattedDate = new Date(data.createdAt).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              );

              return (
                <Grid item xs={12} sm={6} md={4} lg={4} key={data._id}>
                  <BlogCard
                    data={data}
                    formattedDate={formattedDate}
                    categoryTitle={categoryTitle}
                    handlePreview={handlePreview}
                  />
                </Grid>
              );
            })}
      </Grid>
    </Container>
  );
}
