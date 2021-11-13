import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import aboutus from '../../../images/aboutus.jpg'

const About = () => {
    return (
        <>
            <Navbar></Navbar>
            <Grid container spacing={3} sx={{ px: 3, py: 8 }}>
                <Grid item md={6} sm={12}>
                    <img style={{ width: '100%' }} src={aboutus} alt="" srcset="" />
                </Grid>
                <Grid item md={6} sm={12}>
                    <h3 >we offer</h3>
                    <h2 ><strong>fast & reliable</strong></h2>
                    <Box sx={{ color: 'warning.main', fontSize: '1.5rem' }}>Apartment selling services to our customers</Box>
                    <p>This Apartmnet Selling Agency is a regional provider,
                        charged with protecting and promoting individual,
                        family and community home through coordination of public and private sector resources.
                        Apartment Selling's service environment is complex, with 180 different
                        funding sources and over 200 State and Federal mandates.
                        The mandates under which Apartment Selling operates require the County
                        to provide for, or to regulate, certain health services.
                        Many also carry specific requirements for staffing, operations, claiming and record-keeping.</p>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ px: 3, py: 3 }}>

                <Grid sx={{ textAlign: 'center', width: 1 }} item md={4} sm={12}>
                    <Paper sx={{ p: 3, height: '300px' }}>
                        <i class="fas fa-mail-bulk fa-3x text-center "></i>
                        <h5 className="card-title">Mail Addresses</h5>
                        <p >info@apartmentselling.org</p>
                        <p >care@apartmentselling.com</p>
                        <p >hr@apartmentselling.com</p>
                    </Paper>
                </Grid>

                <Grid sx={{ textAlign: 'center', width: 1 }} item md={4} sm={12}>
                    <Paper sx={{ p: 3, height: '300px' }}>
                        <i class="fas fa-map-marker-alt fa-3x text-center "></i>
                        <h5 >Our On-Site Address</h5>
                        <p><strong>USA Branch : </strong> Plot 38,Street 39,UpHill Town,
                            NewYork ,USA.</p>
                        <p> <strong>Bangladesh Branch : </strong> Level-3,Monem Business District ,Bir Uttam Avenue, Dhaka,Bangladesh.</p>
                    </Paper>
                </Grid>

                <Grid sx={{ textAlign: 'center', width: 1 }} item md={4} sm={12}>
                    <Paper sx={{ p: 3, height: '300px' }}>
                        <i class="fas fa-tty fa-3x text-center "></i>
                        <h5>Contact Numbers</h5>
                        <p>+01245776621</p>
                        <p>+00824554445</p>
                        <p>+88002145647</p>
                        <p><strong>Availablity : <Box sx={{ color: 'primary.main' }}>Sunday to Friday : 10am to 7 pm </Box></strong> </p>
                    </Paper>
                </Grid>
            </Grid>

            <Footer></Footer>
        </>
    );
};

export default About;