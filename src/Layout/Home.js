import React from 'react';
import TopNav from '../Shared/Navigation/TopNav/TopNav';
import MiddleNav from '../Shared/Navigation/MiddleNav/MiddleNav';
import BottomNav from '../Shared/Navigation/BottomNav/BottomNav';
import Feature from '../Components/Home/Feature/Feature';
import HeaderSection from '../Components/Home/HeaderSection/HeaderSection';

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
                    <HeaderSection></HeaderSection>
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