import {
  Drawer,
  Box,
  Typography,
  Stack,
  IconButton,
  Divider,
  Tooltip,
} from "@mui/material";
import { Cross, Mail, Phone, Whatsapp } from "../../../../assets/Icons";

export default function DetailsDrawer({
  open,
  toggleDrawer,
  profile,
  viewType,
}) {
  console.log(profile?.serialInfo);

  // Function to render the details view
  const renderDetailsView = () => (
    <>
      <Stack direction="row" gap="16px">
        <Tooltip title={profile.email}>
          <a
            aria-label="Send an Email"
            href={`mailto:${profile.email}`}
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
        <Tooltip title={profile.phone}>
          <a
            aria-label="Call on Phone"
            href={`tel:+${profile.phone}`}
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
        <Tooltip title={profile.whatsApp}>
          <a
            aria-label="Chat on WhatsApp"
            href={`https://wa.me/+${profile.whatsApp}`}
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
      <Typography
        sx={{ whiteSpace: "pre-wrap" }} // Ensure white space is preserved
        dangerouslySetInnerHTML={{ __html: profile.detailsInfo }} // Render HTML content safely
      />
    </>
  );

  // Function to render the appointment info view

  const days = [
    { id: 1, label: "Saturday", value: "Saturday" },
    { id: 2, label: "Sunday", value: "Sunday" },
    { id: 3, label: "Monday", value: "Monday" },
    { id: 4, label: "Tuesday", value: "Tuesday" },
    { id: 5, label: "Wednesday", value: "Wednesday" },
    { id: 6, label: "Thursday", value: "Thursday" },
    { id: 7, label: "Friday", value: "Friday" },
  ];

  const renderAppointmentView = () => (
    <>
      {profile?.serialInfo?.map((data, index) => {
        // Map day IDs to day labels
        const dayLabels = data.consultationDays
          ?.map((dayId) => {
            const matchedDay = days.find((day) => day.id === dayId);
            return matchedDay ? matchedDay.label : null;
          })
          .filter(Boolean); // Filter out any null values
  
        return (
          <Box key={index} sx={{ mb: 2 }}>
            <Stack gap="8px" sx={{mb:"16px"}}>
              <Typography variant="h6">Location - 0{index+1}</Typography>
              <Typography color="text.secondary">{data.location}</Typography>
            </Stack>
            <Stack gap="8px" sx={{mb:"16px"}}>
              <Typography variant="h6">Availability</Typography>
              <Typography color="text.secondary">
                {dayLabels?.join(", ")} <br /> at {data.consultationTime}
              </Typography>
            </Stack>
            <Stack gap="8px" sx={{mb:"16px"}}>
              <Typography variant="h6">For Serial</Typography>
              <Typography color="text.secondary">
                {data.appointmentNumber}
              </Typography>
            </Stack>
            {index < profile.serialInfo.length - 1 && <Divider />}
          </Box>
        );
      })}
    </>
  );
  
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <Box
        sx={{
          width: 380,
        }}
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
            <Cross size={24} color="#111827" />
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
              : renderAppointmentView()}
          </Stack>
        )}
      </Box>
    </Drawer>
  );
}
