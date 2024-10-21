import { Autocomplete, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs"; // Optional: import to handle dates directly
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ArrowDown } from "../../assets/Icons";



export default function InputFields({
  profiles,
  CalenderIcon,
  handleDoctorChange,
  handleInputChange,
  shouldDisableDate,
  appointmentDate,
  formData,
  setAppointmentDate
}) {
  // Restrict to next 30 days
  const today = dayjs();
  const thirtyDaysLater = dayjs().add(30, "day");

  return (
    <Stack gap="16px" sx={{ width: "100%" }}>
      <Autocomplete
        fullWidth
        options={profiles}
        getOptionLabel={(option) => option.name}
        onChange={handleDoctorChange}
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
          shouldDisableDate={shouldDisableDate}
          slots={{
            openPickerIcon: CalenderIcon,
          }}
          value={appointmentDate}
          onChange={(newDate) => setAppointmentDate(newDate)}
        />
      </LocalizationProvider>
      <TextField
        id="location"
        label="Location"
        variant="outlined"
        fullWidth
        value={formData.location}
        InputProps={{
          readOnly: true,
        }}
      />
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
