import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService.js/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedService/>
            <MakeAppoinment/>
            <Testimonials/>
            <Blog/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;