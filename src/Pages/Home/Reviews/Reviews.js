import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = `https://peaceful-refuge-64776.herokuapp.com/reviews`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    // console.log(reviews);
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '50px', color: 'blue' }}>Valuable Customer's Reviews</h1>

            <Grid container spacing={2} sx={{ padding: '12px' }}>

                {
                    reviews.map(review =>
                        <Grid item sm={12} md={4} sx={{ textAlign: 'center', padding: '10px' }}>
                            <SingleReview review={review}> </SingleReview>
                        </Grid>
                    )
                }
            </Grid>
            <p style={{ textAlign: 'center' }}>
                <Link to='/addReview'>
                    <Button variant="contained">Add a Review</Button>
                </Link>
            </p>

        </div>
    );
};

export default Reviews;