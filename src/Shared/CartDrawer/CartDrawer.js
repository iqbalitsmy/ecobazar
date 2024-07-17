import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import fetchData from '../../utils/fetchData';
import Spinner from '../Spinner/Spinner';

const CartDrawer = ({ open, setOpen }) => {
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
        const getData = async () => {
            try {
                const storedProducts = JSON.parse(localStorage.getItem("addToCartData"));
                if (storedProducts) {
                    const result = await fetchData('http://localhost:3000/fakeJsonData.json');
                    // find addToCart products based on id
                    let cartDetails = [];
                    for (let i = 0; i < storedProducts.length; i++) {
                        for (let j = 0; j < result.length; j++) {
                            if (storedProducts[i]._id === result[j]._id) {
                                cartDetails.push({
                                    ...result[j],
                                    productQuantity: storedProducts[i].productQuantity
                                })
                                break;
                            }
                        }
                    }
                    // total price
                    totalProductsPrice(cartDetails);
                    setAddToCartsData(cartDetails)
                }
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getData();
    }, [open]);

    // console.log(addToCartsData)

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

            }}
            open={open} onClose={() => setOpen(false)}
        >
            <div className='p-4 lg:p-10 h-full'>
                <div className='pt-10 relative h-full'>
                    <div className='mb-4 flex justify-between items-center text-xl font-medium'>
                        <h3>Shopping Card ({addToCartsData.length})</h3>
                        <button
                            className='cursor-pointer font-light'
                            type='button'
                            onClick={() => setOpen(false)}
                        >
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </div>
                    <div className='overflow-auto'>
                        {
                            addToCartsData && addToCartsData.map(({
                                _id,
                                title,
                                newPrice,
                                thumbnail,
                                productQuantity,
                            }, i) => (
                                <div key={_id}>
                                    <div className='flex justify-between items-center gap-2'>
                                        <div className='flex items-center'>
                                            <figure className='h-24 w-24 grid place-content-center'>
                                                <img src={thumbnail} alt="" />
                                            </figure>
                                            <div className='text-sm font-normal'>
                                                <p>{title}</p>
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
                        }
                    </div>
                    <div className='absolute bottom-0 w-full'>
                        <div className='flex justify-between mb-6'>
                            <p>{addToCartsData.length} Product</p>
                            <p className='font-semibold'>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className=''>
                            <div className='mb-4'>
                                <button
                                    className='py-[12px] px-1 font-semibold text-white w-full rounded-full bg-[#00B207]'
                                    type="button"
                                >
                                    Checkout
                                </button>
                            </div>
                            <div>
                                <button
                                    className='py-[12px] px-1 font-semibold w-full rounded-full text-[#00B207] bg-green-50'
                                    type="button"
                                >
                                    Go To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default CartDrawer;