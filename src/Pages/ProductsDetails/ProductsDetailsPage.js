import React from 'react';
import ProductDetails from '../../Shared/ProductDetails/ProductDetails';
import productDetails from '../../assets/fakeData/fakeData';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const ProductsDetailsPage = () => {
    return (
        <section className='container mx-auto'>
            <div>

            </div>
            <ProductDetails productDetail={productDetails[0]}></ProductDetails>

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
                            <SwiperSlide key={i}>
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