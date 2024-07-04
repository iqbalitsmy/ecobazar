import React, { useContext } from 'react';
import HeaderSection from '../../Components/Home/HeaderSection/HeaderSection';
import Feature from '../../Components/Home/Feature/Feature';
import FeaturedProducts from '../../Components/Home/FeaturedProducts/FeaturedProducts';
import TopCategories from '../../Components/Home/TopCategories/TopCategories';
import AdvertisementBanners from '../../Components/Home/AdvertisementBanners/AdvertisementBanners';
import NewestProducts from '../../Components/Home/NewestProducts/NewestProducts';
import { DrawerContext } from '../../Layout/Home';

const HomePage = () => {
    const { open, setOpen } = useContext(DrawerContext);

    return (
        <>
            <section className='mb-8 container mx-auto'>
                <HeaderSection open={open} setOpen={setOpen}></HeaderSection>
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