import { Autocomplete, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ArrowDown } from "../../assets/Icons";

export default function InputFields({
  profiles,
  CalenderIcon,
  formData,
  handleDoctorChange,
  handleLocationChange,
  handleInputChange,
  shouldDisableDate,
  appointmentDate,
  handleDateChange,
}) {
  // Restrict to next 30 days
  const today = dayjs();
  const thirtyDaysLater = dayjs().add(30, "day");

  // Get the locations of the selected doctor
  const locations = formData.selectedDoctor
    ? profiles.find((doc) => doc._id === formData.selectedDoctor)?.serialInfo ||
      []
    : [];

  return (
    <Stack gap="16px" sx={{ width: "100%" }}>
      {/* Doctor selection */}
      <Autocomplete
        fullWidth
        options={profiles}
        getOptionLabel={(option) => option.name}
        value={
          formData.selectedDoctor
            ? profiles.find((doc) => doc._id === formData.selectedDoctor)
            : null
        }
        onChange={(event, newValue) => {
          handleDoctorChange(event, newValue ? newValue._id : null);
        }}
        popupIcon={<ArrowDown color="#727373" size={24} />}
        renderInput={(params) => (
          <TextField {...params} label="Select a Doctor" />
        )}
      />

      {/* Location selection */}
      <Autocomplete
        disabled={formData.selectedDoctor === null}
        fullWidth
        options={locations}
        getOptionLabel={(option) => option.location || "No Location Provided"}
        value={
          formData.selectedLocation
            ? locations.find(
                (loc) => loc.location === formData.selectedLocation
              )
            : null
        }
        onChange={(event, newValue) => {
          handleLocationChange(event, newValue ? newValue.location : null);
        }}
        popupIcon={<ArrowDown color="#727373" size={24} />}
        renderInput={(params) => (
          <TextField {...params} label="Select Location" />
        )}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Appointment Date"
          disabled={formData.selectedLocation === null}
          minDate={today}
          maxDate={thirtyDaysLater}
          shouldDisableDate={shouldDisableDate} // Use prop to control disabled dates
          value={appointmentDate}
          onChange={handleDateChange} // Set the date change handler
          slots={{
            openPickerIcon: CalenderIcon,
          }}
        />
      </LocalizationProvider>

      <TextField
        id="name"
        label="Your Name"
        variant="outlined"
        type="text"
        fullWidth
        required
        value={formData.name}
        onChange={handleInputChange}
      />

      <TextField
        id="phone"
        label="Your Phone Number"
        variant="outlined"
        type="tel"
        fullWidth
        required
        value={formData.phone}
        onChange={handleInputChange}
      />

      <TextField
        id="email"
        label="Your Email"
        variant="outlined"
        type="email"
        fullWidth
        required
        value={formData.email}
        onChange={handleInputChange}
      />

      <TextField
        id="message"
        label="Your Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        value={formData.message}
        onChange={handleInputChange}
      />
    </Stack>
  );
}
