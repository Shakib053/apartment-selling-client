import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { Redirect, useHistory } from 'react-router';


const AddReview = () => {
    const history = useHistory();
    const { user } = useAuth();
    let name1 = user.displayName;
    const [reviewData, setReviewData] = useState({ name: `${name1}` });


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData[field] = value;
        setReviewData(newReviewData);
    }
    const handleReviewSubmit = e => {

        console.log(reviewData);
        // sending the review data to the server
        fetch('https://peaceful-refuge-64776.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert('review submitted successfully')
                    history.push('/home');
                }
            });
        e.preventDefault();
    }
    return (
        <>
            <Navbar></Navbar>
            <div style={{ textAlign: 'center' }}>
                <Container sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Paper sx={{ mt: 4, p: 5, py: 8 }} >
                                <Typography variant="h3" sx={{ textAlign: 'center' }} gutterBottom>Add A Review</Typography>
                                <form onSubmit={handleReviewSubmit}>

                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Name"
                                        name="name"
                                        type="text"
                                        defaultValue={user.displayName}
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Give your rating between 1 to 5"
                                        name="rating"
                                        type="text"
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Write Your Comment"
                                        type="text"
                                        name="statement"
                                        onBlur={handleOnBlur}
                                        variant="standard" />

                                    <Button sx={{ width: '75%', m: 1, my: 3 }} type="submit" variant="contained">Submit the review</Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer></Footer>
        </>

    );
};

export default AddReview;