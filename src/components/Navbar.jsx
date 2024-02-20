import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#172541'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon sx={{fontSize: '2.5rem'}} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} sx={{ fontSize: '1.8rem', fontWeight: 'bold', color: "#00abf0" }}>Opción 1</MenuItem>
            <MenuItem onClick={handleClose} sx={{ fontSize: '1.8rem', fontWeight: 'bold', color: "#00abf0" }}>Opción 2</MenuItem>
            <MenuItem onClick={handleClose} sx={{ fontSize: '1.8rem', fontWeight: 'bold', color: "#00abf0" }}>Opción 3</MenuItem>
          </Menu>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1, color: "#00abf0", fontWeight:'bold'}}>
            BizJeet!
          </Typography>
          <Button color="inherit" sx={{ fontSize: '2rem',fontWeight:'bold'}}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
