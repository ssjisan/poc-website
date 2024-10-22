import { Box, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ServiceCard() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    loadTreatments();
  }, []);

  const loadTreatments = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/treatments_list`
      );
      setTreatments(data);
    } catch (err) {
      toast.error("Can't load treatment lists");
    }
  };
  
  return (
    <>
      {treatments.map((data) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
            <Stack
              sx={{
                borderRadius: "12px",
                p: "24px",
                border: "1px solid rgba(145, 158, 171, 0.24)",
                borderRadius: "16px",
                transition: "box-shadow 0.3s ease", // Smooth transition for the shadow effect
                "&:hover": {
                  boxShadow: "-24px 24px 72px -8px rgba(145, 158, 171, 0.24)", // Box shadow on hover
                },
              }}
              gap="24px"
            >
              <Stack gap="16px">
              <Typography variant="h5">{data.title}</Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  height: "84px",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 4, // Limits text to 4 lines before truncating (adjust based on line height)
                  textOverflow: "ellipsis",
                }}
              >
                {data.subTitle}
              </Typography>
              </Stack>
              <Typography sx={{textDecoration:"underline", cursor:"pointer"}} color="primary">
              See related articles
              </Typography>
            </Stack>
          </Grid>
        );
      })}
    </>
  );
}
