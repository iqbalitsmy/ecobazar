import React from 'react';
import TopNav from '../Shared/Navigation/TopNav/TopNav';
import MiddleNav from '../Shared/Navigation/MiddleNav/MiddleNav';
import BottomNav from '../Shared/Navigation/BottomNav/BottomNav';
import Feature from '../Components/Home/Feature/Feature';
import HeaderSection from '../Components/Home/HeaderSection/HeaderSection';
import FeaturedProducts from '../Components/Home/FeaturedProducts/FeaturedProducts';
import TopCategories from '../Components/Home/TopCategories/TopCategories';
import AdvertisementBanners from '../Components/Home/AdvertisementBanners/AdvertisementBanners';
import NewestProducts from '../Components/Home/NewestProducts/NewestProducts';
import Newsletter from '../Components/Home/Newsletter/Newsletter';
import Footer from '../Shared/Footer/Footer';

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
            <main className=''>
                <FeaturedProducts></FeaturedProducts>
                <TopCategories></TopCategories>
                <AdvertisementBanners></AdvertisementBanners>
                <NewestProducts></NewestProducts>
            </main>
            <footer>
                <Newsletter></Newsletter>
                <Footer></Footer>
            </footer>

        </>
    );
};

export default Home;