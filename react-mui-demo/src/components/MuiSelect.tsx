import { Box, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
export const MuiSelect = () => {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  }
  const handleMultipleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setCountries(event.target.value);
  }

  return (
    <Stack spacing={4}>
      <Typography variant='h3'>SELECTS</Typography>
      <Box width='250px'>
        <TextField label='Select country' select value={country} onChange={handleChange} fullWidth>
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='US'>USA</MenuItem>
          <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
        <TextField
          label='Multiple countries'
          select value={countries}
          onChange={handleMultipleChange}
          fullWidth
          SelectProps={{
            multiple: true
          }}
          helperText='Please select a country'
          error={!countries.length}
        >
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='US'>USA</MenuItem>
          <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>

  );
}
