import { Button, Container, Stack, Typography } from "@mui/material";
import Chip from "../../Common/Chip";
import LatestAlbum from "./Components/LatestAlbum";

export default function LatestPhotoAlbums() {
  return (
    <Container sx={{ pt: "60px", pb: "60px" }}>
      <Stack gap="64px" alignItems="center">
        <Stack alignItems="center" gap="16px">
          <Chip title={"Photo Album"} />
          <Stack
            sx={{ width: "100%", maxWidth: "646px", textAlign: "center" }}
            gap="8px"
          >
            <Typography variant="h1">
              Memories and Milestones - A Visual Journey
            </Typography>
            <Typography color="text.secondary" variant="h6">
              A curated collection of images capturing patient stories, events,
              and milestones
            </Typography>
          </Stack>
        </Stack>
        <LatestAlbum/>
        <Button variant="contained">See All</Button>
      </Stack>
    </Container>
  );
}
