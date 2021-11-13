import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { ListItemButton, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo1 from '../../../images/logo.jpg'


const Navbar = () => {
    const theme = useTheme();
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        logo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right !important',

            }
        },
        mobileNavitem: {
            textDecoration: 'none'
        }
    })
    const { user, logout } = useAuth();
    const { navIcon, navItemContainer, logo, mobileNavitem } = useStyle();
    // console.log(user);
    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button >
                    <ListItemText>
                        <Link style={{ textDecoration: 'none' }} className={mobileNavitem} to="/home"><Button color="inherit">Home</Button></Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText>
                        <Link style={{ textDecoration: 'none' }} className={mobileNavitem} to="/aboutus"><Button color="inherit">About Us</Button></Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText>
                        <Link style={{ textDecoration: 'none' }} className={mobileNavitem} to="/apartments"><Button color="inherit">Apartments</Button></Link>
                    </ListItemText>
                </ListItem>

                {
                    user?.email ?
                        <Box >
                            <ListItem button >
                                <ListItemText>
                                    <Link style={{ textDecoration: 'none' }} className={mobileNavitem} to="/addReview"><Button color="inherit">Add A Review</Button></Link>
                                </ListItemText>
                            </ListItem>
                            <ListItemButton>
                                <Link style={{ textDecoration: 'none' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </Link>
                            </ListItemButton>
                            <ListItemButton>
                                <Link style={{ textDecoration: 'none', backgroundColor: 'green', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">{user.displayName}</Button>
                                </Link>
                            </ListItemButton>
                            <ListItemButton>
                                <Link to='/login' style={{ textDecoration: 'none' }}>
                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </Link>
                            </ListItemButton>

                        </Box>
                        :
                        <ListItemButton>
                            <Link style={{ textDecoration: 'none' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </Link>
                        </ListItemButton>

                }
            </List>
            <Divider />

        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={logo}>
                            <img src={logo1} style={{ borderRadius: '40%', width: '50px', height: '50px', marginRight: '20px' }} alt="Paris" />
                        </Typography>
                        <Typography className={logo} variant="h6" component="div" sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>

                            Online Apartments Sell
                        </Typography>

                        <Box className={navItemContainer}>
                            <Button>
                                <Link to="/home"><Button sx={{ color: 'white' }} color="inherit">Home</Button></Link>
                            </Button>
                            <Button>
                                <Link to="/aboutus"><Button sx={{ color: 'white' }} color="inherit">About Us</Button></Link>
                            </Button>
                            <Button>
                                <Link to="/apartments"><Button sx={{ color: 'white' }} color="inherit">Apartments</Button></Link>
                            </Button>

                            {
                                user?.email ?
                                    <Box style={{ display: 'inline' }}>
                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                            <Button color="inherit">Dashboard</Button>
                                        </NavLink><Button>
                                            <Link to="/addReview"><Button sx={{ color: 'white' }} color="inherit">Add A Review</Button></Link>
                                        </Button>
                                        <Button style={{ backgroundColor: 'green' }} color="inherit">{user.displayName}</Button>
                                        <Button onClick={logout} color="inherit">Logout</Button>
                                    </Box>
                                    :
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                            }
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                <React.Fragment>
                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>

    );
};

export default Navbar;