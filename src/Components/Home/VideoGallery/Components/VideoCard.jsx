import { Box, Grid, Stack, Typography } from "@mui/material";
import { Play } from "../../../../assets/Icons";

export default function VideoCard({ videos }) {
  const getVideoId = (url) => {
    const videoIdRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|(?:\S+\?v=))|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null; // Return video ID or null
  };
  const formatDate = (timestamp) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    return new Date(timestamp).toLocaleString("en-GB", options);
  };
  return (
    <>
      {videos.map((data) => {
        const videoId = getVideoId(data.url); // Get video ID
        const thumb = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
        return (
          <Grid item xs={12} sm={6} md={6} lg={4} key={data._id}>
            <Box sx={{ width: "100%" }}>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: "100%",
                  height: "220px",
                  backgroundImage: `url(${thumb})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "100px",
                    backgroundColor: "rgba(255, 255, 255, 0.16)",
                    backdropFilter: "blur(4px)",
                    border: "1.5px solid #FFF",
                  }}
                >
                  <Play size={40} color="#FFF" />
                </Stack>
              </Stack>
              {/* Display the formatted date above the title */}
              <Stack
                sx={{ mt: "24px" }}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Stack gap="4px">
                  <Typography variant="body2" color="text.secondary">
                    Posted at: {formatDate(data.createdAt)}
                  </Typography>
                  <Typography variant="h6" color={"text.primary"}>
                    {data.title}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}
