import {
  Drawer,
  Box,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { Mail, Menu, Phone, Whatsapp } from "../../../../assets/Icons";

export default function DetailsDrawer({
  open,
  toggleDrawer,
  profile,
  viewType,
}) {
  // Function to render the details view
  const renderDetailsView = () => (
    <>
      <Stack direction="row" gap="16px">
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
      </Stack>
      <Typography
        sx={{ whiteSpace: "pre-wrap" }} // Ensure white space is preserved
        dangerouslySetInnerHTML={{ __html: profile.detailsInfo }} // Render HTML content safely
      />
    </>
  );

  // Function to render the appointment info view
  const renderAppointmentInfoView = () => (
    <>
      <Stack gap="8px">
        <Typography variant="h6">Location</Typography>
        <Typography color="text.secondary">{profile.location}</Typography>
      </Stack>
      <Stack gap="8px">
        <Typography variant="h6">Availability</Typography>
        <Typography color="text.secondary">
          {profile.consultationDays.join(", ")} at {profile.consultationTime}
        </Typography>
      </Stack>
      <Stack gap="8px">
        <Typography variant="h6">For Serial</Typography>
        <Typography color="text.secondary">
          {profile.appointmentNumber}
        </Typography>
      </Stack>
    </>
  );

  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <Box
        sx={{ width: 380, background: "#F4F6F8", height: "100vh" }}
        role="presentation"
      >
        <Stack
          sx={{
            p: "12px 16px",
            borderBottom: "1px solid #DDD",
            position: "fixed",
            background: "#fff",
            width: "380px",
          }}
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Typography variant="h6">Details</Typography>
          <IconButton onClick={() => toggleDrawer(false)}>
            <Menu size={24} color="#000" />
          </IconButton>
        </Stack>
        {profile && (
          <Stack sx={{ p: "80px 16px" }} gap="16px">
            <Box
              sx={{
                width: "120px",
                height: "120px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={profile?.profilePhoto?.[0]?.url || "/path/to/default.jpg"}
                alt={profile.name}
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Stack>
              <Typography variant="h5">{profile.name}</Typography>
              <Typography variant="body1" color="text.secondary">
                {profile.designation}
              </Typography>
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed", // Set the border style to dashed
                borderWidth: "0px 0px 1.5px 0px", // Control height and position (2px height)
                borderColor: "rgba(0, 0, 0, 0.2)", // Color of the dashed line
              }}
            />
            {/* Conditional Rendering based on viewType */}
            {viewType === "details"
              ? renderDetailsView()
              : renderAppointmentInfoView()}
          </Stack>
        )}
      </Box>
    </Drawer>
  );
}
