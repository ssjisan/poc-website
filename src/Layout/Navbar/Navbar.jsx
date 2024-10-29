import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Logo } from "../../assets/Logo";
import { main } from "./NavConfig";
import { Link, useLocation } from "react-router-dom";
import { Symbolic } from "../../assets/Symbolic";
import { Menu } from "../../assets/Icons";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer"; // Import the MenuDrawer component

export default function Navbar() {
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const forBelow1200 = useMediaQuery("(max-width:1200px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const forBelow399 = useMediaQuery("(max-width:399px)");

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const linkStyle = {
    textDecoration: "none",
    fontWeight: 700,
    borderRadius: "10px",
  };

  const isActiveLink = (link) => {
    if (link === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(link);
  };

  return (
    <>
      <Stack
        sx={{
          p: forBelow999 ? "8px 24px" : "8px 20px",
          backdropFilter: "blur(16px)",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          borderBottom: "1px solid #DBDBDB",
        }}
        justifyContent="space-between"
        direction="row"
        alignItems="center"
      >
        {forBelow1200 ? (
          forBelow999 ? (
            forBelow399 ? (
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Symbolic />
              </Link>
            ) : (
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Logo />
              </Link>
            )
          ) : (
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Symbolic />
            </Link>
          )
        ) : (
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo />
          </Link>
        )}
        {forBelow999 ? (
          <IconButton onClick={toggleDrawer}>
            <Menu size={"24px"} color="#000" />
          </IconButton>
        ) : (
          <>
            <Stack direction="row" gap={forBelow1200 ? "4px" : "8px"}>
              {main.map((data) => {
                const isActive = isActiveLink(data.link);
                return (
                  <Link
                    to={data.link}
                    style={linkStyle}
                    key={data.id}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <Stack
                      sx={{
                        p: "4px 16px",
                        border: isActive && "1px solid rgba(32, 38, 91, 0.32)",
                        background: isActive && "rgba(32, 38, 91, 0.16)",
                        height: forBelow1200 ? "36px" : "40px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography
                        color={isActive ? "primary" : "text.primary"}
                        sx={{ fontWeight: 700 }}
                      >
                        {data.title}
                      </Typography>
                    </Stack>
                  </Link>
                );
              })}
            </Stack>
            <Link
              to="/book_appointment"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Button
                variant="contained"
                size={forBelow1200 ? "small" : "large"}
              >
                Book an appointment
              </Button>
            </Link>
          </>
        )}
      </Stack>

      {/* Pass state and handlers to MenuDrawer */}
      <MenuDrawer
        open={drawerOpen}
        toggleDrawer={toggleDrawer}
        handleDrawerClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
