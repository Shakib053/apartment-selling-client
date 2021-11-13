import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import './SingleReview.css'


const SingleReview = (props) => {
    const { name, statement, rating } = props.review;
    return (
        <Paper sx={{ p: 3 }}>
            <h5>Customer Name : {name}</h5>
            <p>" {statement} "</p>
            <h2>Rating : {rating}</h2>
            <Rating readonly
                initialRating={rating}
                emptySymbol="far fa-star fa-2x icon-color"
                fullSymbol="fas fa-star fa-2x icon-color"
            >

            </Rating>
        </Paper>
    );
};

export default SingleReview;