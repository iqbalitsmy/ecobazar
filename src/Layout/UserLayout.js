import React from 'react';
import TopNav from '../Shared/Navigation/TopNav/TopNav';
import MiddleNav from '../Shared/Navigation/MiddleNav/MiddleNav';
import BottomNav from '../Shared/Navigation/BottomNav/BottomNav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Newsletter from '../Shared/Newsletter/Newsletter';

const UserLayout = () => {
    return (
        <>
            <header className='container mx-auto'>
                <nav>
                    <TopNav></TopNav>
                    <MiddleNav></MiddleNav>
                    <BottomNav></BottomNav>
                </nav>
            </header>
            <main className='container mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Newsletter></Newsletter>
                <Footer></Footer>
            </footer>

        </>
    );
};

export default UserLayout;