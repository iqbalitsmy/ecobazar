import React, { Suspense, useState } from 'react';
import TopNav from '../Shared/Navigation/TopNav/TopNav';
import MiddleNav from '../Shared/Navigation/MiddleNav/MiddleNav';
import BottomNav from '../Shared/Navigation/BottomNav/BottomNav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Newsletter from '../Shared/Newsletter/Newsletter';
import Spinner from '../Shared/Spinner/Spinner';
import CategoryDrawer from '../Shared/CategoryDrawer/CategoryDrawer';
import CartDrawer from '../Shared/CartDrawer/CartDrawer';


const UserLayout = () => {
    // for menu drawer
    const [navOpen, setNavOpen] = useState(false);
    // for cart drawer
    const [cartOpen, setCartOpen] = useState(false);
    // console.log(navOpen)
    return (
        <>
            <header className='container mx-auto'>
            <nav>
                    <TopNav></TopNav>
                    <MiddleNav></MiddleNav>
                    <BottomNav navOpen={navOpen} setNavOpen={setNavOpen} cartOpen={cartOpen} setCartOpen={setCartOpen}></BottomNav>
                    <CategoryDrawer open={navOpen} setOpen={setNavOpen} ></CategoryDrawer>
                    {/* cart drawer */}
                    <CartDrawer open={cartOpen} setOpen={setCartOpen}></CartDrawer>
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