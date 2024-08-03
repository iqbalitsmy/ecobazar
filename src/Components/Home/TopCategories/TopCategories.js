import React from 'react';
import category1 from '../../../assets/top-category/vegetables.svg'
import category2 from '../../../assets/top-category/fruits.svg'
import category3 from '../../../assets/top-category/fish.svg'
import category4 from '../../../assets/top-category/meat.svg'
import category5 from '../../../assets/top-category/soft-drink.svg'
import category6 from '../../../assets/top-category/snacks.svg'
import category7 from '../../../assets/top-category/bread-bakery.svg'
import category8 from '../../../assets/top-category/diabetic-food.svg'
import './forSwiper.css'


// Swiper
import { Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const topCategories = [
    { img: category1, title: "Vegetables", link: "products?category=vegetables" },
    { img: category2, title: "Fresh Fruit", link: "products?category=fresh-fruit" },
    { img: category3, title: "River Fish", link: "products?category=fish" },
    { img: category4, title: "Meat", link: "products?category=chicken-and-meat" },
    { img: category5, title: "Water and Drinks", link: "products?category=drink-and-water" },
    { img: category6, title: "Snacks", link: "" },
    { img: category7, title: "Bread & Bakery", link: "products?category=cake-and-bread" },
    { img: category8, title: "Diabetic Food", link: "" }
]


const TopCategories = () => {
    return (
        <section className='mb-8 px-4 sm:px-0 container mx-auto'>
            <h2 className='text-3xl font-bold pb-8 text-center'>Top Categories</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    // clickable: true,
                    // dynamicBullets: true,
                }}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    480: { slidesPerView: 4, spaceBetween: 20 },
                    768: { slidesPerView: 5, spaceBetween: 30 },
                    1024: { slidesPerView: 6, spaceBetween: 30 },
                    1200: { slidesPerView: 8, spaceBetween: 30 },
                }}

                navigation={true}
                modules={[Navigation]}
                className='flex flex-wrap gap-4 mySwiper'
            >
                {
                    topCategories.map(({ img, title, link }, i) => (<SwiperSlide
                        key={i}
                        className='h-44'
                    >
                        <a href={`${link}`}
                            className='border-solid border-[1px] border-gray-200 hover:border-[#00B207] shadow-sm hover:shadow-lg hover:shadow-green-100 hover:text-green-800 cursor-pointer px-2 rounded-md h-44 grid place-content-center'
                        >
                            <img className='pb-2 h-20 w-auto mx-auto' src={img} alt="" />
                            <p className='text-center text-lg font-medium'>{title}</p>
                        </a>
                    </SwiperSlide>))
                }
            </Swiper>
        </section>
    );
};

export default TopCategories;