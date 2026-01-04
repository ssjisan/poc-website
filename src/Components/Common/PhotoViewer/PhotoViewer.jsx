import { Box, IconButton, Modal, Stack } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Cross, ArrowLeft, ArrowRight } from "../../../assets/Icons";

export default function PhotoViewer({
  open,
  handleClosePhotoViewer,
  selectedAlbum = [],
}) {
  const [index, setIndex] = useState(0);

  const thumbsRef = useRef(null);
  const thumbItemsRef = useRef([]);

  // Reset index when album changes or modal opens
  useEffect(() => {
    if (open) setIndex(0);
  }, [open, selectedAlbum]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    const activeThumb = thumbItemsRef.current[index];
    const container = thumbsRef.current;

    if (activeThumb && container) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < selectedAlbum.length - 1 ? prev + 1 : prev));
  };

  if (!selectedAlbum || selectedAlbum.length === 0) return null;

  return (
    <Modal
      open={open}
      onClose={handleClosePhotoViewer}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 32, 51, 0.4)",
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        {/* Close Button */}
        <Stack
          onClick={handleClosePhotoViewer}
          alignItems="center"
          justifyContent="center"
          sx={{
            position: "fixed",
            borderRadius: "100px",
            top: 16,
            right: 16,
            width: "36px",
            height: "36px",
            bgcolor: "#fff",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <Cross size={22} color="red" />
        </Stack>

        {/* Left Arrow */}
        {index > 0 && (
          <Stack
            onClick={handlePrev}
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "fixed",
              borderRadius: "100px",
              left: 16,
              width: "36px",
              height: "36px",
              bgcolor: "#fff",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <ArrowLeft size={22} color="#000" />
          </Stack>
        )}

        {/* Main Image */}
        <Box
          component="img"
          src={selectedAlbum[index]?.src}
          alt=""
          sx={{
            maxWidth: "90vw",
            maxHeight: "70vh",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />

        {/* Right Arrow */}
        {index < selectedAlbum.length - 1 && (
          <Stack
            onClick={handleNext}
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "fixed",
              borderRadius: "100px",
              right: 16,
              width: "36px",
              height: "36px",
              bgcolor: "#fff",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <ArrowRight size={22} color="#000" />
          </Stack>
        )}

        {/* Thumbnails */}
        <Box
          ref={thumbsRef}
          sx={{
            position: "fixed",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 1,
            maxWidth: "90vw",
            overflowX: "auto",
            borderRadius: "12px",
            zIndex: 10,

            /* Hide scrollbar but allow scroll */
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {selectedAlbum.map((photo, i) => (
            <Box
              key={i}
              ref={(el) => (thumbItemsRef.current[i] = el)}
              component="img"
              src={photo.src}
              onClick={() => setIndex(i)}
              sx={{
                width: { xs: 48, sm: 56, md: 64 },
                height: { xs: 48, sm: 56, md: 64 },
                objectFit: "cover",
                borderRadius: "6px",
                cursor: "pointer",
                border:
                  i === index ? "3px solid #fff" : "3px solid transparent",
                opacity: i === index ? 1 : 0.6,
                transition: "all 0.25s ease",
                flexShrink: 0,
                "&:hover": {
                  opacity: 1,
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
}

PhotoViewer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClosePhotoViewer: PropTypes.func.isRequired,
  selectedAlbum: PropTypes.array.isRequired,
};
