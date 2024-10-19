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
import { useLocation } from "react-router-dom";
import { Symbolic } from "../../assets/Symbolic";
import { Menu } from "../../assets/Icons";
export default function Navbar() {
  const { pathname } = useLocation();
  const forBelow1200 = useMediaQuery("(max-width:1200px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const forBelow399 = useMediaQuery("(max-width:399px)");
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
              return (
                <Stack
                  sx={{
                    p: "4px 16px",
                    border:
                      pathname === data.link &&
                      "1px solid rgba(97, 60, 24, 0.32)",
                    background:
                      pathname === data.link && "rgba(97, 60, 24, 0.16)",
                    height: forBelow1200 ? "36px" : "40px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography
                    color={
                      pathname === data.link ? "secondary" : "text.primary"
                    }
                    sx={{ fontWeight: 700 }}
                  >
                    {data.title}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
          <Button variant="contained" size={forBelow1200 ? "small" : "large"}>
            Book an appointment
          </Button>
        </>
      )}
    </Stack>
  );
}
