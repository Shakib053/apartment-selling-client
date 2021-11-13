import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';
import { useLocation } from 'react-router';



const MyOrders = () => {

    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    const location = useLocation();
    useEffect(() => {
        const url = 'http://localhost:5000/orders';
        fetch(url)
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])

    const myOrders = allOrders.filter(td => td.email == user.email);

    return (
        <>
            <Dashboard></Dashboard>
            <div>
                {
                    myOrders.map(myOrder => <Order myOrder={myOrder} location={location}></Order>)
                }
            </div>
        </>
    );
};

export default MyOrders;