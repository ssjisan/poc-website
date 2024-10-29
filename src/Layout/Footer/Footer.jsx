import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { main } from "../../Layout/Navbar/NavConfig";
import { Logo } from "../../assets/Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const forBelow599 = useMediaQuery("(max-width:599px)");

  const FooterContainerSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  const BottomSx = {
    display: "flex",
    paddingTop: "40px",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: forBelow599 && "column",
    gap: "24px",
  };
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={FooterContainerSx}>
      <Container
        sx={{
          pt: forBelow767 ? "40px" : "60px",
          pb: "32px",
          borderTop: "1px solid  rgba(145,158,171,0.32)",
        }}
      >
        <Stack alignItems="center">
          <Logo />
          <Stack
            sx={{ p: forBelow999 ? "24px 24px" : "24px 164px" }}
            gap="24px"
          >
            <Typography sx={{ textAlign: "center" }} color="text.secondary">
              We have served our mission specializing in only one thing;
              pediatric orthopaedics. The diseases and disorders we treat are
              wide-ranging and diverse. Whether we are treating bone deformities
              such as clubfoot, neuromuscular conditions such as cerebral palsy
              or genetic anomalies such as achondroplasia, our goal is to help
              each child become as functional and healthy as possible. We are a
              regional leader in pediatric orthopaedics.
            </Typography>
          </Stack>
          <Stack
            direction="row"
            gap="24px"
            justifyContent="center"
            flexWrap={forBelow599 && "wrap"}
            sx={{ width: "100%" }}
          >
            {main.map((data) => {
              return (
                <Link to={data.link} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <Box key={data.id}>
                  <Typography
                    color="text.primary"
                    sx={{ textDecoration: "underline" }}
                  >
                    {data.title}
                  </Typography>
                </Box>
                </Link>
              );
            })}
          </Stack>
        </Stack>
        <Box sx={BottomSx}>
          <Typography variant="body1" color="text.secondary">
          Pediatric Orthocare © {currentYear}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Powered By{" "}
            <Box component="span" sx={{ textDecoration: "underline" }}>
              <Link
                to="https://insighttechbd.com/"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Insighttech Bangladesh
              </Link>
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
