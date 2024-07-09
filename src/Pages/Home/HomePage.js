import React from 'react';
import HeaderSection from '../../Components/Home/HeaderSection/HeaderSection';
import Feature from '../../Components/Home/Feature/Feature';
import FeaturedProducts from '../../Components/Home/FeaturedProducts/FeaturedProducts';
import TopCategories from '../../Components/Home/TopCategories/TopCategories';
import AdvertisementBanners from '../../Components/Home/AdvertisementBanners/AdvertisementBanners';
import NewestProducts from '../../Components/Home/NewestProducts/NewestProducts';

const HomePage = () => {
    return (
        <>
            <section className='mb-10 container mx-auto'>
                <HeaderSection></HeaderSection>
                <Feature></Feature>
            </section>
            <FeaturedProducts></FeaturedProducts>
            <TopCategories></TopCategories>
            <AdvertisementBanners></AdvertisementBanners>
            <NewestProducts></NewestProducts>
        </>
    );
};

export default HomePage;