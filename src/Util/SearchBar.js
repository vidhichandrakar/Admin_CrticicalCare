import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = ({mt, placeholder}) => {
  return (
    
      
     <FormControl sx={{width: '23%', mt: mt }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            startAdornment={<InputAdornment ><SearchIcon /></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
              
            }}
            className= "searchBar"
            placeholder= {placeholder}
          />
          </FormControl>
    
   
  );
};

export default SearchBar;
