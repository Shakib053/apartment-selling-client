import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router';


const Purchase = (props) => {
    const { user } = useAuth();
    const { id } = useParams();
    const [apartment, setApartment] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/apartments/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setApartment(data));
    }, []);
    const history = useHistory();
    let name1 = user.displayName;
    const [orderData, setOrderData] = useState({ name: `${name1}` });


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...orderData };
        newReviewData[field] = value;
        setOrderData(newReviewData);
    }
    const handlePurchaseSubmit = e => {
        // sending the purchase data to the server
        const purchaseData = {
            ...orderData,
            apartmentName: apartment?.name,
            apartmentPrice: apartment?.price,
            email: user.email,
            status: 'pending'
        }
        console.log(purchaseData);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert('review submitted successfully')
                    history.push('/myOrders');
                }
            });
        e.preventDefault();
    }


    return (
        <Container sx={{ mt: 4 }}>
            <Paper>
                <Grid container spacing={3} sx={{ px: 3, py: 8 }}>
                    <Grid item md={6} sm={12} sx={{ p: 3 }}>
                        <h3 style={{ textAlign: 'center' }}>Apartment: <span style={{ color: 'goldenrod', fontSize: '2.6rem' }}>{apartment.name}</span></h3>
                        <h5>{apartment.des}</h5>
                        <p>Price : ${apartment.price}</p>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <img src={apartment.img} alt="" srcset="" />
                    </Grid>
                </Grid>


            </Paper>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Paper sx={{ mt: 4, p: 5, py: 4 }} >
                        <Typography variant="h5" sx={{ textAlign: 'center', color: 'primary.main', mb: 8 }} gutterBottom>Please Fill the Form to Purchase the Above Property</Typography>
                        <form onSubmit={handlePurchaseSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Buyer's Name"
                                name="name"
                                type="text"
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Buyer Email Address"
                                name="email"
                                type="email"
                                disabled
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Give details address"
                                name="address"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Mobile Number"
                                type="text"
                                name="mobile"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Any other questions(optional)"
                                type="text"
                                name="informations"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1, my: 3 }} type="submit" variant="contained">Submit</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Purchase;