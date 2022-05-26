import React from 'react'
import Grid from '@mui/material/Grid';
import '../App.css'
import { Container, Divider, Icon, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/system';
function FooterComponent() {
  return (
    <>
    
    
<Box className='bg-dark text-light main-footer' paddingY={3} borderTop = '1px solid #aaa'>
<Container>

<Grid container >
      <Grid item xs={5}>
        <Typography marginX={2}>Copytight 2020 - Rahul Kumar Sinha</Typography>
        </Grid>
        <Grid item xs={2} sx={{display:'flex',justifyContent: 'space-around'}}>
          <FacebookRoundedIcon/>
          <TwitterIcon/>
          <YouTubeIcon/>
        </Grid>
      <Grid item xs={5}>
        <Typography align='right' marginX={2}>
          Terms &amp; Condition
        </Typography>
      </Grid>
    </Grid>
</Container>
</Box>
</>
  )
}

export default FooterComponent