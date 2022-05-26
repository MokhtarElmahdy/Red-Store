import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import '../App.css'
function CarouselComponent() {
  return (
    <div className='Carousel'>
      <Container>
      <Grid container paddingBottom={20}>
        <Grid item xs={6} sx={{display:{'sm' : 'none' , 'md' : 'flex'} , alignItems : 'center'}}>
          
<Box>
<Typography
          variant="h2" 
          component="p"
          color="textPrimary"
          fontWeight='bold'
          >
          Give Your Workout <br/>A New Style !
          </Typography>

      <br/>
          <Typography
          variant="p" 
          component="p"
          color="textSecondary"
          lineHeight={1.5}          
          >
          Success isn't always about greatness. It's about consistency. Consistent
          hard work gain success. Gretness will come.
          </Typography>
</Box>
          
        </Grid>

        <Grid item xs={6}>
          
      <img src="./assets/image1.png" alt="" className='w-100'/>
        </Grid>


      </Grid>
      </Container>
    </div>
  )
}

export default CarouselComponent