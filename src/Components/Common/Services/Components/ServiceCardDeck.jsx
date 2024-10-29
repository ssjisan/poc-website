import { Grid, Stack, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import toast from "react-hot-toast";
import axios from "axios";

export default function ServiceCardDeck() {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    loadTreatments();
  }, []);

  const loadTreatments = async () => {
    setLoading(true); // Set loading to true when starting to load data
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/treatments_list`
      );
      setTreatments(data);
    } catch (err) {
      toast.error("Can't load treatment lists");
    } finally {
      setLoading(false); // Set loading to false after loading data
    }
  };

  return (
    <Grid container spacing={2}>
      {loading ? ( // Conditional rendering based on loading state
        // Render skeletons while loading
        Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Stack
              sx={{
                borderRadius: "12px",
                p: "24px",
                border: "1px solid rgba(145, 158, 171, 0.24)",
                borderRadius: "16px",
                transition: "box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: "-24px 24px 72px -8px rgba(145, 158, 171, 0.24)",
                },
              }}
              gap="24px"
            >
              <Stack gap="16px">
                <Skeleton variant="text" width="80%" height={32} /> {/* Title Skeleton */}
                <Skeleton variant="text" width="100%" height={84} /> {/* Subtitle Skeleton */}
              </Stack>
              <Skeleton variant="text" width="60%" height={24} /> {/* See related articles Skeleton */}
            </Stack>
          </Grid>
        ))
      ) : (
        // Render actual treatment cards
        treatments.map((data) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
            <ServiceCard data={data} />
          </Grid>
        ))
      )}
    </Grid>
  );
}
