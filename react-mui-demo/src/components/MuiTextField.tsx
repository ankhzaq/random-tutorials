import { InputAdornment, Stack, TextField, Typography } from '@mui/material';

import React, { useState } from 'react';

export const MuiTextField = () => {
  const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
      <Typography variant='h3'>TEXTFIELDS</Typography>
      <Stack direction='row' spacing={2}>
        <TextField label='name' variant='outlined' />
        <TextField label='name' variant='filled' />
        <TextField label='name' variant='standard' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Small secondary' size='small' color='secondary' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Form Input' required value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'Do not share your password with anyone'} />
        <TextField label='Form Input' helperText='Do not share your password with anyone' />
        <TextField label='password' type='password' />
        <TextField label='disabled' placeholder='input disabled' disabled />
        <TextField label='Read only' InputProps={{ readOnly: true }} value='you can not modify me' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />
        <TextField label='Weight' />
      </Stack>
    </Stack>
  );
}
