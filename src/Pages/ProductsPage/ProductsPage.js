import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Box, FormControlLabel, Radio, Rating, Slider } from '@mui/material';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import Pagination from '../../Shared/Pagination/Pagination ';
import MiniProductCard from '../../Components/Home/MiniProductCard/MiniProductCard';
import adBanner from '../../assets/banner/bannar-produc-page.png'
import axios from 'axios';
import Spinner from '../../Shared/Spinner/Spinner';
import { PageNavContext } from '../../Provider/PageNavProvider';


const allCategories = ["Fresh Fruit", "Vegetables", "Cooking", "Snacks", "Beverages", "Beauty & Health", "Bread & Bakery"]


const ProductsPage = () => {
    // categories toggle
    const [categoriesToggle, setCategoriesToggle] = useState({
        categoryToggle: false,
        priceToggle: false,
        ratingToggle: false,
        popularTagToggle: false,
    });

    // for page navigation
    const { setPageNav } = useContext(PageNavContext);

    // fetch data
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // All Categories
    const [selectedCategories, setSelectedCategories] = useState('All Categories');
    // price slider
    const [priceRange, setPriceRange] = useState([0, 100]);
    // filter by rating
    const [ratingFilter, setRatingFilter] = useState([]);
    // sort by
    const [sortBy, setSortBy] = useState('latest');
    // filter by popular tag
    const [popularTag, setPopularTag] = useState(['Fresh Fruit', "Vegetables"]);

    // pagination part
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    // fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/fakeJsonData.json');
                const products = response.data;
                setAllProducts(products);

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    // categories and filter products
    const filteredProducts = useMemo(() => {
        let products = allProducts;
        // category filtering
        if (selectedCategories !== 'All Categories') {
            products = products.filter(product => product.category === selectedCategories);
        }
        // price filtering
        if (priceRange[0] !== 0 || priceRange[1] !== 100) {
            products = products.filter(product => product.newPrice >= priceRange[0] && product.newPrice <= priceRange[1]);
        }
        // rating filtering
        if (ratingFilter.length > 0) {
            products = products.filter(product => ratingFilter.includes(Math.floor(product.rating)));
        }
        // sort by
        switch (sortBy) {
            case 'price-low-to-high':
                products = products.sort((a, b) => a.newPrice - b.newPrice);
                break;
            case 'price-high-to-low':
                products = products.sort((a, b) => b.newPrice - a.newPrice);
                break;
            // sort by number of sales
            case 'top-sales':
                products = products.sort((a, b) => b.sales - a.sales);
                break;
            // sort by date of add
            default:
                products = products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                break;
        }
        // filter by Popular Tag
        if (popularTag) {
            let p = [];
            for (let i = 0; i < products.length; i++) {
                for (let j = 0; j < products[i].tags.length; j++) {
                    for (let k = 0; k < popularTag.length; k++) {
                        if (products[i].tags[j] === popularTag[k]) {
                            p.push(products[i]);
                            break;
                        }

                    }
                }
            }
            console.log(p)
        }

        return products;
    }, [allProducts, selectedCategories, priceRange, ratingFilter, sortBy, popularTag]);

    // pagination
    const currentPageData = useMemo(() => {
        // Calculate the index range for current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);

        // Get the current page data
        return filteredProducts.slice(startIndex, endIndex);
    }, [filteredProducts, currentPage, itemsPerPage]);


    // Function to handle page change
    const handlePageChange = useCallback((page) => {
        // console.log(page)
        setCurrentPage(page);
    }, []);

    const handlePriceChange = useCallback((event, newRange) => {
        // console.log(newRange)
        setPriceRange(newRange);
    }, []);

    // handle categories Radio btn
    const handleCategoriesBtnChange = useCallback((event) => {
        const categoryName = event.target.value;
        setSelectedCategories(categoryName);
    }, []);

    // categories radio button
    const controlProps = (item) => ({
        checked: selectedCategories === item,
        onChange: handleCategoriesBtnChange,
        value: item,
        name: 'color-radio-button',
        inputProps: { 'aria-label': item },
    });

    // handle rating
    const handleRatingChange = useCallback((event) => {
        const rating = parseInt(event.target.value);
        setRatingFilter(prev => prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]);
    }, []);

    // handle sorting
    const handleSortChange = useCallback((event) => {
        setSortBy(event.target.value);
    }, []);


    // for page navigation
    useEffect(() => {
        setPageNav([{ title: "Categories", navLink: "/products" }, { title: selectedCategories, navLink: "" }]);
    }, [setPageNav, selectedCategories]);

    if (error) return <p>Error: {error.message}</p>;

    return (
        <section className='mb-10 grid grid-cols-12 mt-6 h-full'>
            <aside className='col-start-1 col-end-5 md:col-end-4 xl:col-end-3 px-4 md:px-6'>
                {/* Filter */}
                <div className='inline-block mb-4'>
                    <div className='flex items-center gap-1 text-gray-100 bg-[#00B207] py-1 px-5 rounded-full'>
                        <p className='font-semibold'>Filter</p>
                        <div className='fill-white'>
                            <svg height={"26px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"></path> </g></svg>
                        </div>
                    </div>
                </div>
                {/* All Categories */}
                <div className='mb-3 pb-3 border-1px border-solid border-gray-200 border-0 border-b-2'>
                    <div className='flex items-center justify-between text-xl font-medium mb-3'>
                        <h4 className=''>All Categories</h4>
                        <div className=''>
                            <button type="button" onClick={() => setCategoriesToggle({ ...categoriesToggle, categoryToggle: !categoriesToggle.categoryToggle })}>
                                {
                                    categoriesToggle.categoryToggle ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`overflow-auto transition-all ease-out duration-500 grid gap-1 ${categoriesToggle.categoryToggle ? "max-h-0 opacity-0" : "max-h-fit opacity-100"}`}>
                        {
                            allCategories.map((allCategory, i) => (
                                <div key={i} className=''>
                                    <FormControlLabel
                                        value={allCategories}
                                        control={
                                            <Radio
                                                {...controlProps(allCategory.toLowerCase())}
                                                sx={{
                                                    color: "#ccc",
                                                    '&.Mui-checked': {
                                                        color: "#00B207",
                                                    },
                                                }}
                                            />}
                                        label={allCategory}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* price category */}
                <div className='mb-3 pb-6 border-1px border-solid border-gray-200 border-0 border-b-2'>
                    <div className='flex items-center justify-between text-xl font-semibold mb-4'>
                        <h4>Price</h4>
                        <div>
                            <button type="button" onClick={() => setCategoriesToggle({ ...categoriesToggle, priceToggle: !categoriesToggle.priceToggle })}>
                                {
                                    categoriesToggle.priceToggle ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`overflow-auto transition-all ease-out duration-500 ${categoriesToggle.priceToggle ? "max-h-0 opacity-0" : "max-h-fit opacity-100"}`}>
                        <Box sx={{
                            px: 3,
                            pt: 1,
                        }}>
                            <Slider
                                getAriaLabel={() => "Minimum distance shift"}
                                value={priceRange}
                                onChange={handlePriceChange}
                                // valueLabelDisplay="auto"
                                // getAriaValueText={valuetext}
                                sx={{
                                    color: "#00B207",
                                    height: 6,
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
                        <p className=''><span className='text-gray-500'>Price:</span> {priceRange[0].toLocaleString()}$ <span className=''><FontAwesomeIcon icon={faMinus} /></span> {priceRange[1].toLocaleString()}$</p>
                    </div>
                </div>
                {/* rating category */}
                <div className='mb-3 pb-6 border-1px border-solid border-gray-200 border-0 border-b-2'>
                    <div className='flex items-center justify-between text-xl font-semibold mb-4'>
                        <h4>Rating</h4>
                        <div>
                            <button type="button" onClick={() => setCategoriesToggle({ ...categoriesToggle, ratingToggle: !categoriesToggle.ratingToggle })}>
                                {
                                    categoriesToggle.ratingToggle ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />
                                }
                            </button>
                        </div>
                    </div>
                    <div
                        className={`overflow-auto transition-all ease-out duration-500 space-y-2 ${categoriesToggle.ratingToggle ? "max-h-0 opacity-0" : "max-h-fit opacity-100"}`}
                    >
                        {
                            [5, 4, 3, 2, 1].map((rating, i) => (
                                <div key={i} className='flex items-center gap-1 mb-2'>
                                    <input
                                        type="checkbox"
                                        id={`rating-${rating}`}
                                        value={rating}
                                        checked={ratingFilter.includes(rating)}
                                        onChange={handleRatingChange}
                                        className="checkbox checkbox-sm checkbox-success"
                                    />
                                    <label htmlFor={`rating-${rating}`} className='cursor-pointer'>
                                        <Rating value={rating} readOnly size="small" />
                                    </label>
                                    <p className='text-gray-400'>({allProducts.filter(product => Math.floor(product.rating) === rating).length})</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* popular tag category */}
                <div className='mb-3 pb-6'>
                    <div className='flex items-center justify-between text-xl font-semibold mb-4'>
                        <h4>Popular Tag</h4>
                        <div>
                            <button type="button" onClick={() => setCategoriesToggle({ ...categoriesToggle, popularTagToggle: !categoriesToggle.popularTagToggle })}>
                                {
                                    categoriesToggle.popularTagToggle ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />
                                }
                            </button>
                        </div>
                    </div>
                    <div
                        className={`overflow-auto transition-all ease-out duration-500 flex flex-wrap gap-2 ${categoriesToggle.popularTagToggle ? "max-h-0 opacity-0" : "max-h-fit opacity-100"}`}
                    >
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
                {/* Sale products */}
                <div className=''>
                    <h2 className='text-xl font-semibold mb-4'>Sale Products</h2>
                    {
                        allProducts.slice(0, 3).map((productDetail, i) => (
                            <MiniProductCard key={i} productPage={true} productDetail={productDetail} >
                            </MiniProductCard>
                        ))
                    }
                    {
                        allProducts.slice(0, 3).map((productDetail, i) => (
                            <MiniProductCard key={i} productPage={true} productDetail={productDetail} >
                            </MiniProductCard>
                        ))
                    }
                </div>
            </aside>

            {/* Product list */}
            <aside className='ml-8 col-start-5 md:col-start-4 xl:col-start-3 col-end-13 h-full relative'>
                <div className='flex justify-between items-center mb-8'>
                    <div className="flex items-center space-x-4">
                        <label htmlFor="sort-by" className="text-gray-600">Sort by:</label>
                        <select id="sort-by" className="px-4 py-2 rounded-md border border-solid border-gray-300 bg-transparent focus:outline-none focus:border-green-500">
                            <option value="volvo" className="py-1">Latest</option>
                            <option value="saab" className="py-1">Top Sales</option>
                            <option value="opel" className="py-1">Price Low to High</option>
                            <option value="audi" className="py-1">Price High to Low</option>
                        </select>
                    </div>
                    <div>
                        <p className='text-gray-500'><span className='text-black font-semibold'>{filteredProducts.length}</span> Results Found</p>
                    </div>

                </div>
                {
                    loading ? <Spinner /> : (
                        currentPageData.length === 0 ? (
                            <div className='grid place-content-center min-h-[20vh]'>
                                <h1>There are no products listed this category. </h1>
                            </div>
                        ) : (
                            <>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-10'>
                                    {
                                        currentPageData.map((productDetail, i) => (
                                            <div><ProductCard key={i} productDetail={productDetail}></ProductCard></div>
                                        ))
                                    }
                                </div>
                                <div className='absolute bottom-0 left-0 right-0'>
                                    <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredProducts.length / itemsPerPage)} onPageChange={handlePageChange} PAGE_RANGE={3} />
                                </div>
                            </>
                        )
                    )
                }
            </aside>
        </section>
    );
};

export default ProductsPage;