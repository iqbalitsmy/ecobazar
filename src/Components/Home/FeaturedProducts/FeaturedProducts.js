import React from 'react';
import banner from '../../../assets/banner/bannar2.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import ProductCard from '../../../Shared/ProductCard/ProductCard';

// fake product data
import productDetails from '../../../assets/fakeData/fakeData';
import MiniProductCard from '../MiniProductCard/MiniProductCard';


const FeaturedProducts = () => {
    return (
        <section className='mb-8 container mx-auto'>
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-3xl font-bold'>Featured Products</h2>
                <button className='text-lg font-medium text-green-500 inline-block' type="button">View All
                    <svg className='fill-green-500 inline-block ml-3' height={"22px"} width={"28px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </button>
            </div>
            <div className='mb-6 mx-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 0 },
                        480: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                        1200: { slidesPerView: 5, spaceBetween: 30 },
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        productDetails.map((productDetail, i) => (
                            <SwiperSlide key={i}>
                                <ProductCard productDetail={productDetail}></ProductCard>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className=''>
                    <h2 className='text-lg font-semibold mb-3 text-gray-600'>Hot Deals</h2>
                    {
                        productDetails.slice(0, 3).map((productDetail, i) => (
                            <MiniProductCard key={i} productDetail={productDetail} >
                            </MiniProductCard>
                        ))
                    }
                    {
                        productDetails.slice(0, 3).map((productDetail, i) => (
                            <MiniProductCard key={i} productDetail={productDetail} >
                            </MiniProductCard>
                        ))
                    }
                </div>
                <div className=''>
                    <h2 className='text-lg font-semibold mb-3 text-gray-600'>Best Seller</h2>
                    {
                        productDetails.slice(0, 3).map((productDetail, i) => (
                            <MiniProductCard key={i} productDetail={productDetail} >
                            </MiniProductCard>
                        ))
                    }
                </div>
                <div className=''>
                    <h2 className='text-lg font-semibold mb-3 text-gray-600'>Top Rated</h2>
                    {
                        productDetails.slice(0, 3).map((productDetail, i) => (
                            <MiniProductCard key={i} productDetail={productDetail} >
                            </MiniProductCard>
                        ))
                    }
                </div>
                {
                    banner && (<div className='h-full'>
                        <img className='h-full object-contain' src={banner} alt="" />
                    </div>)
                }
            </div>
        </section>
    );
};

export default FeaturedProducts;