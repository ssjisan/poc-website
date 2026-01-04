import { Box, IconButton, Modal, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import { Cross } from "../../../assets/Icons";

export default function VideoPlayer({
  open,
  handleCloseVideoPlayer,
  selectedVideo,
}) {
  const isMobile = useMediaQuery("(max-width:767px)");

  const convertToEmbedUrl = (url) => {
    if (!url || typeof url !== "string") return "";

    if (url.includes("youtube.com/watch")) {
      return url.replace("watch?v=", "embed/");
    }

    if (url.includes("youtu.be")) {
      return url.replace("youtu.be/", "www.youtube.com/embed/");
    }

    return url;
  };

  const embedUrl = convertToEmbedUrl(selectedVideo);

  if (!embedUrl) return null;

  return (
    <Modal
      open={open}
      onClose={handleCloseVideoPlayer}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 32, 51, 0.45)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        {/* Video Wrapper */}
        <Box
          sx={{
            position: "relative",
            width: isMobile ? "100%" : "70%",
            maxWidth: "960px",
            aspectRatio: "16 / 9",
            borderRadius: "12px",
            overflow: "hidden",
            bgcolor: "#000",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseVideoPlayer}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 10,
              bgcolor: "#fff",
              "&:hover": {
                bgcolor: "#f5f5f5",
              },
            }}
          >
            <Cross size={22} color="red" />
          </IconButton>

          {/* Video iframe */}
          <Box
            component="iframe"
            src={embedUrl}
            title="Video Player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Box>
      </Box>
    </Modal>
  );
}

VideoPlayer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseVideoPlayer: PropTypes.func.isRequired,
  selectedVideo: PropTypes.string.isRequired,
};
