import React from 'react';
import TopNav from '../Shared/Navigation/TopNav/TopNav';
import MiddleNav from '../Shared/Navigation/MiddleNav/MiddleNav';
import BottomNav from '../Shared/Navigation/BottomNav/BottomNav';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <header className='container mx-auto'>
                <nav>
                    <TopNav></TopNav>
                    <MiddleNav></MiddleNav>
                    <BottomNav></BottomNav>
                </nav>
            </header>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <footer>
                {/* <Newsletter></Newsletter> */}
                <Footer></Footer>
            </footer>

        </>
    );
};

export default Home;