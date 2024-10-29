import { Button, Container, Stack, Typography } from "@mui/material";
import Chip from "../Chip";
import { Link, useLocation } from "react-router-dom";
import BlogCardDeck from "./BlogCardDeck";

export default function BlogSection() {
  const location = useLocation();

  return (
    <Container
      sx={{
        pt: location.pathname === "/blog" ? "120px" : "60px",
        pb: "60px",
      }}
    >
      <Stack gap="64px" alignItems="center">
        <Stack alignItems="center" gap="16px">
          <Chip title={"Patient Learning & Blog"} />
          <Stack
            sx={{ width: "100%", maxWidth: "646px", textAlign: "center" }}
            gap="8px"
          >
            <Typography variant="h1">
              Expert Articles on Holistic Patient Care and Wellness
            </Typography>
            <Typography color="text.secondary" variant="h6">
              Discover the Importance of Integrating Holistic Approaches in
              Patient Care for Achieving Optimal Health and Wellness Outcomes
            </Typography>
          </Stack>
        </Stack>
        <BlogCardDeck />
        { (location.pathname === "/blog") || (location.pathname === "/") && (
          <Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Button variant="contained">See All</Button>
          </Link>
        )}
      </Stack>
    </Container>
  );
}
