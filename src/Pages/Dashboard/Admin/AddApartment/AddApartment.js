import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Redirect, useHistory } from 'react-router';


const AddApartment = () => {
    const history = useHistory();
    const [apartmentData, setApartmentData] = useState({});


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newApartmentData = { ...apartmentData };
        newApartmentData[field] = value;
        setApartmentData(newApartmentData);
    }
    const handleReviewSubmit = e => {

        console.log(apartmentData);
        // sending the review data to the server
        fetch('https://peaceful-refuge-64776.herokuapp.com/apartments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(apartmentData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert('Data Submitted Successfully')
                    history.push('/home');
                }
            });
        e.preventDefault();
    }
    return (
        <>

            <div style={{ textAlign: 'center' }}>
                <Container sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Paper sx={{ mt: 4, p: 5, py: 8 }} >
                                <Typography variant="h3" sx={{ textAlign: 'center' }} gutterBottom>Add An Apartment</Typography>
                                <form onSubmit={handleReviewSubmit}>

                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Name of the Apartment"
                                        name="name"
                                        type="text"
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="A short Description of the apartment"
                                        name="des"
                                        type="text"
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Give a full image url of the apartment"
                                        type="text"
                                        name="img"
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Give a price"
                                        type="text"
                                        name="price"
                                        onBlur={handleOnBlur}
                                        variant="standard" />

                                    <Button sx={{ width: '75%', m: 1, my: 3 }} type="submit" variant="contained">Add an Apartment</Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>

    );
};

export default AddApartment;