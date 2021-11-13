import { Container, Typography, TextField, Button, CircularProgress, Alert, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/login.PNG'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();


    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }
    console.log(loginData);
    return (
        <Container sx={{ mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Paper sx={{ mt: 0, p: 5, py: 8 }}>
                        <Typography variant="h3" sx={{ textAlign: 'center' }} gutterBottom>Login & Sign Up</Typography>
                        <form
                            onSubmit={handleLoginSubmit}
                        >
                            <TextField
                                sx={{ width: 1, m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: 1, m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: 300, my: 2 }} type="submit" variant="contained">Login</Button>
                            <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ mt: 8, p: 5, py: 8 }}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;