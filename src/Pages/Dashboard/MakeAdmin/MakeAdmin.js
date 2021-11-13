import { Container, Typography, TextField, Button, Paper, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { Redirect, useHistory } from 'react-router';


const MakeAdmin = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    history.push('/dashboard');
                }
            })

        e.preventDefault()
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
                                <form onSubmit={handleAdminSubmit}>

                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Email Address"
                                        email="email"
                                        type="email"
                                        onBlur={handleOnBlur}
                                        variant="standard" />

                                    <Button sx={{ width: '75%', m: 1, my: 3 }} type="submit" variant="contained">Make Admin</Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </div>
            <Footer></Footer>
        </>

    );
};

export default MakeAdmin;