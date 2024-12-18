import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
// import { SnackbarContext } from '../../Layout/ProductsLayout';
import findProductsById from '../../utils/findProductsById';
import fetchData from '../../utils/fetchData';
import addToCartProducts from '../../utils/useAddToCartData';
import { BadgeContext } from '../../Provider/BadgeProvider';

const WishlistProducts = () => {
    // get length of wishlist and cart products
    const { updateBadgeDataFromLocalStorage } = useContext(BadgeContext);

    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // pagination part
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate the index range for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, wishlistProducts.length);
    // Get the current page data
    const currentPageData = wishlistProducts.slice(startIndex, endIndex);

    // Function to handle page change
    const handlePageChange = (page) => {
        // console.log(page)
        setCurrentPage(page);
    };

    // add to wishlist
    const handleDeleteAddToWishlist = useCallback((_id) => {
        const stored_ids = JSON.parse(localStorage.getItem("addToWishlist"));
        if (stored_ids) {
            const newAddToWishlist = stored_ids.filter((d) => d !== _id);

            // update store data
            localStorage.setItem("addToWishlist", JSON.stringify(newAddToWishlist));
            setLoading(true);

            setWishlistProducts(findProductsById(wishlistProducts, newAddToWishlist));

            // to get length of wishlist and cart products
            updateBadgeDataFromLocalStorage();

            return setLoading(false);
        }
    }, [wishlistProducts, updateBadgeDataFromLocalStorage])

    useEffect(() => {
        const getData = async () => {
            try {
                const stored_ids = JSON.parse(localStorage.getItem("addToWishlist"));
                if (stored_ids) {
                    const result = await fetchData(window.location.origin+'/fakeJsonData.json');
                    // const result = await axios.get('fakeJsonData.json');
                    console.log("result",result)
                    setWishlistProducts(findProductsById(result, stored_ids))
                }
                // to get length of wishlist and cart products
                // updateBadgeDataFromLocalStorage();

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getData();
    }, []);

    // snackbar
    // const { snackbar, setSnackbar } = useContext(SnackbarContext);

    // add to cart
    const handleAddToCartData = useCallback((_id) => {
        addToCartProducts(_id, 1);

        // to get length of wishlist and cart products
        updateBadgeDataFromLocalStorage();

        // setSnackbar([...snackbar, {
        //     _id: snackbar.length + 1,
        //     message: "1 new item(s) have been added to your cart",
        //     type: "success",
        //     isVisible: true,
        // }]);
    }, [updateBadgeDataFromLocalStorage]);

    if (loading) return <Spinner></Spinner>

    if (error) return <p>Error loading data: {error.message}</p>;

    // if wishlist is empty
    if (wishlistProducts.length === 0)
        return (
            <div className='grid place-content-center gap-4 h-[30vh]'>
                <h3>There are no items in wishlist</h3>
                <a
                    href='/products/'
                    className='py-2 px-4 text-center font-semibold rounded-full text-gray-900 bg-gray-200 hover:bg-gray-100'
                >
                    Return to shop
                </a>
            </div>
        )

    return (
        <table className='w-full'>
            <thead>
                <tr className='text-gray-500 uppercase border-solid border-gray-200 border-[1px]'>
                    <th className='font-medium text-sm text-start pl-3 py-2'>Product</th>
                    <th className='font-medium text-sm text-start pl-3 py-2'>price</th>
                    <th className='font-medium text-sm text-start pl-3 py-2'>Stock Status</th>
                    <th className='font-medium text-sm text-start pl-3 py-2'></th>
                </tr>
            </thead>
            <tbody>
                {
                    currentPageData.map((wishlistProduct, i) => (
                        <tr
                            key={i}
                            className='border-solid border-gray-200 border-[1px]'
                        >
                            <td className='flex items-center gap-2 text-start pl-3 my-2'>
                                <img className='h-20 w-auto max-w-24' loading="lazy" src={wishlistProduct.thumbnail} alt="" />
                                <h3>{wishlistProduct.title}</h3>
                            </td>
                            <td className=''>
                                <span className='font-medium'>${wishlistProduct.newPrice.toFixed(2)}</span> <del className='text-gray-400 text-base'>${wishlistProduct.price.toFixed(2)}</del>
                            </td>
                            <td className='text-start font-normal text-sm'>
                                {
                                    wishlistProduct.quantity > 0 ? (
                                        <p className='py-1 px-2 font-normal bg-green-200 rounded-md text-green-900 inline-block'>In Stock</p>
                                    ) :
                                        (
                                            <p className='py-1 px-2 bg-red-200 rounded-md text-red-900 inline-block'>Out of Stock</p>
                                        )
                                }
                            </td>
                            <td >
                                {
                                    <div className='flex items-center justify-center gap-4'>
                                        <button
                                            disabled={wishlistProduct.quantity ? false : true}
                                            className={`py-2 px-4 font-semibold text-sm rounded-full bg-[#00B207] hover:bg-green-600 text-white disabled:bg-gray-200 disabled:text-gray-400`}
                                            type="button"
                                            onClick={() => handleAddToCartData(wishlistProduct._id)}
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            className='px-[5px] border-solid border-gray-200 border-[1px] rounded-full text-gray-600'
                                            onClick={() => handleDeleteAddToWishlist(wishlistProduct._id)}
                                        >
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                }
                            </td>
                        </tr>
                    ))
                }
                {/* share */}
                <tr className='border-solid border-gray-200 border-[1px]'>
                    <td className='flex items-center gap-2 pl-3 py-4'>
                        <p className='text-gray-700 font-normal text-sm'>Share:</p>
                        <div className='p-2 rounded-full hover:bg-[#00B207] fill-black hover:fill-white cursor-pointer'>
                            <svg height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 290">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M205.807,0h-15.694c-43.62,0-79.107,35.488-79.107,79.108v33.386H84.193c-2.761,0-5,2.239-5,5v40c0,2.761,2.239,5,5,5 h26.811V285c0,2.761,2.239,5,5,5h40c2.761,0,5-2.239,5-5V162.494h39.786c2.761,0,5-2.239,5-5v-40c0-2.761-2.239-5-5-5h-39.786 V79.108c0-16.05,13.058-29.108,29.107-29.108h15.694c2.761,0,5-2.239,5-5V5C210.807,2.239,208.568,0,205.807,0z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className='p-2 rounded-full hover:bg-[#00B207] fill-black hover:fill-white cursor-pointer'>
                            <svg height={"20px"} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="7935ec95c421cee6d86eb22ecd12f847">
                                        <path style={{ display: 'inline' }} d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className='p-2 rounded-full hover:bg-[#00B207] fill-black hover:fill-white cursor-pointer'>
                            <svg height={"20px"} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="7935ec95c421cee6d86eb22ecd12951c">
                                        <path style={{ display: 'inline' }} d="M220.646,338.475C207.223,408.825,190.842,476.269,142.3,511.5 c-14.996-106.33,21.994-186.188,39.173-270.971c-29.293-49.292,3.518-148.498,65.285-124.059 c76.001,30.066-65.809,183.279,29.38,202.417c99.405,19.974,139.989-172.476,78.359-235.054 C265.434-6.539,95.253,81.775,116.175,211.161c5.09,31.626,37.765,41.22,13.062,84.884c-57.001-12.65-74.005-57.6-71.822-117.533 c3.53-98.108,88.141-166.787,173.024-176.293c107.34-12.014,208.081,39.398,221.991,140.376 c15.67,113.978-48.442,237.412-163.23,228.529C258.085,368.704,245.023,353.283,220.646,338.475z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className='p-2 rounded-full hover:bg-[#00B207] fill-black hover:fill-white cursor-pointer'>
                            <svg height={"20px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" />
                            </svg>
                        </div>
                    </td>
                    <td>

                    </td>
                    <td>

                    </td>
                    <td>
                        {
                            wishlistProducts.length > 0 && <div className=''>
                                <Pagination currentPage={currentPage} totalPages={Math.ceil(wishlistProducts.length / itemsPerPage)} onPageChange={handlePageChange} PAGE_RANGE={3} />
                            </div>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default WishlistProducts;