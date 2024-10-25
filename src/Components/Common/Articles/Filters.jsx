import { Autocomplete, Container, Stack, TextField, Typography,Box  } from "@mui/material";
import { ArrowDown } from "../../../assets/Icons";

export default function Filters({
  categories,
  selectedCategory,
  handleCategoryChange,
}) {
   
  return (
    <Container sx={{ pt: "80px" }}>
      <Stack sx={{ p: "16px 0px" }} gap="16px" direction="row">
        <TextField fullWidth label="search" size="small" />
        <Box sx={{height:"36px", border:"1px solid red"}}>
            <Typography>Category</Typography>
        </Box>
        <Autocomplete
          fullWidth
          options={categories}
          getOptionLabel={(option) => option.title} // Adjust based on the actual data structure
          value={selectedCategory}
          onChange={handleCategoryChange}
          popupIcon={<ArrowDown color="#727373" size={24} />} // Assuming you have an ArrowDown icon
          renderInput={(params) => (
            <TextField {...params} label="Category" fullWidth size="small" />
          )}
        />
      </Stack>
    </Container>
  );
}
