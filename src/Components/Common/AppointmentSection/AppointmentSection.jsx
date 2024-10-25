import { Box, Container, Grid } from "@mui/material";
import React from "react";
import LeftSection from "./Components/LeftSection";
import RightSection from "./Components/RightSection";
import { useLocation } from "react-router-dom";

export default function AppointmentSection() {
  const location = useLocation(); // Get current location

  
  return (
    <Box sx={{ pt: location.pathname === "/treatments" ? "120px" : "60px", pb: "60px" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LeftSection />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <RightSection />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
