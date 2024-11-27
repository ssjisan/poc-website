import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import InputFields from "./InputFields";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Calender } from "../../assets/Icons";
import dayjs from "dayjs";

export default function BookAppointmentForm() {
  const [profiles, setProfiles] = useState([]); // Profiles data
  const [loading, setLoading] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(null); // To store selected date
  const days = [
    { id: 1, label: "Saturday", value: "Saturday" },
    { id: 2, label: "Sunday", value: "Sunday" },
    { id: 3, label: "Monday", value: "Monday" },
    { id: 4, label: "Tuesday", value: "Tuesday" },
    { id: 5, label: "Wednesday", value: "Wednesday" },
    { id: 6, label: "Thursday", value: "Thursday" },
    { id: 7, label: "Friday", value: "Friday" },
  ];

  useEffect(() => {
    loadProfiles();
  }, []);

  // Function to load profiles from the API
  const loadProfiles = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/availableDoctors`
      );
      setProfiles(data); // Update profiles state
    } catch (err) {
      toast.error("Problem loading doctors profile");
    }
  };

  // Custom calendar icon
  const CalenderIcon = () => {
    return <Calender color="#919EAB" size={24} />;
  };

  const [formData, setFormData] = useState({
    selectedDoctor: null,
    selectedLocation: null, // New field to store selected location
    appointmentDate: null, // Store the selected date
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle doctor selection
  const handleDoctorChange = (event, newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDoctor: newValue,
      selectedLocation: null, // Reset location when a new doctor is selected
    }));
  };
console.log(formData);

  // Handle location selection
  const handleLocationChange = (event, locationName) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedLocation: locationName,
    }));
  };

  // Create the function to disable dates based on selected location
  const shouldDisableDate = (date) => {
    const selectedLocation = formData.selectedDoctor
      ? profiles
          .find((doc) => doc._id === formData.selectedDoctor)
          ?.serialInfo.find((loc) => loc.location === formData.selectedLocation)
      : null;

    if (selectedLocation) {
      const allowedDays = selectedLocation.consultationDays;
      const dayId = days.find((day) => day.label === date.format("dddd"))?.id;
      return !allowedDays.includes(dayId);
    }
    return false;
  };

  // Handle general input change for all other fields
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleDateChange = (newDate) => {
    if (newDate && newDate.isValid()) {
      setAppointmentDate(newDate); // Update the local state with a dayjs object
      // Correctly update formData with the formatted date string
      setFormData((prevData) => ({
        ...prevData,
        appointmentDate: dayjs(newDate).format('MMM DD, YYYY'), // Set appointmentDate with the ISO string
      }));
    } else {
      setAppointmentDate(null);

      // Ensure appointmentDate is reset to null in formData
      setFormData((prevData) => ({
        ...prevData,
        appointmentDate: null,
      }));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Show loading toast
    const toastId = toast.loading("Sending appointment request...");
    setLoading(true);
    if (
      !formData.selectedDoctor ||
      !formData.selectedLocation ||
      !formData.appointmentDate ||
      !formData.name ||
      !formData.phone ||
      !formData.email
    ) {
      toast.error("Please fill in all required fields.",{
        id: toastId,
      });
      return;
    }
    
    try {
      // Prepare the data to send to the backend
      const appointmentData = {
        doctorInfo: formData.selectedDoctor,
        selectedLocation: formData.selectedLocation,
        appointmentDate: formData.appointmentDate,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      };
      

      // Send the data to the backend
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/book_appointment`,
        appointmentData
      );

      if (response.status === 201) {
        toast.success("Appointment created successfully!", {
          id: toastId,
        });
        // Reset the form
        setFormData({
          selectedDoctor: null,
          selectedLocation: null,
          appointmentDate: null,
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        setAppointmentDate(null);
      } else {
        toast.error("Failed to create appointment. Please try again.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("An error occurred while creating the appointment.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
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
              profiles={profiles}
              formData={formData}
              handleDoctorChange={handleDoctorChange}
              handleLocationChange={handleLocationChange}
              handleInputChange={handleInputChange}
              CalenderIcon={CalenderIcon}
              shouldDisableDate={shouldDisableDate}
              appointmentDate={appointmentDate}
              setAppointmentDate={setAppointmentDate}
              handleDateChange={handleDateChange}
            />

            {/* Submit Button */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              sx={{ mt: 2 }}
            >
              Book Appointment
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
