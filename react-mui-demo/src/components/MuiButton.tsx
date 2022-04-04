import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';
import React, { useState } from 'react';

export const MuiButton = () => {
  const [ formats, setFormats ] = useState<string | null>(null);
  const handleFormatChanges = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
    setFormats(updatedFormats);
  }
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
      <Stack direction='row'>
        <ButtonGroup variant='contained'>
          <Button variant='contained'>Left</Button>
          <Button variant='contained'>Center</Button>
          <Button variant='contained'>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant='text'>
          <Button >Left</Button>
          <Button >Center</Button>
          <Button >Right</Button>
        </ButtonGroup>
        <ButtonGroup aria-label='alignment button group' variant='text' orientation='vertical' size='small' color='secondary'>
          <Button onClick={() => alert('left click')}>Left</Button>
          <Button >Center</Button>
          <Button >Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
        <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChanges} size='small' color='success' orientation='vertical' exclusive>
          <ToggleButton value='bold'><FormatBold /></ToggleButton>
          <ToggleButton value='italic'><FormatItalic /></ToggleButton>
          <ToggleButton value='underlined'><FormatUnderlined /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
