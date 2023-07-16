import React from 'react';
import Banner from '../components/ui/Banner';
import Books from '../components/ui/Books';
import Footer from '../components/ui/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='px-5 lg-px-10'>

                <Books />
            </div>
            <Footer />
        </div>
    );
};

export default Home;