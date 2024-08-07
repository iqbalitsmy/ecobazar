import React, { useEffect, useState } from 'react';
import TopNav from '../Shared/Navigation/TopNav/TopNav';
import MiddleNav from '../Shared/Navigation/MiddleNav/MiddleNav';
import BottomNav from '../Shared/Navigation/BottomNav/BottomNav';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Newsletter from '../Shared/Newsletter/Newsletter';
import CategoryDrawer from '../Shared/CategoryDrawer/CategoryDrawer';
import CartDrawer from '../Shared/CartDrawer/CartDrawer';
import { MemoSnackbar } from '../Shared/Snackbar/Snackbar';
import { SnackbarContext } from './ProductsLayout';

const Main = () => {
    // for menu drawer
    const [navOpen, setNavOpen] = useState(false);
    // for cart drawer
    const [cartOpen, setCartOpen] = useState(false);
    // console.log(navOpen)

    // for snackbar
    const [snackbar, setSnackbar] = useState([]);

    useEffect(() => {
        if (snackbar.length > 0) {
            const timer = setTimeout(() => {
                setSnackbar((prev) => prev.slice(1));
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [snackbar]);

    // console.log(snackbar)

    return (
        <>
            <header className='container mx-auto'>
                <nav className=''>
                    <TopNav></TopNav>
                    <MiddleNav></MiddleNav>
                    <BottomNav navOpen={navOpen} setNavOpen={setNavOpen} cartOpen={cartOpen} setCartOpen={setCartOpen}></BottomNav>
                    <CategoryDrawer open={navOpen} setOpen={setNavOpen} ></CategoryDrawer>
                    {/* cart drawer */}
                    <CartDrawer open={cartOpen} setOpen={setCartOpen}></CartDrawer>
                    {/* snackbar */}
                    <div className='fixed top-0 right-0 transform flex flex-col gap-2 z-10'>
                        {
                            snackbar.map((snackbar, i) => (snackbar.isVisible && <MemoSnackbar key={i} snackbar={snackbar}></MemoSnackbar>))
                        }
                    </div>
                </nav>
            </header>
            <main className='container mx-auto'>
                <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
                    <Outlet></Outlet>
                </SnackbarContext.Provider>
            </main>
            <footer>
                <Newsletter></Newsletter>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Main;