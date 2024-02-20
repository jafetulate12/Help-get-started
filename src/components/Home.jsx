import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: '#172541', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="home">
          <div className="home-content">
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
              <Typography component="div" sx={{ color: '#00abf0', fontSize: '4rem', fontWeight: 'bold', padding: '20px', textShadow: '0 0 0.5rem #F3F6F3, 0 0 1rem #F3F6F3, 0 0 2rem #F3F6F3, 0 0 4rem #00abf0, 0 0 8rem #00abf0' }}>
                  THE TAKEOFF OF YOUR BUSINESS STARTS HERE...
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
                <img src="src/components/images/BizJeet.png" alt="BizJeet" style={{ width: '100%', maxWidth: '500px' }} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <footer style={{ backgroundColor: '#172541', color: '#ffffff', textAlign: 'left', padding: '10px', fontSize:'1.7rem' }}>
        &copy; 2024 Anthony Rodriguez / Kendall Araya / Jafeth Ulate. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default Home;
