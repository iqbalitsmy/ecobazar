import React from 'react';
import category1 from '../../../assets/categories/1.png'
import category2 from '../../../assets/categories/2.png'
import category3 from '../../../assets/categories/3.png'
import category4 from '../../../assets/categories/4.png'
import category5 from '../../../assets/categories/5.png'
import category6 from '../../../assets/categories/6.png'
import category7 from '../../../assets/categories/7.png'
import category8 from '../../../assets/categories/8.png'
import category9 from '../../../assets/categories/9.png'
import category10 from '../../../assets/categories/10.png'
import category11 from '../../../assets/categories/11.png'
import category12 from '../../../assets/categories/12.png'


// Swiper
import { Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const categoriesImgs = [category1, category2, category3, category4, category5, category6, category7, category8, category9, category10, category11, category12]


const TopCategories = () => {
    return (
        <section>
            <h2 className='text-3xl font-bold pb-8 text-center'>Top Categories</h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className='flex flex-wrap gap-4 mySwiper'
            >
                {
                    categoriesImgs.map((categoriesImg, i) => (<SwiperSlide
                        className='p-2 border-solid border-[1px] border-gray-200 hover:border-[#00B207] shadow-sm hover:shadow-lg hover:shadow-green-100 cursor-pointer'
                        key={i}
                    >
                        <img className='p-2' src={categoriesImg} alt="" />
                        <p className='text-center'>Fresh Fruit</p>
                    </SwiperSlide>))
                }
            </Swiper>
        </section>
    );
};

export default TopCategories;