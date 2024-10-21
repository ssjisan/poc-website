import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs"; // Optional: import to handle dates directly
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ArrowDown, Calender } from "../../assets/Icons";
import { useEffect, useState } from "react";

export default function InputFields({ profiles }) {
  const days = [
    { id: 1, label: "Saturday", value: "Saturday" },
    { id: 2, label: "Sunday", value: "Sunday" },
    { id: 3, label: "Monday", value: "Monday" },
    { id: 4, label: "Tuesday", value: "Tuesday" },
    { id: 5, label: "Wednesday", value: "Wednesday" },
    { id: 6, label: "Thursday", value: "Thursday" },
    { id: 7, label: "Friday", value: "Friday" },
  ];
  const [selectedDoctor, setSelectedDoctor] = useState(null); // To store selected doctor
  const [location, setLocation] = useState(""); // To store the location
  const [availableDays, setAvailableDays] = useState([]);

  // Restrict to next 30 days
  const today = dayjs();
  const thirtyDaysLater = dayjs().add(30, "day");

  useEffect(() => {
    if (selectedDoctor) {
      // Map consultationDays to get corresponding day labels
      const doctorDays = selectedDoctor.consultationDays.map((dayId) => {
        const day = days.find((d) => d.id === dayId);
        return day?.label;
      });
      setAvailableDays(doctorDays);
    }
  }, [selectedDoctor]);

  // Function to disable dates that don't match available consultation days
  const shouldDisableDate = (date) => {
    const dayName = date.format("dddd"); // Get the day name (e.g., 'Monday')
    return !availableDays.includes(dayName); // Disable if it's not available
  };

  const CalenderIcon = () => {
    return <Calender color="#919EAB" size={24} />;
  };
  const handleDoctorChange = (event, newValue) => {
    setSelectedDoctor(newValue); // Set the selected doctor
    if (newValue) {
      setLocation(newValue.location); // Set the location field with the doctor's location
    } else {
      setLocation(""); // Clear location if no doctor is selected
    }
  };
  return (
    <Stack gap="16px" sx={{ width: "100%" }}>
      <Autocomplete
        fullWidth
        options={profiles} // Doctors list
        getOptionLabel={(option) => option.name} // Display doctor's name in the autocomplete
        onChange={handleDoctorChange} // Handle selection change
        popupIcon={<ArrowDown color="#727373" size={24} />}
        renderInput={(params) => (
          <TextField {...params} label="Select a Doctor" />
        )}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Appointment Date"
          minDate={today}
          maxDate={thirtyDaysLater}
          shouldDisableDate={shouldDisableDate} // Disable unavailable dates
          slots={{
            openPickerIcon: CalenderIcon,
          }}
        />
      </LocalizationProvider>
      <TextField
        id="location"
        label="Location"
        variant="outlined"
        fullWidth
        value={location} // Set the location field with the selected doctor's location
        InputProps={{
          readOnly: true, // Make the location field read-only to avoid user input
        }}
      />
      <TextField
        id="name"
        label="Your Name"
        variant="outlined"
        type="name"
        fullWidth
        required
      />
      <TextField
        id="phone"
        label="Your Phone Number"
        variant="outlined"
        type="phone"
        fullWidth
        required
      />
      <TextField
        id="email"
        label="Your Email"
        variant="outlined"
        type="email"
        fullWidth
        required
      />
      <TextField
        id="message"
        label="Your Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        required
      />
    </Stack>
  );
}
