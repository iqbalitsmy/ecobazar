import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Box, FormControlLabel, Radio, Rating, Slider } from '@mui/material';
import productDetails from '../../assets/fakeData/fakeData';
import ProductNav from '../../Shared/ProductNav/ProductNav';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import Pagination from '../../Shared/Pagination/Pagination ';
import MiniProductCard from '../../Components/Home/MiniProductCard/MiniProductCard';
import adBanner from '../../assets/banner/bannar-produc-page.png'


const allCategories = ["Fresh Fruit", "Vegetables", "Cooking", "Snacks", "Beverages", "Beauty & Health", "Bread & Bakery"]

function valuetext(value) {
    return `${value}°C`;
}


const ProductsPage = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [value, setValue] = useState([20, 37]);

    // pagination part
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    // Calculate the index range for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, productDetails.length);
    // Get the current page data
    const currentPageData = productDetails.slice(startIndex, endIndex);

    // Function to handle page change
    const handlePageChange = (page) => {
        console.log(page)
        setCurrentPage(page);
    };

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
        <section className='container mx-auto mb-10'>
            <ProductNav titles={["Category", "Vegetables"]}></ProductNav>
            <div className='grid grid-cols-12 mt-6 h-full'>
                <aside className='col-start-1 col-end-5 md:col-end-4 xl:col-end-3 px-4 md:px-6'>
                    <div className='inline-block mb-4'>
                        <div className='flex items-center gap-1 text-gray-100 bg-[#00B207] py-1 px-5 rounded-full'>
                            <p className='font-semibold'>Filter</p>
                            <div className='fill-white'>
                                <svg height={"26px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"></path> </g></svg>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3 pb-3 border-1px border-solid border-gray-200 border-0 border-b-2'>
                        <div className='flex items-center justify-between text-xl font-semibold mb-3'>
                            <h4 className=''>All Categories</h4>
                            <div className=''>
                                <FontAwesomeIcon icon={faAngleDown} />
                                {/* <FontAwesomeIcon icon={faAngleUp} /> */}
                            </div>
                        </div>
                        <div className='space-y-1'>
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
                            <div className='flex lg:items-center gap-2'>
                                <input className='w-4 h-4 accent-green-600 cursor-pointer' type="checkbox" id="5" name="rating" value="5" />
                                <label className='flex items-center flex-wrap gap-2 cursor-pointer' htmlFor="5">
                                    <Rating name="read-only" size='small' value={5} readOnly />
                                    <span className=''>5.0</span>
                                </label>
                            </div>
                            <div className='flex lg:items-center gap-2'>
                                <input className='w-4 h-4 accent-green-600 cursor-pointer' type="checkbox" id="4" name="rating" value="4" />
                                <label className='flex items-center flex-wrap gap-2 cursor-pointer' htmlFor="4">
                                    <Rating name="read-only" size='small' value={4} readOnly />
                                    <span>4.0 & up</span>
                                </label>
                            </div>
                            <div className='flex lg:items-center gap-2'>
                                <input className='w-4 h-4 accent-green-600 cursor-pointer' type="checkbox" id="3" name="rating" value="3" />
                                <label className='flex items-center flex-wrap gap-2 cursor-pointer' htmlFor="3">
                                    <Rating name="read-only" size='small' value={3} readOnly />
                                    <span>3.0 & up</span>
                                </label>
                            </div>
                            <div className='flex lg:items-center gap-2'>
                                <input className='w-4 h-4 accent-green-600 cursor-pointer' type="checkbox" id="2" name="rating" value="2" />
                                <label className='flex items-center flex-wrap gap-2 cursor-pointer' htmlFor="2">
                                    <Rating name="read-only" size='small' value={2} readOnly />
                                    <span>2.0 & up</span>
                                </label>
                            </div>
                            <div className='flex lg:items-center gap-2'>
                                <input className='w-4 h-4 accent-green-600 cursor-pointer' type="checkbox" id="1" name="rating" value="1" />
                                <label className='flex items-center flex-wrap gap-2 cursor-pointer' htmlFor="1">
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
                        <div className='flex flex-wrap gap-2'>
                            {
                                allCategories.map((allCategori, i) => (<button key={i} className='px-2 py-1 text-sm bg-gray-200 hover:bg-[#00B207] hover:text-white rounded-full inline-block' type="button">{allCategori}</button>))
                            }
                        </div>
                    </div>
                    <div className='h-72 w-full text-center rounded-lg space-y-4 pt-5 mb-6'
                        style={{
                            backgroundImage: `url(${adBanner})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}
                    >
                        <h1 className='text-2xl'><span className='text-4xl font-bold text-[#FF8A00]'>79%</span> Discount</h1>
                        <button className='px-5 py-1 rounded-3xl font-semibold text-green-500 hover:bg-slate-100 ' type="button">Shop Now
                            <svg className='fill-green-500 inline-block pl-2 lg:pl-4' height={"22px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </button>
                    </div>
                    <div className=''>
                        <h2 className='text-xl font-semibold mb-4'>Sale Products</h2>
                        {
                            productDetails.slice(0, 3).map((productDetail, i) => (
                                <MiniProductCard key={i} productPage={true} productDetail={productDetail} >
                                </MiniProductCard>
                            ))
                        }
                        {
                            productDetails.slice(0, 3).map((productDetail, i) => (
                                <MiniProductCard key={i} productPage={true} productDetail={productDetail} >
                                </MiniProductCard>
                            ))
                        }
                    </div>
                </aside>
                <aside className='col-start-5 md:col-start-4 xl:col-start-3 col-end-13 h-full relative'>
                    <div className='flex justify-between items-center mb-8'>
                        <div className="flex items-center space-x-4">
                            <label for="sort-by" className="text-gray-600">Sort by:</label>
                            <select id="sort-by" className="px-4 py-2 rounded-md border border-solid border-gray-300 bg-transparent focus:outline-none focus:border-green-500">
                                <option value="volvo" className="py-1">Latest</option>
                                <option value="saab" className="py-1">Top Sales</option>
                                <option value="opel" className="py-1">Price Low to High</option>
                                <option value="audi" className="py-1">Price High to Low</option>
                            </select>
                        </div>
                        <div>
                            <p className='text-gray-500'><span className='text-black font-semibold'>{productDetails.length}</span> Results Found</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-10'>
                        {
                            currentPageData.map((productDetail, i) => (
                                <div><ProductCard key={i} productDetail={productDetail}></ProductCard></div>
                            ))
                        }
                    </div>
                    <div className='absolute bottom-0 left-0 right-0'>
                        <Pagination currentPage={currentPage} totalPages={Math.ceil(productDetails.length / itemsPerPage)} onPageChange={handlePageChange} PAGE_RANGE={3} />
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default ProductsPage;