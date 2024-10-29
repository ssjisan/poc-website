import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Chip from "../../Chip";
import { Pointer } from "../../../../assets/Icons";
import { Link } from "react-router-dom";

export default function LeftSection() {
  return (
    <Stack
      sx={{
        p: "40px",
        background: "rgba(32, 38, 91, 0.06)",
        borderRadius: "20px",
        height: "100%",
      }}
      gap="40px"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Stack gap="16px" justifyContent="flex-start" alignItems="flex-start">
        <Chip title={"Appointment"} />
        <Typography variant="h2">
          Find your doctor and make an appointment
        </Typography>
        <Stack gap="16px">
          <Stack direction="row" gap="8px">
            <Pointer color="#613C18" size={20} />
            <Typography variant="h6">
              Expert Doctors Across Specialties
            </Typography>
          </Stack>
          <Stack direction="row" gap="8px">
            <Pointer color="#613C18" size={20} />
            <Typography variant="h6">
              Flexible Scheduling for In-Person Visits
            </Typography>
          </Stack>
          <Stack direction="row" gap="8px">
            <Pointer color="#613C18" size={20} />
            <Typography variant="h6">
              Personalized Care Based on Your Needs
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Link to="/book_appointment" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Button variant="contained">Book an Appointment</Button>
      </Link>
    </Stack>
  );
}
