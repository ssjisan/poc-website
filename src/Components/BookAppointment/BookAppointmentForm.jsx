import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import InputFields from "./InputFields";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function BookAppointmentForm() {
  const forBelow390 = useMediaQuery("(max-width:390px)");
  const forBelow776 = useMediaQuery("(max-width:776px)");
  const forBelow1024 = useMediaQuery("(max-width:1240px)");

  const [profiles, setProfiles] = useState([]); // Profiles data
  useEffect(() => {
    loadProfiles();
  }, []);

  // Function to load profiles from the API
  const loadProfiles = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/doctors`
      );
      setProfiles(data); // Update profiles state
    } catch (err) {
      toast.error("Problem loading doctors profile");
    }
  };
  return (
    <Container sx={{ p: "80px 24px" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack
            gap="32px"
            alignItems="center"
            sx={{
              padding: "64px 24px",
              width: "100%",
              borderRadius: "20px",
              background: "#fff",
              boxShadow: "0px 8px 32px rgba(32, 38, 91, 0.16)",
            }}
          >
            <Stack gap="24px" sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "24px !important",
                  fontWeight: "700 !important",
                }}
              >
                Request an Appointment
              </Typography>
              <Typography color="text.secondary">
                Please use this form below in order to place an appointment to
                our doctor. We will send a sms with details of your serial, if
                appointment confirmed.
              </Typography>
            </Stack>
            <InputFields profiles={profiles}/>
            <Button variant="contained" sx={{ width: "210px" }}>
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
