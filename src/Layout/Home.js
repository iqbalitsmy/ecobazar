import React from 'react';
import TopNav from '../Shared/Navigation/TopNav/TopNav';
import MiddleNav from '../Shared/Navigation/MiddleNav/MiddleNav';
import BottomNav from '../Shared/Navigation/BottomNav/BottomNav';
import Feature from '../Components/Home/Feature/Feature';
import HeaderSection from '../Components/Home/HeaderSection/HeaderSection';
import FeaturedProducts from '../Components/Home/FeaturedProducts/FeaturedProducts';
import TopCategories from '../Components/Home/TopCategories/TopCategories';

const Home = () => {
    return (
        <>
            <header className='container mx-auto'>
                <nav>
                    <TopNav></TopNav>
                    <MiddleNav></MiddleNav>
                    <BottomNav></BottomNav>
                </nav>
                <section className='mb-8'>
                    <HeaderSection></HeaderSection>
                    <Feature></Feature>
                </section>
            </header>
            <main className='container mx-auto'>
                <FeaturedProducts></FeaturedProducts>
                <TopCategories></TopCategories>
            </main>
            <footer>

            </footer>

        </>
    );
};

export default Home;