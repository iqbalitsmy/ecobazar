import React, { useState } from 'react';
import ProductNav from '../../Shared/ProductNav/ProductNav';
import productDetails from '../../assets/fakeData/fakeData';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Box, FormControlLabel, Radio, Rating, Slider, colors } from '@mui/material';
import MiniProductCard from '../../Components/Home/MiniProductCard/MiniProductCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Scrollbar } from 'swiper/modules';

import banner1 from '../../assets/advertisement/1.png'
import banner2 from '../../assets/advertisement/2.png'
import banner3 from '../../assets/advertisement/3.png'



const allCategories = ["Fresh Fruit", "Vegetables", "Cooking", "Snacks", "Beverages", "Beauty & Health", "Bread & Bakery"]

function valuetext(value) {
    return `${value}°C`;
}

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

const ProductsPage = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleRadioBtnChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleRadioBtnChange,
        value: item,
        name: 'color-radio-button',
        inputProps: { 'aria-label': item },
    });


    return (
        <section className='container mx-auto'>
            <ProductNav titles={["Category", "Vegetables"]}></ProductNav>
            <div className='flex mt-8 px-4 md:px-6'>
                <aside>
                    <div className='inline-block mb-4'>
                        <div className='flex items-center gap-1 text-gray-100 bg-[#00B207] py-1 px-5 rounded-full'>
                            <p className='font-semibold'>Filter</p>
                            <div className='fill-white'>
                                <svg height={"26px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"></path> </g></svg>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3 pb-3 border-1px border-solid border-gray-200 border-0 border-b-2'>
                        <div className='flex items-center justify-between text-xl font-semibold mb-4'>
                            <h4 className=''>All Categories</h4>
                            <div className=''>
                                <FontAwesomeIcon icon={faAngleDown} />
                                {/* <FontAwesomeIcon icon={faAngleUp} /> */}
                            </div>
                        </div>
                        <div className='space-y-2'>
                            {
                                allCategories.map((allCategori, i) => (
                                    <div key={i} className='flex items-center gap-2'>
                                        <FormControlLabel
                                            value={allCategori}
                                            control={
                                                <Radio
                                                    {...controlProps(allCategori)}
                                                    sx={{
                                                        color: "#ccc",
                                                        '&.Mui-checked': {
                                                            color: "#00B207",
                                                        },
                                                    }}
                                                />}
                                            label={allCategori}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mb-3 pb-6 border-1px border-solid border-gray-200 border-0 border-b-2'>
                        <div className='flex items-center justify-between text-xl font-semibold mb-4'>
                            <h4>Price</h4>
                            <div>
                                <FontAwesomeIcon icon={faAngleDown} />
                                {/* <FontAwesomeIcon icon={faAngleUp} /> */}
                            </div>
                        </div>
                        <Box sx={{}}>
                            <Slider
                                getAriaLabel={() => "Minimum distance shift"}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                sx={{
                                    color: "#00B207",
                                    height: 8,
                                    '& .MuiSlider-thumb': {
                                        backgroundColor: '#fff',
                                        border: '2px solid currentColor',
                                    },
                                    '& .MuiSlider-rail': {
                                        backgroundColor: '#ccc',
                                    }
                                }}
                                disableSwap
                            />
                        </Box>
                        <p className=''><span className='text-gray-500'>Price:</span> 50 <span className=''><FontAwesomeIcon icon={faMinus} /></span> 1,500</p>
                    </div>
                    <div className='mb-3 pb-6 border-1px border-solid border-gray-200 border-0 border-b-2'>
                        <div className='flex items-center justify-between text-xl font-semibold mb-4'>
                            <h4>Rating</h4>
                            <div>
                                <FontAwesomeIcon icon={faAngleDown} />
                                {/* <FontAwesomeIcon icon={faAngleUp} /> */}
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div className='flex items-center gap-2'>
                                <input className='w-4 h-4 accent-green-600 cursor-pointer' type="checkbox" id="5" name="rating" value="5" />
                                <label className='flex items-center gap-2 cursor-pointer' htmlFor="5">
                                    <Rating name="read-only" size='small' value={5} readOnly />
                                    <span className=''>5.0</span>
                                </label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input className='w-4 h-4 accent-green-600 cursor-pointer' type="checkbox" id="4" name="rating" value="4" />
                                <label className='flex items-center gap-2 cursor-pointer' htmlFor="4">
                                    <Rating name="read-only" size='small' value={4} readOnly />
                                    <span>4.0 & up</span>
                                </label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input className='w-4 h-4 accent-green-600 cursor-pointer' type="checkbox" id="3" name="rating" value="3" />
                                <label className='flex items-center gap-2 cursor-pointer' htmlFor="3">
                                    <Rating name="read-only" size='small' value={3} readOnly />
                                    <span>3.0 & up</span>
                                </label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input className='w-4 h-4 accent-green-600 cursor-pointer' type="checkbox" id="2" name="rating" value="2" />
                                <label className='flex items-center gap-2 cursor-pointer' htmlFor="2">
                                    <Rating name="read-only" size='small' value={2} readOnly />
                                    <span>2.0 & up</span>
                                </label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input className='w-4 h-4 accent-green-600 cursor-pointer' type="checkbox" id="1" name="rating" value="1" />
                                <label className='flex items-center gap-2 cursor-pointer' htmlFor="1">
                                    <Rating name="read-only" size='small' value={1} readOnly />
                                    <span>1.0 & up</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3 pb-6'>
                        <div className='flex items-center justify-between text-xl font-semibold mb-4'>
                            <h4>Popular Tag</h4>
                            <div>
                                <FontAwesomeIcon icon={faAngleDown} />
                                {/* <FontAwesomeIcon icon={faAngleUp} /> */}
                            </div>
                        </div>
                        <div className='space-x-2 space-y-2'>
                            {
                                allCategories.map((allCategori, i) => (<button key={i} className='px-4 py-2 bg-gray-200 hover:bg-[#00B207] hover:text-white rounded-full inline-block' type="button">{allCategori}</button>))
                            }
                        </div>
                    </div>
                    <div>
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
                                <div className='h-64 w-full grid lg:grid-cols-2 items-center px-8 lg:px-12 rounded-lg' style={{ backgroundImage: `url(${bannerDetails[0].bg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                    <div className='text-slate-100 space-y-4'>
                                        <h1 className='text-4xl font-bold'>{bannerDetails[0].title}</h1>
                                        <p className='text-[#ccc]'>Starting at <span className='text-white text-lg font-semibold'>$14.99</span></p>
                                        <button className='px-5 py-1 rounded-3xl font-semibold text-green-500 bg-white hover:bg-slate-100 ' type="button">Shop Now
                                            <svg className='fill-green-500 inline-block pl-2 lg:pl-4' height={"22px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className=''>
                        <h2 className='text-xl font-semibold mb-4'>Sale Products</h2>
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
                </aside>
                <aside className='flex-grow'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <label htmlFor="sort-by">Sort by:</label>
                            <select id="sort-by">
                                <option value="volvo">Latest</option>
                                <option value="saab">Top Sales</option>
                                <option value="opel">Price Low to High</option>
                                <option value="audi">Price High to Low</option>
                            </select>
                        </div>
                        <div>
                            <p>{productDetails.length} Results Found</p>
                        </div>
                    </div>
                    <div className=''>
                        {
                            productDetails.map((productDetail, i) => (
                                <ProductCard key={i} productDetail={productDetail}></ProductCard>
                            ))
                        }
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default ProductsPage;