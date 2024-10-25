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

export default function Navbar() {
  const { pathname } = useLocation();
  const forBelow1200 = useMediaQuery("(max-width:1200px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const forBelow399 = useMediaQuery("(max-width:399px)");

  const linkStyle = {
    textDecoration: "none",
    fontWeight: 700,
    borderRadius: "10px",
  };

  const isActiveLink = (link) => {
    if (link === "/") {
      // If the link is for "Home", only mark it active when the pathname is exactly "/"
      return pathname === "/";
    }
    // For other links, check if the pathname starts with the link path
    return pathname.startsWith(link);
  };

  return (
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
            <Symbolic />
          ) : (
            <Logo />
          )
        ) : (
          <Symbolic />
        )
      ) : (
        <Logo />
      )}
      {forBelow999 ? (
        <IconButton>
          <Menu size={"24px"} color="#919EAB" />
        </IconButton>
      ) : (
        <>
          <Stack direction="row" gap={forBelow1200 ? "4px" : "8px"}>
            {main.map((data) => {
              const isActive = isActiveLink(data.link);
              return (
                <Link to={data.link} style={linkStyle} key={data.id}>
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
          <Link to="/book_appointment">
            <Button variant="contained" size={forBelow1200 ? "small" : "large"}>
              Book an appointment
            </Button>
          </Link>
        </>
      )}
    </Stack>
  );
}
