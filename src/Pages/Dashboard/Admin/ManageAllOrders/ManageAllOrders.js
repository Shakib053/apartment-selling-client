import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Dashboard from '../../Dashboard/Dashboard';
import Order from '../../Order/Order';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const location = useLocation();
    useEffect(() => {
        const url = 'http://localhost:5000/orders';
        fetch(url)
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])
    return (
        <>
            <Dashboard></Dashboard>

            <div>
                {
                    allOrders.map(myOrder => <Order myOrder={myOrder} location={location}></Order>)
                }
            </div>
        </>
    )
};

export default ManageAllOrders;