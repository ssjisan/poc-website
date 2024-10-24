import { Button, Container, Stack, Typography } from "@mui/material";
import Chip from "../Chip";
import AllAlbum from "./Components/AllAlbum";
import { Link, useLocation } from "react-router-dom";

export default function PhotoAlbums() {
  const location = useLocation();
  return (
    <Container
      sx={{
        pt: location.pathname === "/gallery" ? "120px" : "60px",
        pb: "60px",
      }}
    >
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
        <AllAlbum />
        {location.pathname === "/" && (
          <Link to="/gallery">
            <Button variant="contained">See All</Button>
          </Link>
        )}
      </Stack>
    </Container>
  );
}
