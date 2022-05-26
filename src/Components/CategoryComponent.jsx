import { Container, Grid } from '@mui/material'
import React from 'react'
import CardCategory from './CardCategory'

function CategoryComponent() {
  return (
    
<Grid container spacing={2} maxWidth="lg" marginTop={-15} marginBottom={20} className='CategoryComponent'>
<CardCategory Path='./assets/category-1.jpg'/>
<CardCategory Path='./assets/category-2.jpg'/>
<CardCategory Path='./assets/category-3.jpg'/>

</Grid>
    
  )
}

export default CategoryComponent