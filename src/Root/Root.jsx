import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';


const Root = () => {
    return (
        <div>
            <Scroll></Scroll>
            <Navbar></Navbar>
            <div className='min-h-screen mt-10'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;