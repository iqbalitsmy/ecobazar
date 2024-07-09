import React, { Suspense, useState } from 'react';
import TopNav from '../Shared/Navigation/TopNav/TopNav';
import MiddleNav from '../Shared/Navigation/MiddleNav/MiddleNav';
import BottomNav from '../Shared/Navigation/BottomNav/BottomNav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Newsletter from '../Shared/Newsletter/Newsletter';
import Spinner from '../Shared/Spinner/Spinner';
import CategoryDrawer from '../Shared/CategoryDrawer/CategoryDrawer';


const UserLayout = () => {
    // for menu drawer
    const [open, setOpen] = useState(false);
    // console.log(open)
    return (
        <>
            <header className='container mx-auto'>
                <nav>
                    <TopNav></TopNav>
                    <MiddleNav></MiddleNav>
                    <BottomNav open={open} setOpen={setOpen}></BottomNav>
                    <CategoryDrawer open={open} setOpen={setOpen} ></CategoryDrawer>
                </nav>
            </header>
            <main className='container mx-auto'>
                <Suspense fallback={<Spinner></Spinner>}>
                    <Outlet></Outlet>
                </Suspense>
            </main>
            <footer>
                <Newsletter></Newsletter>
                <Footer></Footer>
            </footer>

        </>
    );
};

export default UserLayout;