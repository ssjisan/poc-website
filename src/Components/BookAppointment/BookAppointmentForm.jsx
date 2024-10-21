import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import InputFields from "./InputFields";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import days from "../../assets/days";
import { Calender } from "../../assets/Icons";

export default function BookAppointmentForm() {
  const [appointmentDate, setAppointmentDate] = useState(null); // To store selected date
  const [availableDays, setAvailableDays] = useState([]); // For doctor's available consultation days
  const [profiles, setProfiles] = useState([]); // Profiles data

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

  const [formData, setFormData] = useState({
    selectedDoctor: null,
    location: "",
    preferredDay: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Watch for doctor selection change and update available days and location
  useEffect(() => {
    if (formData.selectedDoctor) {
      const doctorDays = formData.selectedDoctor.consultationDays.map(
        (dayId) => {
          const day = days.find((d) => d.id === dayId);
          return day?.label;
        }
      );
      setAvailableDays(doctorDays); // Update available consultation days
      setFormData((prevData) => ({
        ...prevData,
        location: formData.selectedDoctor.location, // Auto-fill doctor's location
      }));
    }
  }, [formData.selectedDoctor]);

  // Disable dates not available for the selected doctor
  const shouldDisableDate = (date) => {
    const dayName = date.format("dddd");
    return !availableDays.includes(dayName); // Disable unavailable days
  };

  // Custom calendar icon
  const CalenderIcon = () => {
    return <Calender color="#919EAB" size={24} />;
  };

  // Handle doctor selection
  const handleDoctorChange = (event, newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDoctor: newValue, // Store selected doctor
    }));
  };

  // Handle general input change for all other fields
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value, // Update corresponding field in formData
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Ensure all required fields are filled
    if (
      !formData.selectedDoctor ||
      !appointmentDate ||
      !formData.name ||
      !formData.phone ||
      !formData.email
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Prepare data to submit
    const dataToSubmit = {
      doctorInfo: formData.selectedDoctor._id,
      preferredDate: appointmentDate.toISOString(), // Send date in ISO format
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/book_appointment`,
        dataToSubmit
      );

      if (response.status === 201) {
        toast.success("Appointment submitted successfully!");
        setFormData({
          selectedDoctor: null,
          location: "",
          preferredDay: "",
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        setAppointmentDate(null);
      } else {
        toast.error("Failed to submit the appointment.");
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      toast.error("An error occurred while submitting the appointment.");
    }
  };

  return (
    <Container sx={{ p: "80px 24px" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack
            gap="32px"
            alignItems="center"
            sx={{
              padding: "64px 24px 40px 24px",
              width: "100%",
              borderRadius: "20px",
              background: "#fff",
              boxShadow: "0px 8px 32px rgba(32, 38, 91, 0.16)",
            }}
          >
            <Stack gap="16px" sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "24px !important",
                  fontWeight: "700 !important",
                }}
              >
                Request an Appointment
              </Typography>
              <Typography color="text.secondary">
                Please use this form below in order to place an appointment with
                our doctor. We will send an SMS with details of your serial if
                the appointment is confirmed.
              </Typography>
            </Stack>
            <InputFields
              profiles={profiles} // Pass loaded profiles
              CalenderIcon={CalenderIcon} // Pass custom calendar icon
              handleDoctorChange={handleDoctorChange} // Doctor change handler
              handleInputChange={handleInputChange} // General input change handler
              shouldDisableDate={shouldDisableDate} // Disable unavailable dates
              appointmentDate={appointmentDate} // Selected appointment date
              setAppointmentDate={setAppointmentDate} // Set selected appointment date
              formData={formData} // Pass form data state
            />
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Submit Appointment
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
