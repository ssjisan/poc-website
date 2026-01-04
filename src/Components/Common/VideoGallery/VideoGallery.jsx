import { Button, Container, Stack, Typography } from "@mui/material";
import Chip from "../Chip";
import { Link, useLocation } from "react-router-dom";
import VideoCardDeck from "./Components/VideoCardDeck";

export default function VideoGallery() {
  const location = useLocation();

  return (
    <Container
      sx={{
        pt: location.pathname === "/exercise_video" ? "120px" : "60px",
        pb: "60px",
      }}
    >
      <Stack gap="64px" alignItems="center">
        <Stack alignItems="center" gap="16px">
          <Chip
            title={
              location.pathname === "/exercise_video"
                ? "Exercise Video"
                : "Educational Information"
            }
          />
          <Stack
            sx={{ width: "100%", maxWidth: "646px", textAlign: "center" }}
            gap="8px"
          >
            {location.pathname === "/exercise_video" ? (
              <Typography variant="h3">Exercise, the key of cure</Typography>
            ) : (
              <Typography variant="h3">A-Z for children diseases</Typography>
            )}
            {location.pathname === "/exercise_video" ? (
              <Typography color="text.secondary" variant="h6">
                Explore guided exercise videos designed to enhance recovery and
                support your treatment journey
              </Typography>
            ) : (
              <Typography color="text.secondary" variant="h6">
                Informative videos to understand common childhood diseases and
                their management
              </Typography>
            )}
          </Stack>
        </Stack>
        <VideoCardDeck />
        {location.pathname === "/" && (
          <Link
            to="/gallery"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Button variant="contained">See All</Button>
          </Link>
        )}
      </Stack>
    </Container>
  );
}
