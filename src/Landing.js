import React from 'react';

// Components
import Navbar from './components/shared/Navbar';
import Store from './components/Store';
import Footer from './components/shared/Footer';

const Landing = () => {
    return (
        <>
            <Navbar />
            <Store />
            <Footer />
        </>
    );
};

export default Landing;