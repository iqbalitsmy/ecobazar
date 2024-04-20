import React from 'react';
import TopNav from '../Shared/Navigation/TopNav/TopNav';
import MiddleNav from '../Shared/Navigation/MiddleNav/MiddleNav';
import BottomNav from '../Shared/Navigation/BottomNav/BottomNav';
import Hero from '../Components/Home/Hero/Hero';
import Feature from '../Components/Home/Feature/Feature';

const Home = () => {
    return (
        <>
            <header className='container mx-auto'>
                <nav>
                    <TopNav></TopNav>
                    <MiddleNav></MiddleNav>
                    <BottomNav></BottomNav>
                </nav>
                <section>
                    <Hero></Hero>
                    <Feature></Feature>
                </section>
            </header>
            <main>

            </main>
            <footer>

            </footer>

        </>
    );
};

export default Home;