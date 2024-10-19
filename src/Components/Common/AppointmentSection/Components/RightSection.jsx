import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

export default function RightSection() {
  const forBelow767 = useMediaQuery("(max-width:767px)")
  const ContainerSx = {
    backgroundImage: "url('/Appointment.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: forBelow767 ? "420px" :"520px",
    borderRadius: "20px",
    padding:"24px",
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"flex-end"
  };
  const AvatarSx = {
    width: "40px",
    height: "40px",
    border: "3px solid #FFF",
    background: "grey",
    borderRadius: "100%",
    position: "relative",
    overflow: "hidden",
  };
  return (
    <Box sx={ContainerSx}>
      <Box sx={{ borderRadius: "20px", p: "16px", width:"246px", height:"136px",background:"#fff" }}>
        <Stack
          direction="row"
          sx={{ position: "relative", alignItems: "center" }}
        >
          <Box
            sx={{
              ...AvatarSx,
              zIndex: 1,
            }}
          >
            <img
              src="/1.png"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              ...AvatarSx,
              left: "-10px", // Move 30px to the left
              zIndex: 2,
            }}
          >
            <img
              src="/2.png"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              ...AvatarSx,
              left: "-20px", // Move 60px to the left
              zIndex: 3,
            }}
          >
            <img
              src="/3.png"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              ...AvatarSx,
              left: "-30px", // Move 60px to the left
              zIndex: 3,
            }}
          >
            <img
              src="/3.png"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Stack>
        <Typography variant="h4">Expert Doctors Across Specialties</Typography>
      </Box>
    </Box>
  );
}
