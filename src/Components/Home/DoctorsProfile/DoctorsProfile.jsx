import { Box, Container, Stack, Typography } from "@mui/material";
import Chip from "../../Common/Chip";
import ProfileCardDeck from "./Components/ProfileCardDeck";

export default function DoctorsProfile() {
  return (
    <Container sx={{ pt: "60px", pb: "60px" }}>
      <Stack gap="80px">
        <Stack alignItems="center" gap="16px">
          <Chip title={"Medical Professionals"} />
          <Stack sx={{ width: "100%", maxWidth: "790px",textAlign: "center" }} gap="8px">
            <Typography variant="h1">
              The Skilled Professionals Making A Difference At Mavis Clinic
            </Typography>
            <Typography color="text.secondary" variant="h6">
              Meet the Dedicated Team of Experts Committed to Providing
              Exceptional Care and Transforming Lives in Our Community Every Day
            </Typography>
          </Stack>
        </Stack>
        <ProfileCardDeck />
      </Stack>
    </Container>
  );
}
