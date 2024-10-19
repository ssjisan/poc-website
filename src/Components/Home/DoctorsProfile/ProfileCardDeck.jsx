import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function ProfileCardDeck() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    loadProfiles();
  }, []);
  const loadProfiles = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/doctors`
      );
      setProfiles(data);
      console.log(data);
    } catch (err) {
      toast.error("Problem loading doctors profile");
    }
  };
  return (
    <Grid container spacing={2}>
        <ProfileCard profiles={profiles}/>
    </Grid>
  );
}
