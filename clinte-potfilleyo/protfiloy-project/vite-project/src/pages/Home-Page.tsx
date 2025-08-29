import React from 'react';
import Layout from '../component/layout/Layout';
import Hero from '../component/hero/Hero';
import About from '../component/about/About';
import Project from '../component/projectes/Project';
import Contact from '../component/contact/Contact';

const HomePage = () => {
    return (
        <Layout>
            <Hero/>
            <About/>
            <Project/>
            <Contact/>
        </Layout>
    );
};

export default HomePage;