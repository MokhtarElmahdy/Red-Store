import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import '../App.css'
const pages = ['home', 'about', 'products' , 'contact' , 'register' ];
const checkPath = (e) =>{
  if (e === 'home')
    return('')
  else 
  return(e)
}
const HeaderComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
<>
      <Container maxWidth="lg">
<AppBar position="static"  elevation={0} color='transparent'>

        <Toolbar disableGutters>
        
          <img src='/assets/logo.png' className='logo'/>
        
        
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}} className="right">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
            
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              
            >
                <MenuItem  onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" > Home </Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" > About </Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" > Products </Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" > Contact </Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" > Register </Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="right">
            
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}><NavLink to='/' className='nav-link'> home </NavLink></Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}><NavLink to='/about' className='nav-link'> about </NavLink></Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}><NavLink to='/products' className='nav-link'> products </NavLink></Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}><NavLink to='/contact' className='nav-link'> contact </NavLink></Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}><NavLink to='/register' className='nav-link'> register </NavLink></Button>
            
          </Box>

        </Toolbar>


        {/* <CarouselComponent/> */}



    </AppBar>
      </Container>
      
      </>
  );
};
export default HeaderComponent;

