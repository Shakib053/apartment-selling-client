import React from 'react';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SingleProperty = (props) => {
    const { name, des, img, price, _id } = props.property;
    return (
        <Paper sx={{ padding: '20px' }}>
            <h1>Apartment Name : <span style={{ color: 'blue' }}> {name}</span></h1>
            <img src={img} style={{ width: '100%', height: '250px' }} alt="" srcset="" />
            <p> <span style={{ color: 'blue', fontSize: '1.4rem' }}>Descriptions:</span> {des}</p>
            <h4>Price : $ <span style={{ color: 'blue' }}>{price}</span></h4>
            <Link to={`/purchase/${_id}`}>
                <Button variant="contained">Purchase</Button>
            </Link>
        </Paper>

    );
};

export default SingleProperty;