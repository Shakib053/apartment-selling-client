import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import ShowProperties from '../ShowProperties/ShowProperties';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ShowProperties></ShowProperties>
            <Reviews></Reviews>
            <Footer></Footer>


        </div>
    );
};

export default Home;