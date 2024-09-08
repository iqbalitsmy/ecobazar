import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import ProductCard from '../../../Shared/ProductCard/ProductCard';
import fetchData from '../../../utils/fetchData';
import Spinner from '../../../Shared/Spinner/Spinner';

const NewestProducts = () => {
    // fetch data
    const [productDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getData = async () => {
            try {
                const products = await fetchData(window.location.origin+'/fakeJsonData.json');
                setProductDetails(products.sort((a, b) => new Date(b.dateOfAdd) - new Date(a.dateOfAdd)));
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) return <Spinner></Spinner>

    if (error) return <p className='text-center h-[40vh] text-red-400 font-medium text-lg'>Error: {error.message}</p>;

    return (
        <section className='mb-8 pb-5 container mx-auto'>
            <div className='flex justify-between items-center mb-8 px-4 sm:px-0'>
                <h2 className='text-3xl font-semibold'>Newest Products</h2>
                <a href={"products"} className='text-lg font-medium text-green-500 inline-block'>View All
                    <svg className='fill-green-500 inline-block ml-3' height={"22px"} width={"28px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </a>
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
                            <SwiperSlide className='pb-4' key={i}>
                                <ProductCard productDetail={productDetail}></ProductCard>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default NewestProducts;