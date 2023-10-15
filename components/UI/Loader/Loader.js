import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress className='text-[#201F54]' size="5rem" />
    </Box>
  );
}