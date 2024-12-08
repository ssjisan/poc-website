import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
// import Navbar from "../../Layout/Navbar/Navbar";

export default function HeroSection() {
  const forBelow396 = useMediaQuery("(max-width:396px)");
  const forBelow676 = useMediaQuery("(max-width:676px)");
  const forBelow790 = useMediaQuery("(max-width:790px)");
  const forBelow1200 = useMediaQuery("(max-width:1200px)");
  const MainBoxSx = {
    height: forBelow676 ? "70vh" : forBelow790 ? "80vh" : "90vh",
    p: forBelow790 ? "84px 16px 16px 16px" : "84px 20px 20px 20px",
  };
  const ContainerSx = {
    backgroundImage: "url('/bg.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    borderRadius: "32px",
    p:
    window.innerHeight < 768 // Check for small heights
      ? "16px" // Reduced padding for small screen height
      : forBelow676
      ? "32px"
      : forBelow790
      ? "64px 16px 16px 64px"
      : forBelow1200
      ? "80px 20px 20px 80px"
      : "132px 24px 24px 132px",
  };
  const AvatarSx = {
    width: "40px",
    height: "40px",
    border: "3px solid #FFF",
    background: "grey",
    borderRadius: "100%",
    position: "relative",
    overflow: "hidden",
  };
  return (
    <Box sx={MainBoxSx}>
      <Stack container sx={ContainerSx} gap="40px" justifyContent="flex-start">
        <Stack gap="16px" sx={{ width: "100%", maxWidth: "920px" }}>
          <Stack gap={forBelow676 ? "16px" : "0px"}>
            <Stack
              direction="row"
              sx={{ position: "relative", alignItems: "center" }}
            >
              <Box
                sx={{
                  ...AvatarSx,
                  zIndex: 1,
                }}
              >
                <img
                  src="/1.png"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  ...AvatarSx,
                  left: "-10px", // Move 30px to the left
                  zIndex: 2,
                }}
              >
                <img
                  src="/2.png"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  ...AvatarSx,
                  left: "-20px", // Move 60px to the left
                  zIndex: 3,
                }}
              >
                <img
                  src="/3.png"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  p: "10px 16px",
                  height: "40px",
                  border: "2px solid #FFF",
                  background: "#FFF",
                  borderRadius: "50px",
                  position: "relative",
                  left: "-30px", // Move 90px to the left
                  zIndex: 4, // Lower z-index to keep it behind the previous ones
                }}
              >
                <Typography sx={{ fontSize: forBelow396 && "10px" }}>
                  1200+ happy patients
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{
                fontSize: forBelow676
                  ? "24px !important"
                  : forBelow790
                  ? "32px !important"
                  : forBelow1200
                  ? "40px !important"
                  : "52px !important",
                fontWeight: "700 !important",
                color: "#FFF",
                width: "100%",
                lineHeight: "120%",
              }}
            >
              Bringing Back the Rhythm in Your Children's Steps, Orthopedic Care at Its Best.
            </Typography>
          </Stack>
          <Typography
            sx={{
              color: "#FFF",
              width: "100%",
              fontSize: forBelow676 ? "14px !important" : "20px !important",
              fontWeight: "400 !important",
            }}
          >
            Dedicated to providing top-quality pediatric orthopaedic care,
            ensuring the healthy development and well-being of children
            throughout our region.
          </Typography>
        </Stack>
        <Link to="/book_appointment">
          <Button
            variant="contained"
            sx={{
              background: "#FFF",
              color: "#20265B",
              "&:hover": {
                background: "rgba(0, 0, 0, 0.32)",
                color: "#FFF",
              },
            }}
          >
            Book an appointment
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
