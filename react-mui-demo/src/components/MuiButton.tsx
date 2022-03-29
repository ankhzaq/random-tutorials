import { Button, IconButton, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>Text (link to google)</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>primary</Button>
        <Button variant='contained' color='secondary'>secondary</Button>
        <Button variant='contained' color='error'>error</Button>
        <Button variant='contained' color='warning'>warning</Button>
        <Button variant='contained' color='info'>info</Button>
        <Button variant='contained' color='success'>success</Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />} disableElevation onClick={() => console.log('hi')} >Send (startIcon prop)</Button>
        <Button variant='contained' endIcon={<SendIcon />} disableRipple>Send (endIcon prop)</Button>
        <IconButton aria-label='send' color='success' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
