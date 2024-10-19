import { Grid } from "@mui/material";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceCardDeck() {
  
  return (
    <Grid container spacing={2}>
      <ServiceCard />
    </Grid>
  );
}
