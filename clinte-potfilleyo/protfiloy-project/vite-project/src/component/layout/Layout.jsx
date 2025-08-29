import React from 'react';
import AppNevbar from './AppNevbar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>

       <AppNevbar/>
       {props.children}
          <Footer/>

        </>
    );
};

export default Layout;