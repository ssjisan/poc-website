import { Box, Grid, Stack } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import DetailsDrawer from "./DetailsDrawer";
import Skeleton from "@mui/material/Skeleton";

export default function ProfileCardDeck() {
  const [profiles, setProfiles] = useState([]); // Profiles data
  const [selectedProfile, setSelectedProfile] = useState(null); // The selected profile to show in drawer
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer open/close
  const [viewType, setViewType] = useState("details"); // State to control view type ("details" or "appointment")
  const [loading, setLoading] = useState(true); // State to control loading

  // Fetch profiles when component mounts
  useEffect(() => {
    loadProfiles();
  }, []);

  // Function to load profiles from the API
  const loadProfiles = async () => {
    try {
      const { data } = await axios.get("/doctors");
      setProfiles(data); // Update profiles state
    } catch (err) {
      toast.error("Problem loading doctors profile");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Function to toggle the drawer (open/close), set profile, and set view type
  const toggleDrawer = (isOpen, profile = null, type = "details") => {
    setDrawerOpen(isOpen); // Set the drawer state (open/close)
    setSelectedProfile(profile); // Set the selected profile
    setViewType(type); // Set the view type (details or appointment)
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {loading
        ? [...Array(3)].map(
            (
              _,
              index // Create 3 skeletons
            ) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <Box sx={{ p: 2 }}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <Skeleton sx={{ marginTop: 1 }} />
                  <Skeleton sx={{ marginTop: 1 }} />
                  <Skeleton sx={{ marginTop: 1 }} />
                </Box>
              </Grid>
            )
          )
        : profiles.map((data, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <ProfileCard data={data} toggleDrawer={toggleDrawer} />
            </Grid>
          ))}

      <DetailsDrawer
        open={drawerOpen}
        toggleDrawer={toggleDrawer} // Pass the toggleDrawer function to close the drawer
        profile={selectedProfile} // Pass the selected profile data
        viewType={viewType} // Pass the view type (either "details" or "appointment")
      />
    </Grid>
  );
}
