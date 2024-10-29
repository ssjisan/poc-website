import { Skeleton, Stack, Box } from "@mui/material";

export default function BlogCardSkeleton() {
  return (
    <Stack
      justifyContent="flex-start"
      sx={{
        width: "100%",
        p: "24px",
        border: "1px solid rgba(145, 158, 171, 0.24)",
        borderRadius: "16px",
      }}
      gap="24px"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Skeleton variant="rectangular" width="80px" height="24px" />
      </Stack>
      <Box sx={{ height: "80px" }}>
        <Skeleton variant="text" width="100%" height="32px" />
        <Skeleton variant="text" width="60%" height="32px" />
      </Box>
      <Stack>
        <Skeleton variant="text" width="50%" height="20px" />
        <Stack direction="row" gap="8px" alignItems="center">
          <Skeleton variant="circular" width="40px" height="40px" />
          <Skeleton variant="text" width="120px" height="24px" />
        </Stack>
      </Stack>
    </Stack>
  );
}
