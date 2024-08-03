import React from 'react';
import banner1 from '../../../assets/advertisement/1.png'
import banner2 from '../../../assets/advertisement/2.png'
import banner3 from '../../../assets/advertisement/3.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Scrollbar } from 'swiper/modules';


const bannerDetails = [
    {
        title: "100% Fresh Cow Milk",
        topWard: "Starting at $14.99",
        offerPercent: "",
        link: "",
        bg: banner1,
    },
    {
        title: "Water & Soft Drink",
        opWard: "Drink Sale",
        offerPercent: "",
        link: "",
        bg: banner2,
    },
    {
        title: "100% Organic",
        opWard: "Drink Sale",
        offerPercent: "",
        link: "",
        bg: banner3,
    }
]

const AdvertisementBanners = () => {
    return (
        <div className='py-12 mb-10 bg-[#EDF2EE]'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                scrollbar={{
                    hide: true,
                }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    480: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                }}
                modules={[Scrollbar]}
                className="mySwiper container mx-auto"
            >
                <SwiperSlide>
                    <div className='h-64 w-full grid lg:grid-cols-2 items-center px-8 lg:px-12 rounded-lg'
                        style={{
                            backgroundImage: `url(${bannerDetails[0].bg})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}
                    >
                        <div className='text-slate-100 grid gap-2'>
                            <h1 className='text-4xl font-bold'>{bannerDetails[0].title}</h1>
                            <p className='text-[#ccc]'>Starting at <span className='text-white text-lg font-semibold'>$14.99</span></p>
                            <button className='px-5 py-1 rounded-3xl font-semibold text-green-500 bg-white hover:bg-slate-100 ' type="button">Shop Now
                                <svg className='fill-green-500 inline-block pl-2 lg:pl-4' height={"22px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-full grid lg:grid-cols-2 items-center px-8 lg:px-12 rounded-lg text-right lg:text-left' style={{ backgroundImage: `url(${bannerDetails[1].bg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className='text-slate-100 col-start-2'>
                            <p className='uppercase text-black'>Drink Sale</p>
                            <h1 className='text-4xl font-bold text-black mb-4'>{bannerDetails[1].title}</h1>
                            <button className='px-5 py-1 rounded-3xl font-semibold text-green-500 bg-white hover:bg-slate-100 ' type="button">Shop Now
                                <svg className='fill-green-500 inline-block pl-2 lg:pl-4' height={"22px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-full grid lg:grid-cols-2 items-center px-8 lg:px-12 rounded-lg' style={{ backgroundImage: `url(${bannerDetails[2].bg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className='text-slate-100 space-y-4'>
                            <p className='uppercase text-black'>100% Organic</p>
                            <h1 className='text-4xl font-bold text-black'>{bannerDetails[2].title}</h1>
                            <button className='px-5 py-1 rounded-3xl font-semibold text-green-500 bg-white hover:bg-slate-100 ' type="button">Shop Now
                                <svg className='fill-green-500 inline-block pl-2 lg:pl-4' height={"22px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AdvertisementBanners;