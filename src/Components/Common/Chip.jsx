import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Chip({title}) {
  return (
    <Stack
    sx={{
      p: "4px 16px",
      background: "rgba(97, 60, 24, 0.16)",
      borderRadius: "100px",
      height: "40px",
    }}
    justifyContent="center"
    alignItems="center"
  >
    <Typography sx={{ color: "#613C18" }}>{title}</Typography>
  </Stack>
  )
}

Chip.propTypes = {
    title: PropTypes.string.isRequired, // Title is required and should be a string
  };