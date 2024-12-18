import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Chip from "../Chip";
import ServiceCardDeck from "./Components/ServiceCardDeck";
import { useLocation } from "react-router-dom";

export default function ServicesSection() {
  const location = useLocation(); // Get current location

  return (
    <Container sx={{ pt: location.pathname === "/parents_guidance" ? "120px" : "60px", pb: "60px" }}>
      <Stack gap="80px">
        <Stack alignItems="center" gap="16px">
          <Chip title={"Parents guidance"} />
          <Stack
            sx={{ width: "100%", maxWidth: "880px", textAlign: "center" }}
            gap="8px"
          >
            <Typography variant="h1">Get Moving With Healthy Bones & Healthy Children</Typography>
            <Typography color="text.secondary" variant="h6">
              Nurturing Healthy Futures: Comprehensive Pediatric Care for Every
              Stage of Childhood
            </Typography>
          </Stack>
        </Stack>
        <ServiceCardDeck />
      </Stack>
    </Container>
  );
}
