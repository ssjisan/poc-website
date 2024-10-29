import { Box, Button, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { Mail, Phone, Whatsapp } from "../../../../assets/Icons";

export default function ProfileCard({ data, toggleDrawer }) {
  return (
    <Stack
      sx={{
        p: "16px",
        border: "1px solid rgba(145, 158, 171, 0.24)",
        borderRadius: "16px",
        transition: "box-shadow 0.3s ease",
        transition: "border 0.3s ease",
        "&:hover": {
          boxShadow: "-24px 24px 72px -8px rgba(145, 158, 171, 0.24)",
          border: "1px solid transparent",
        },
      }}
      alignItems="center"
      gap="24px"
    >
      <Box
        sx={{
          width: "120px",
          height: "120px",
          borderRadius: "100px",
          overflow: "hidden",
        }}
      >
        <img
          src={data?.profilePhoto?.[0]?.url || "/path/to/default.jpg"} // Fallback image if profilePhoto doesn't exist
          alt={data.name}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Stack alignItems="center" gap="8px" sx={{ textAlign: "center" }}>
        <Typography variant="h4">{data.name}</Typography>
        <Typography color="text.secondary">{data.designation}</Typography>
      </Stack>

      <Stack direction="row" gap="16px">
        <Tooltip title={data.email}>
          <a
            aria-label="Send an Email"
            href={`mailto:${data.email}`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "32px",
                height: "32px",
                background: "rgba(32, 38, 91, 0.16)",
                borderRadius: "6px",
              }}
            >
              <Mail color="#20265B" size={22} />
            </Stack>
          </a>
        </Tooltip>
        <Tooltip title={data.phone}>
          <a
            aria-label="Call on Phone"
            href={`tel:+${data.phone}`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "32px",
                height: "32px",
                background: "rgba(32, 38, 91, 0.16)",
                borderRadius: "6px",
              }}
            >
              <Phone color="#20265B" size={22} />
            </Stack>
          </a>
        </Tooltip>
        <Tooltip title={data.whatsApp}>
          <a
            aria-label="Chat on WhatsApp"
            href={`https://wa.me/+${data.whatsApp}`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "32px",
                height: "32px",
                background: "rgba(32, 38, 91, 0.16)",
                borderRadius: "6px",
              }}
            >
              <Whatsapp color="#20265B" size={22} />
            </Stack>
          </a>
        </Tooltip>
      </Stack>
      <Stack direction="row" sx={{ width: "100%" }} gap="8px">
        <Button
          sx={{ width: "100%" }}
          onClick={() => toggleDrawer(true, data, "details")} // Pass specific profile
        >
          Details
        </Button>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => toggleDrawer(true, data, "appointment")} // Pass specific profile
        >
          Appointment Info
        </Button>
      </Stack>
    </Stack>
  );
}
