import { Box, Container, Grid } from "@mui/material";
import React from "react";
import LeftSection from "./Components/LeftSection";
import RightSection from "./Components/RightSection";

export default function AppointmentSection() {
  return (
    <Box sx={{ pt: "60px", pb: "60px" }}>
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
