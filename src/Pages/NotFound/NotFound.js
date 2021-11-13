import React from 'react';
import notFound from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
            <img style={{ width: '75%' }} src={notFound}></img>
        </div>
    );
};

export default NotFound;