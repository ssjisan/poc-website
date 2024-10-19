import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function ServiceCard() {
  const services = [
    {
      id: 1,
      title: "Club Foot",
      subtitle:
        "Clubfoot refers to a condition in which a newborn's foot or feet appear to be rotated internally at the ankle.",
    },
    {
      id: 2,
      title: "Knock Knee and Bow Knee",
      subtitle:
        "Knock-knee is when the knees are close together and space between the ankles is increased.",
    },
    {
      id: 3,
      title: "Dysplasia of Hip",
      subtitle:
        "Hip dysplasia is the medical term for a hip socket that doesn't fully cover the ball portion of the upper thigh bone.",
    },
    {
      id: 4,
      title: "Cerebral Palsy",
      subtitle:
        "Cerebral palsy (CP) is a group of disorders that affect a person's ability to move and maintain balance and posture.",
    },
    {
      id: 5,
      title: "Growth Plate Injury",
      subtitle:
        "The growth plates around the knee are more sensitive to injury. A growth plate fracture at the knee can lead to long-term complications.",
    },
    {
      id: 6,
      title: "Musculoskeletal Infection",
      subtitle:
        "Musculoskeletal injury refers to damage to muscular or skeletal systems, which is usually due to a strenuous activity or trauma.",
    },
    {
      id: 7,
      title: "Brachial Plexus Birth Palsy",
      subtitle:
        "Palsy means weakness, and brachial plexus birth palsy causes arm weakness and loss of motion due to nerve injury during childbirth.",
    },
    {
      id: 8,
      title: "Pediatric Trauma, Tumor",
      subtitle:
        "Trauma in children, also known as pediatric trauma, refers to a traumatic injury that happens to an infant or child, which can include tumors.",
    },
  ];
  return (
    <>
      {services.map((data) => {
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
              gap="16px"
            >
              <Typography variant="h6">{data.title}</Typography>
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
                {data.subtitle}
              </Typography>
            </Stack>
          </Grid>
        );
      })}
    </>
  );
}
