import { Box, Grid, Stack, Typography } from "@mui/material";
import { Album } from "../../../../assets/Icons";

export default function AlbumCard({ albums }) {
  const IconBoxSx = {
    width: "24px",
    height: "24px",
  };

  const PointSx = {
    display: "flex",
    gap: "4px",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "110px",
  };

  return (
    <>
      {albums.map((data) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Stack sx={{ p: "24px 12px", cursor: "pointer" }} gap="16px">
              <Box
                sx={{
                  width: "100%",
                  height: "220px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={data.images[0].src}
                  alt={data.name}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "24px",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="h4">{data.name}</Typography>
                <Box sx={PointSx}>
                  <Box sx={IconBoxSx}>
                    <Album color="#613C18" size={20} />
                  </Box>
                  <Typography variant="body1" color={"text.secondary"}>
                    {data.images ? `${data.images.length} images` : "No images"}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        );
      })}
    </>
  );
}
