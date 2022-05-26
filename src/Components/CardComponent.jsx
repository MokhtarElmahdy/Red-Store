import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid, Rating } from '@mui/material';
import { Link, Route, Routes , useNavigate} from 'react-router-dom';
export default function CardComponent(props) {
  let navigate = useNavigate()
  const Products = props.Products;
  return (

<>
      <Grid container spacing={2}>
{Products.map( (item , index) =>
<Grid item key={index} xs={12} sm={6} md={4} lg={3} >
  
  <Card    sx={{backgroundImage : "radial-gradient(#fff , #ffd6d6)"}}
 
  >
  <CardActionArea >
  <CardMedia
      component="img"
      image={item.Photo}
      height='400'
      alt="product-1"
      className='w-100'

    />
  <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        
      {item.Title}
      
      </Typography>
      <Rating/>
      <Typography variant="body2" color="text.secondary">
      ${item.Price}
      </Typography>
    </CardContent>


{/* <Routes>
  <Route path={`/${item.Title}`} element={ <p> {item.Title} </p>} />
</Routes> */}
    </CardActionArea>
<Button
onClick={() => {
  navigate(`/ProductDescription`);
}}
>
  Click

</Button>
  </Card>
</Grid>
  
  )
}
      </Grid>
</>
  );
}

