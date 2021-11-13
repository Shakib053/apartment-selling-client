import React from 'react';
import banner from '../../../images/banner.jpg'
const Banner = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
            <img style={{ width: '75%' }} src={banner} alt="" srcset="" />
        </div>
    );
};

export default Banner;