import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import fakeData from "../../assets/fakeData";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs"; // Optional: import to handle dates directly
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function InputFields() {
  return (
    <Stack gap="16px" sx={{ width: "100%" }}>
      <Autocomplete
        fullWidth
        options={fakeData}
        renderInput={(params) => (
          <TextField {...params} label="Select a Doctor" />
        )}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Basic date picker" />
      </LocalizationProvider>
      <TextField
        id="location"
        label="Location"
        variant="outlined"
        fullWidth
        required
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
