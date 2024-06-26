import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import ProductDetails from '../../Shared/ProductDetails/ProductDetails';
import productDetails from '../../assets/fakeData/fakeData';
import ProductsDes from './ProductsDes';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import ProductNav from '../../Shared/ProductNav/ProductNav';

const ProductsDetailsPage = () => {
    return (
        <section className='container mx-auto'>
            <ProductNav titles={["Category", "Vegetables", "Chinese Cabbage"]}></ProductNav>
            <div className='mt-8 mb-12'>
                <ProductDetails productDetail={productDetails[0]}></ProductDetails>
                <ProductsDes></ProductsDes>
            </div>
            <div className='mb-6 mx-auto'>
                <div>
                    <h2 className='text-3xl font-bold text-center mb-10'>Related Products</h2>
                </div>
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
                            <SwiperSlide className='mb-4' key={i}>
                                <ProductCard productDetail={productDetail}></ProductCard>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>

    );
};

export default ProductsDetailsPage;