import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import fetchData from '../../utils/fetchData';
import Spinner from '../Spinner/Spinner';
import { BadgeContext } from '../../Provider/BadgeProvider';

const CartDrawer = ({ open, setOpen }) => {
    // get length of wishlist and cart products
    const { updateBadgeDataFromLocalStorage } = useContext(BadgeContext);

    const [addToCartsData, setAddToCartsData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // total price
    const totalProductsPrice = (cartDetails) => {
        setTotalPrice(cartDetails.reduce((accumulator, item) => (item.productQuantity * item.newPrice) + accumulator, 0));
    }

    // get addToCart products details
    useEffect(() => {
        console.log("Open")
        const getData = async () => {
            try {
                const storedProducts = JSON.parse(localStorage.getItem("addToCartData"));
                if (storedProducts) {
                    const result = await fetchData(window.location.origin+'/fakeJsonData.json');
                    // find addToCart products based on id
                    let resultMap = {};

                    // Create a hash map of result items by their _id
                    for (let i = 0; i < result.length; i++) {
                        resultMap[result[i]._id] = result[i];
                    }
                    // Iterate through storedProducts and find matching products in resultMap
                    let cartDetails = [];
                    for (let i = 0; i < storedProducts.length; i++) {
                        let product = resultMap[storedProducts[i]._id];
                        if (product) {
                            cartDetails.push({
                                ...product,
                                productQuantity: storedProducts[i].productQuantity
                            });
                        }
                    }

                    // total price
                    totalProductsPrice(cartDetails);
                    setAddToCartsData(cartDetails)
                } else {
                    setTotalPrice(0);
                    setAddToCartsData([])
                }
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getData();
        updateBadgeDataFromLocalStorage();
    }, [open, updateBadgeDataFromLocalStorage]);


    // delete data
    const handleDeleteAddToCartData = (_id) => {
        const newAddToCartsData = addToCartsData.filter((d) => d._id !== _id)

        setAddToCartsData(newAddToCartsData);
        // total price
        totalProductsPrice(newAddToCartsData);

        // new data is empty
        if (newAddToCartsData.length === 0) return localStorage.removeItem('addToCartData');
        // update store data
        return localStorage.setItem("addToCartData", JSON.stringify(newAddToCartsData));
    }

    if (loading) return <Spinner></Spinner>

    if (error) return <p>Error loading data: {error.message}</p>;

    return (
        <Drawer
            anchor={"right"}
            sx={{
                width: ""
            }}
            open={open} onClose={() => setOpen(false)}
        >
            <div className='px-4 py-2 lg:p-10 h-full w-[75vw] sm:w-[50vw] lg:w-[35vw] min-w-fit'>
                {/* <div className='pt-10 relative h-full'> */}
                <div className='h-[6%] pb-2 flex justify-between items-center text-xl font-medium'>
                    <h3>Shopping Card ({addToCartsData.length})</h3>
                    <button
                        className='cursor-pointer font-light'
                        type='button'
                        onClick={() => setOpen(false)}
                    >
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
                <div className='overflow-auto h-[75%]'>
                    {
                        (addToCartsData.length === 0) ? (
                            <div className='grid place-content-center gap-4 h-[30vh]'>
                                <h3>There are no items in this cart</h3>
                                <a
                                    href='/products/'
                                    className='py-2 px-4 text-center font-semibold rounded-full text-gray-900 bg-gray-200 hover:bg-gray-100'
                                >
                                    Return to shop
                                </a>
                            </div>
                        ) : (
                            addToCartsData && addToCartsData.map(({
                                _id,
                                title,
                                newPrice,
                                thumbnail,
                                productQuantity,
                            }, i) => (
                                <div key={_id} className='px-4'>
                                    <div className='flex justify-between items-center gap-2'>
                                        <div className='flex items-center gap-[2px] sm:gap-1 md:gap-2'>
                                            <a href={`/products/${_id}`}>
                                                <figure className='h-24 w-24 grid place-content-center'>
                                                    <img src={thumbnail} alt="" />
                                                </figure>
                                            </a>
                                            <div className='text-sm font-normal'>
                                                <a href={`/products/${_id}`}>
                                                    <p className='hover:text-primary-color'>{title}</p>
                                                </a>
                                                <p className='text-gray-500'>{productQuantity} kg X <span className='font-semibold text-black'>${(newPrice).toFixed(2)}</span></p>
                                            </div>
                                        </div>
                                        <button
                                            className='p-1 px-2 text-sm text-gray-600 border-solid border-gray-200 border-2 rounded-full cursor-pointer block'
                                            type='button'
                                            onClick={() => handleDeleteAddToCartData(_id)}
                                        >
                                            <FontAwesomeIcon icon={faX} />
                                        </button>
                                    </div>
                                    <hr className='border-solid border-gray-100 border-0 border-t-2' />
                                </div>
                            ))
                        )
                    }
                </div>
                <div className='mb-4 h-[18%] pt-4'>
                    <div className='flex justify-between mb-4'>
                        <p>{addToCartsData.length} Product</p>
                        <p className='font-semibold'>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className=''>
                        <div className='mb-4'>
                            <a
                                href='/products/checkout'
                                className='py-[12px] px-1 font-semibold text-white w-full rounded-full bg-[#00B207] hover:bg-green-600 block text-center'
                            >
                                Checkout
                            </a>
                        </div>
                        <div>
                            <a
                                href='/products/shopping-cart/'
                                className='py-[12px] px-1 font-semibold w-full rounded-full text-[#00B207] hover:bg-green-100 bg-green-50 block text-center'
                            >
                                Go To Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default CartDrawer;