import React, { useEffect, useState } from 'react';
import SingleProperty from '../SingleProperty/SingleProperty';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const ShowProperties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-refuge-64776.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])
    return (

        <>
            <h1 style={{ textAlign: 'center' }}>Houses For Sell</h1>
            <Box >

                <Grid container spacing={3} sx={{ padding: '12px' }}>

                    {
                        properties.slice(0, 6).map(property =>
                            <Grid item sm={12} md={6} sx={{ textAlign: 'center', padding: '10px' }}>
                                <SingleProperty property={property}></SingleProperty>
                            </Grid>
                        )
                    }


                </Grid>

            </Box>
            <p style={{ textAlign: 'center' }}>
                <Link to='/apartments'>
                    <Button variant="contained">Explore</Button>
                </Link>
            </p>

        </>
    );
};

export default ShowProperties;