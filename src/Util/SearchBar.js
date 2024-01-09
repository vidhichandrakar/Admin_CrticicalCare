import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = () => {
  return (
    
      
     <FormControl sx={{width: '23%', mt: 3 }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            startAdornment={<InputAdornment ><SearchIcon /></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
              
            }}
            className= "searchBar"
            placeholder="Search by name"
          />
          </FormControl>
    
   
  );
};

export default SearchBar;