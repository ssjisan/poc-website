import { Grid, Stack, Typography } from "@mui/material";

export default function ServiceCard({ data }) {
  return (
    <>
      <Stack
        sx={{
          borderRadius: "12px",
          p: "24px",
          border: "1px solid rgba(145, 158, 171, 0.24)",
          transition: "box-shadow 0.3s ease", // Smooth transition for the shadow effect
          "&:hover": {
            boxShadow: "-24px 24px 72px -8px rgba(145, 158, 171, 0.24)", // Box shadow on hover
          },
        }}
        gap="24px"
      >
        <Stack gap="16px">
          <Typography variant="h5">{data.title}</Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              height: "84px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4, // Limits text to 4 lines before truncating (adjust based on line height)
              textOverflow: "ellipsis",
            }}
          >
            {data.subTitle}
          </Typography>
        </Stack>
        <Typography
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          color="primary"
        >
          See related articles
        </Typography>
      </Stack>
    </>
  );
}
