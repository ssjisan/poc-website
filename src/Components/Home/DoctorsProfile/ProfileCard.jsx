import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Mail, Phone, Whatsapp } from "../../../assets/Icons";

export default function ProfileCard({ profiles }) {
  return (
    <>
      {profiles.map((data) => {
        return (
          <Grid item xs={12} sm={6}  md={6} lg={4}>
            <Stack
              sx={{
                p: "16px",
                border: "1px solid rgba(145, 158, 171, 0.24)",
                borderRadius: "16px",
                transition: "box-shadow 0.3s ease", // Smooth transition for the shadow effect
                transition: "border 0.3s ease", // Smooth transition for the shadow effect
                '&:hover': {
                  boxShadow: '-24px 24px 72px -8px rgba(145, 158, 171, 0.24)', 
                  border:"1px solid transparent"// Box shadow on hover
                },
              }}
              alignItems="center"
              gap="24px"
            >
              <Box
                sx={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "100px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={data?.profilePhoto?.length && data.profilePhoto[0]?.url}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Stack alignItems="center" gap="8px" sx={{ textAlign: "center" }}>
                <Typography variant="h4">{data.name}</Typography>
                <Typography color="text.secondary">
                {data.designation}
                </Typography>
              </Stack>
              <Stack direction="row" gap="16px">
                <Stack justifyContent="center" alignItems="center" sx={{width:"32px", height:"32px", background:"rgba(32, 38, 91, 0.16)", borderRadius:"6px"}}>
                    <Mail color="#20265B" size={22}/>
                </Stack>
                <Stack justifyContent="center" alignItems="center" sx={{width:"32px", height:"32px", background:"rgba(32, 38, 91, 0.16)", borderRadius:"6px"}}>
                    <Phone color="#20265B" size={22}/>
                </Stack>
                <Stack justifyContent="center" alignItems="center" sx={{width:"32px", height:"32px", background:"rgba(32, 38, 91, 0.16)", borderRadius:"6px"}}>
                    <Whatsapp color="#20265B" size={22}/>
                </Stack>
              </Stack>
              <Stack direction="row" sx={{ width: "100%" }} gap="8px">
                <Button sx={{ width: "100%" }}>Details</Button>
                <Button variant="contained" sx={{ width: "100%" }}>
                  Appointment Info
                </Button>
              </Stack>
            </Stack>
          </Grid>
        );
      })}
    </>
  );
}
