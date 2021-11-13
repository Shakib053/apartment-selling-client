import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import SingleProperty from '../Home/SingleProperty/SingleProperty';

const Apartments = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-refuge-64776.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <Box >

                <Grid container spacing={3} sx={{ padding: '12px' }}>

                    {
                        properties.map(property =>
                            <Grid item sm={12} md={6} sx={{ textAlign: 'center', padding: '10px' }}>
                                <SingleProperty _id={property._id} property={property}></SingleProperty>
                            </Grid>
                        )
                    }


                </Grid>

            </Box>
            <Footer></Footer>
        </>
    );
};

export default Apartments;