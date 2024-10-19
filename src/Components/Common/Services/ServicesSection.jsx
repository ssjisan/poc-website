import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Chip from "../Chip";
import ServiceCardDeck from "./Components/ServiceCardDeck";

export default function ServicesSection() {
  return (
    <Container sx={{ pt: "60px", pb: "60px" }}>
      <Stack gap="80px">
        <Stack alignItems="center" gap="16px">
          <Chip title={"Treatments"} />
          <Stack
            sx={{ width: "100%", maxWidth: "580px", textAlign: "center" }}
            gap="8px"
          >
            <Typography variant="h1">Pediatric Care</Typography>
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
