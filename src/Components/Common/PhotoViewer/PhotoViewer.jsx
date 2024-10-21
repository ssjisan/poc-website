import { Box, IconButton, Modal, useMediaQuery } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PropTypes from "prop-types";
import "./PhotoViewerStyles.css";
import { Cross } from "../../../assets/Icons";

export default function PhotoViewer({
  open,
  handleClosePhotoViewer,
  selectedAlbum,
}) {
  const forBelow767 = useMediaQuery("(max-width:767px)");

  const GalleryStyle = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    p: 4,
    border: "0px solid transparent",
    boxShadow: 0,
    position: "relative", // Required for absolute positioning of close button
  };

  const galleryImages = selectedAlbum?.map((image) => ({
    original: image.src,
    thumbnail: image.src,
  }));

  return (
    <Modal
      open={open}
      onClose={handleClosePhotoViewer}
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 32, 51, 0.64)",
        },
      }}
    >
      <Box sx={GalleryStyle}>
        {/* Close Button */}
        <IconButton
          onClick={handleClosePhotoViewer}
          sx={{
            position: "absolute",
            top: forBelow767 && -10,
            right: 40,
            zIndex: "10000000",
            bgcolor: "white", // Remove background
          }}
        >
          <Cross size={24} color="red" />
        </IconButton>

        <ImageGallery items={galleryImages} />
      </Box>
    </Modal>
  );
}

PhotoViewer.propTypes = {
  selectedImages: PropTypes.array.isRequired,
  handleAlbumClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
