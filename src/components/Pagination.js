import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Box } from '@material-ui/core'

export const Pagination = () => {
  return ( 
    <Box 
        display="flex" 
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={2}
    >
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button href='https://gorest.co.in/public/v1/users?page=1'>Previous</Button>
      <Button href='https://gorest.co.in/public/v1/users?page=2'>Next</Button>
    </ButtonGroup>
    </Box>
    );
}
