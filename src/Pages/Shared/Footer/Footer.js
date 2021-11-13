import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from '../../../images/logo.jpg'
import payment from '../../../images/payment.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'lightblue', padding: '20px' }}>
            <Grid container spacing={0}>
                <Grid sx={{ textAlign: 'center', marginTop: '40px' }} item sm={12} md={4}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={logo} alt="" srcset="" />

                        <h2>Apartment Selling</h2>
                    </div>

                </Grid>
                <Grid sx={{ textAlign: 'center', marginTop: '40px' }} item sm={12} md={4}>
                    <h3 >Follow us on the social media</h3>
                    <div >
                        <Link ><i style={{ marginLeft: '10px' }} class="fab fa-facebook-square fa-2x"></i></Link>
                        <Link ><i style={{ marginLeft: '20px' }} class="fab fa-instagram fa-2x"></i></Link>
                        <Link><i style={{ marginLeft: '20px' }} class="fab fa-twitter-square fa-2x"></i></Link>
                        <Link><i style={{ marginLeft: '20px' }} class="fab fa-telegram fa-2x"></i></Link>
                        <Link><i style={{ marginLeft: '20px' }} class="fab fa-youtube fa-2x"></i></Link>
                    </div>

                </Grid>
                <Grid sx={{ textAlign: 'center', marginTop: '40px' }} item sm={12} md={4}>
                    <img sx={{ width: '100%' }} src={payment} alt="" srcset="" />
                </Grid>

            </Grid>
            <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>&copy; <strong>All rights reserved by Apartment Selling 2021</strong></p>
        </Box>
    );
};

export default Footer;