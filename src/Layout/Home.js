import React, { createContext, useState } from 'react';
import TopNav from '../Shared/Navigation/TopNav/TopNav';
import MiddleNav from '../Shared/Navigation/MiddleNav/MiddleNav';
import BottomNav from '../Shared/Navigation/BottomNav/BottomNav';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Newsletter from '../Shared/Newsletter/Newsletter';

// Create a context for menu drawer
const DrawerContext = createContext();

const Home = () => {
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
                </nav>
            </header>
            <main className=''>
                <DrawerContext.Provider value={{ open, setOpen }}>
                    <Outlet></Outlet>
                </DrawerContext.Provider>
            </main>
            <footer>
                <Newsletter></Newsletter>
                <Footer></Footer>
            </footer>

        </>
    );
};

export { DrawerContext };
export default Home;