import React, { useContext, useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import ProductDetails from '../../Shared/ProductDetails/ProductDetails';
import ProductsDes from './ProductsDes';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import { PageNavContext } from '../../Provider/PageNavProvider';
import MiniProductCard from '../../Shared/MiniProductCard/MiniProductCard';

const ProductsDetailsPage = () => {
    const { setPageNav } = useContext(PageNavContext);

    const { id } = useParams();
    // fetch data
    const [productDetails, setProductDetails] = useState([]);
    const [productDetail, setProductDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(window.location.origin+'/fakeJsonData.json');
                setProductDetails(response.data);
                setProductDetail(response.data.find((data) => data._id === parseInt(id)));
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    // for page navigation
    useEffect(() => {
        setPageNav([{ title: "Categories", navLink: "/products" }, { title: productDetail?.category, navLink: `/products/?category=${(productDetail?.category)?.replaceAll("-", " ")}` }, { title: `${productDetail?.title}`, navLink: "" }]);
    }, [setPageNav, productDetail]);


    if (loading) return <Spinner></Spinner>

    if (error) return <p>Error: {error.message}</p>;

    return (
        <section className='px-2 sm:px-0'>
            <div className='mt-8 mb-12 '>
                <div className='flex gap-6 lg:gap-10 mb-8'>
                    <div>
                        <ProductDetails productDetail={{ ...productDetail }}></ProductDetails>
                    </div>
                    <div className='min-w-44 overflow-auto hidden md:block'>
                        <h2 className='text-lg font-semibold mb-3 text-gray-600'>Related Products</h2>
                        <div className='grid gap-2'>
                        {
                            productDetails.slice(0, 4).map((productDetail, i) => (
                                <MiniProductCard key={i} productPage={true} productDetail={productDetail} >
                                </MiniProductCard>
                            ))
                        }
                        </div>
                    </div>
                </div>
                <ProductsDes></ProductsDes>
            </div>
            <div className='mb-6 mx-auto'>
                <div>
                    <h2 className='text-3xl font-bold text-center mb-10'>Related Products</h2>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
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