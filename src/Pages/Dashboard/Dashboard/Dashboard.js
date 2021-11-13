import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.js'
const drawerWidth = 240;

function Dashboard(props) {
    const { logout, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button >
                    <ListItemText>
                        <Link style={{ textDecoration: 'none' }} to='/home'><Button color="inherit">Home</Button></Link>
                    </ListItemText>
                </ListItem>

                {
                    admin ? <Box>
                        <ListItem button >
                            <ListItemText>
                                <Link style={{ textDecoration: 'none' }} to='/allOrders'><Button color="inherit">Manage All Orders</Button></Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemText>
                                <Link style={{ textDecoration: 'none' }} to='/makeAdmin'><Button color="inherit">Make An Admin</Button></Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemText>
                                <Link style={{ textDecoration: 'none' }} to='/addApartment'><Button color="inherit">Add an Apartment</Button></Link>
                            </ListItemText>
                        </ListItem>
                    </Box> :
                        <Box>
                            <ListItem button >
                                <ListItemText>
                                    <Link style={{ textDecoration: 'none' }} to='/pay'><Button color="inherit">Pay</Button></Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemText>
                                    <Link style={{ textDecoration: 'none' }} to='/myOrders'><Button color="inherit">My Orders</Button></Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemText>
                                    <Link style={{ textDecoration: 'none' }} to="/addReview"><Button color="inherit">Add A Review</Button></Link>
                                </ListItemText>
                            </ListItem>
                        </Box>
                }

                <ListItem button >
                    <ListItemText>
                        <Link style={{ textDecoration: 'none' }} onClick={logout} to="/"><Button color="inherit">Logout</Button></Link>
                    </ListItemText>
                </ListItem>


            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
