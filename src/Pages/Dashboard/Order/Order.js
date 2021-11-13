import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Order = ({ myOrder, location }) => {
    const { apartmentName, apartmentPrice, informations, name, mobile, status, address, _id } = myOrder;

    const history = useHistory();
    const handleDelete = id => {
        console.log(id);

        const url = `https://peaceful-refuge-64776.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Are you sure you want to delete it?');
                    history.push(location);
                }
            })
    }
    return (
        <Paper style={{ textAlign: 'center', padding: '20px', margin: '20px' }}>
            <h1>Booking Name : {apartmentName}</h1>
            <h2>Booking Name : {name}</h2>
            <h2>Price: {apartmentPrice}</h2>
            <p>Phone Number : {mobile}</p>
            <p>Address : {address}</p>
            <Button sx={{ mx: 2 }} variant="contained">{status}</Button>
            <Button sx={{ bgcolor: 'error.main' }} onClick={() => handleDelete(_id)} variant="contained">Delete</Button>

        </Paper>
    );
};

export default Order;