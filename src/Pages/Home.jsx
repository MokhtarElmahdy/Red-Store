import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import AboutComponent from '../Components/AboutComponent'
import CarouselComponent from '../Components/CarouselComponent'
import CategoryComponent from '../Components/CategoryComponent'
import ExclusiveComponent from '../Components/ExclusiveComponent'
import FeaturedProduct from '../Components/FeaturedProduct'
import SecondFooterComponent from '../Components/SecondFooterComponent'
import Sponsers from '../Components/Sponsers'
import Testimonial from '../Components/Testimonial'
function Home() {
  return (
<>
      <CarouselComponent/>
      <Container>
        <CategoryComponent/>
        <AboutComponent/>
        <FeaturedProduct/>
      </Container>
      <ExclusiveComponent/>
      <Testimonial/>
      <Sponsers/>


      <SecondFooterComponent/>
</>
  )
}

export default Home