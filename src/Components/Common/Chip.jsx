import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Chip({title}) {
  return (
    <Stack
    sx={{
      p: "4px 16px",
      background: "rgba(32, 38, 91, 0.16)",
      borderRadius: "100px",
      height: "40px",
    }}
    justifyContent="center"
    alignItems="center"
  >
    <Typography sx={{ color: "rgba(32, 38, 91, 1)" }}>{title}</Typography>
  </Stack>
  )
}

Chip.propTypes = {
    title: PropTypes.string.isRequired, // Title is required and should be a string
  };