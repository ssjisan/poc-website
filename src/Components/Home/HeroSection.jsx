import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width:676px)");
  const isBelow575 = useMediaQuery("(max-width:575px)");

  /* =====================
     MAIN WRAPPER
  ====================== */
  const MainBoxSx = {
    minHeight: isBelow575 ? "70vh" : "100vh",
    display: "flex",
    alignItems: "center",
    px: { xs: 2, sm: 3 },
    py: { xs: 10, sm: 3 },
  };

  /* =====================
     BACKGROUND CONTAINER
  ====================== */
  const ContainerSx = {
    backgroundImage: "url('/bg.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "32px",
    width: "100%",
    py: { xs: 6, sm: 8, md: 10, lg: 7 },
    px: { xs: 6, sm: 6, md: 10, lg: 10 },
    display: "flex",
    alignItems: "center",
  };

  /* =====================
     AVATAR STYLE
  ====================== */
  const AvatarSx = {
    width: "40px",
    height: "40px",
    border: "3px solid #FFF",
    borderRadius: "100%",
    overflow: "hidden",
    background: "#ccc",
  };

  return (
    <Box sx={MainBoxSx}>
      <Box sx={ContainerSx}>
        <Stack
          sx={{
            maxWidth: "920px",
            gap: { xs: "24px", sm: "32px" },
          }}
        >
          {/* =====================
              AVATAR GROUP
          ====================== */}
          <Stack direction="row" alignItems="center">
            <Box sx={{ ...AvatarSx, zIndex: 1 }}>
              <img src="/1.png" width="100%" height="100%" />
            </Box>
            <Box sx={{ ...AvatarSx, ml: "-10px", zIndex: 2 }}>
              <img src="/2.png" width="100%" height="100%" />
            </Box>
            <Box sx={{ ...AvatarSx, ml: "-10px", zIndex: 3 }}>
              <img src="/3.png" width="100%" height="100%" />
            </Box>
            <Box
              sx={{
                ml: "-10px",
                px: "16px",
                height: "40px",
                border: "2px solid #FFF",
                background: "#FFF",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography fontSize={isMobile ? "12px" : "14px"}>
                1200+ happy patients
              </Typography>
            </Box>
          </Stack>

          {/* =====================
              MAIN HEADING
          ====================== */}
          <Typography
            sx={{
              fontSize: {
                xs: "24px",
                sm: "32px",
                md: "40px",
                lg: "52px",
              },
              fontWeight: 700,
              color: "#FFF",
              lineHeight: 1.2,
            }}
          >
            Bringing Back the Rhythm in Your Children's Steps, Orthopedic Care
            at Its Best.
          </Typography>

          {/* =====================
              SUB TEXT
          ====================== */}
          <Typography
            sx={{
              color: "#FFF",
              fontSize: { xs: "14px", sm: "16px", md: "20px" },
              opacity: 0.9,
            }}
          >
            Dedicated to providing top-quality pediatric orthopaedic care,
            ensuring the healthy development and well-being of children
            throughout our region.
          </Typography>

          {/* =====================
              CTA BUTTON
          ====================== */}
          <Link to="/book_appointment" style={{ width: "fit-content" }}>
            <Button
              variant="contained"
              sx={{
                background: "#FFF",
                color: "#20265B",
                px: "32px",
                py: "12px",
                borderRadius: "50px",
                "&:hover": {
                  background: "rgba(255,255,255,0.85)",
                },
              }}
            >
              Book an appointment
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
