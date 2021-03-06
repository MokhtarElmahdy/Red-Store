import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import React, { useState, useEffect, Fragment } from 'react'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false
            }
        }
        getProducts();

    }, [])
    const Loading = () => {
        return (
            <>
            Loading ...
                {/* <div className="col-md-3">
                    <SkeletonTheme height={350} />
                </div>
                <div className="col-md-3">
                    <SkeletonTheme height={350} />
                </div>
                <div className="col-md-3">
                    <SkeletonTheme height={350} />
                </div>
                <div className="col-md-3">
                    <SkeletonTheme height={350} />
                </div> */}
            </>
        );
    };
    const filterProduct = (cat) =>{
        const updatedList = data.filter( (x) => x.category === cat );
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>


                <Box className="buttons" style={{display: 'flex', justifyContent : 'center' , marginBottom: '15px' , paddingBottom: '15px'}}>
                    <Button variant="outlined"  style={{ marginRight:5 }} onClick={() => setFilter(data)} >All</Button>
                    <Button variant="outlined"  style={{ marginRight:5 }} onClick={() => filterProduct("men's clothing")} >Men 's Clothing</Button>
                    <Button variant="outlined"  style={{ marginRight:5 }} onClick={() => filterProduct("women's clothing")} >Women 's Clothing</Button>
                    <Button variant="outlined"  style={{ marginRight:5 }} onClick={() => filterProduct("jewelery")} >Jewelery</Button>
                    <Button variant="outlined"  style={{ marginRight:5 }} onClick={() => filterProduct("electronics")} >Electronics</Button>
                </Box>
                <Grid container spacing={3} >
                {filter.map((product) => {
                    return (
                            <Grid key={product.id} item md={3} className="col-md-3 mb-4" style={{marginBottom:15}}>
                                <Card className="card h-100 text-center p-4" >
                                    <CardMedia image={product.image} component='img' className="card-img-top" alt={product.title} height='250px'/>
                                    <CardContent className="card-body">
                                        <Typography fontWeight='bold' component='h5' className="card-title">{product.title.substring(0 ,12)}...</Typography>
                                        <Typography  fontWeight='bold'className="card-text">${product.price}</Typography>
                                    </CardContent>
                                        <CardActions>
                                        <NavLink to={`/products/${product.id}`}>
                                          <Button variant='outlined' color='primary'>
                                            Buy Now
                                          </Button>
                                        </NavLink>
                                        </CardActions>
                                </Card>
                            </Grid>
                    )
                  }
                  
                  )
                  
                }
                </Grid>
            </>
        )
    }
    return (
        <Container>
            
                <Grid container>
                    <Grid item xs={12} marginBottom={5}>
                        <Typography variant='h4' textAlign='center' marginBottom={3} fontWeight='bold'>Latest products</Typography>
                        <Grid container>
                            <Grid item xs={5} ></Grid>
                            <Grid item xs={2} > <Divider/> </Grid>
                            <Grid item xs={5} ></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                    {loading ? <Loading /> : <ShowProducts />}
               
            
        </Container>
    )
}

export default Products