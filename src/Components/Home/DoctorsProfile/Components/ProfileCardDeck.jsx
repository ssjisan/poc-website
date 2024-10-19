import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import DetailsDrawer from "./DetailsDrawer";

export default function ProfileCardDeck() {
  const [profiles, setProfiles] = useState([]); // Profiles data
  const [selectedProfile, setSelectedProfile] = useState(null); // The selected profile to show in drawer
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer open/close
  const [viewType, setViewType] = useState("details"); // State to control view type ("details" or "appointment")

  // Fetch profiles when component mounts
  useEffect(() => {
    loadProfiles();
  }, []);

  // Function to load profiles from the API
  const loadProfiles = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/doctors`
      );
      setProfiles(data); // Update profiles state
    } catch (err) {
      toast.error("Problem loading doctors profile");
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
      {/* Pass profiles and toggleDrawer to ProfileCard component */}
      <ProfileCard profiles={profiles} toggleDrawer={toggleDrawer} />
      
      {/* Render the DetailsDrawer and pass necessary props */}
      <DetailsDrawer
        open={drawerOpen}
        toggleDrawer={toggleDrawer} // Pass the toggleDrawer function to close the drawer
        profile={selectedProfile} // Pass the selected profile data
        viewType={viewType} // Pass the view type (either "details" or "appointment")
      />
    </Grid>
  );
}
