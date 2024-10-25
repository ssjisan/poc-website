import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function BlogCard({
  data,
  formattedDate,
  categoryTitle,
  handlePreview,
}) {
  return (
    <Stack
      justifyContent="flex-start"
      sx={{
        width: "100%",
        cursor: "pointer",
        p: "24px",
        border: "1px solid rgba(145, 158, 171, 0.24)",
        borderRadius: "16px",
        transition: "box-shadow 0.3s ease", // Smooth transition for the shadow effect
        "&:hover": {
          boxShadow: "-24px 24px 72px -8px rgba(145, 158, 171, 0.24)", // Box shadow on hover
        },
      }}
      gap="24px"
      onClick={() => handlePreview(data.slug)}
    >
      <Stack justifyContent="space-between" alignItems="center" direction="row">
        <Chip
          label={categoryTitle}
          sx={{
            width: "fit-content",
            background: "rgba(0, 174, 96, 0.08)",
            color: "#00AE60",
            fontWeight: 700,
          }}
        />
      </Stack>
      <Box sx={{ height: "80px" }}>
        <Typography sx={{ fontWeight: 700 }}>{data.title}</Typography>
      </Box>
      <Stack>
        <Typography variant="body2" color="text.secondary">
          {formattedDate}
        </Typography>
        <Stack direction="row" gap="8px" alignItems="center">
          <Avatar alt={data.authorName} src={data.authorImage} />
          <Typography variant="body1">{data.authorName}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

BlogCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    authorImage: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  openAnchorEl: PropTypes.object,
  handlePreview: PropTypes.func.isRequired,
  categoryTitle: PropTypes.string.isRequired,
  formattedDate: PropTypes.string.isRequired,
  showConfirmationModal: PropTypes.func.isRequired,
  redirectEdit: PropTypes.func.isRequired,
};
