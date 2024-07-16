import React from 'react';
import ProductNav from '../../Shared/ProductNav/ProductNav';
import productDetails from '../../assets/fakeData/fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = () => {
    return (
        <section className='container mx-auto min-h-[60vh] lg:min-h-screen mb-10'>
            <ProductNav titles={["Shopping Cart"]} newStyle={true}></ProductNav>
            <div className='mt-6'>
                <h1 className='text-center text-[32px] font-semibold mb-6'>My Shopping Cart</h1>
                <div className='flex gap-4 flex-wrap xl:w-[80%] mx-auto'>
                    <div className='flex-grow'>
                        <table className='w-full mx-auto'>
                            <thead>
                                <tr className='text-gray-500 uppercase border-solid border-gray-100 border-2'>
                                    <th className='font-normal text-sm text-start pl-3 py-2'>Product</th>
                                    <th className='font-normal text-sm text-start py-2'>price</th>
                                    <th className='font-normal text-sm text-start py-2'>quantity</th>
                                    <th className='font-normal text-sm text-start py-2'>subtotal</th>
                                    <th className='font-normal text-sm text-start py-2'></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-solid border-gray-100 border-2'>
                                    <td className='flex items-center gap-2 text-start pl-3'>
                                        <img className='max-h-28 w-auto' loading="lazy" src={productDetails[0].thumbnail} alt="" />
                                        <h3>{productDetails[0].title}</h3>
                                    </td>
                                    <td className=''>
                                        <p>
                                            ${productDetails[0].newPrice.toFixed(2)}
                                        </p>
                                    </td>
                                    <td className='text-start'>
                                        <div className='p-[6px] border-solid border-[1px] border-gray-100 flex items-center gap-4 text-gray-600 rounded-full w-fit'>
                                            <button
                                                className='px-[10px] py-[6px] rounded-full bg-gray-100 border-none'
                                                type="button"
                                            >
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                            <button className='text-lg font-semibold' type="button">1</button>
                                            <button
                                                className='px-[10px] py-[6px] rounded-full bg-gray-100 border-none'
                                                type="button">
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className='font-medium'>
                                        <p>
                                            ${productDetails[0].newPrice.toFixed(2)}
                                        </p>
                                    </td>
                                    <td>
                                        <button disabled={productDetails[0].quantity ? false : true} className='px-[5px] border-solid border-gray-200 border-2 rounded-full text-gray-600'>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='mb-8 border-solid border-t-0 rounded-b-md border-gray-100 border-2 px-3 py-3 w-full flex justify-between items-center'>
                            <button
                                className='py-2 px-4 font-semibold rounded-full text-gray-700 bg-gray-100'
                                type="button"
                            >
                                Return to shop
                            </button>
                            <button
                                className='py-2 px-4 font-semibold rounded-full text-gray-700 bg-gray-100'
                                type="button"
                            >
                                Update Cart
                            </button>
                        </div>
                        <div className='border-solid border-gray-100 rounded-md border-2 px-3 py-4 w-full flex gap-4 justify-between items-center'>
                            <label className='font-medium text-xl text-gray-700' htmlFor="">Coupon Code</label>
                            <div className='relative w-full sm:w-4/5 xl:w-2/3'>
                                <input
                                    className='py-2 pl-4 w-11/12 rounded-l-full border-solid border-2 border-gray-100'
                                    style={{
                                        "outline": "none"
                                    }}
                                    type="text"
                                    name="coupon" id="" placeholder='Enter coupon'
                                />
                                <input className='px-4 rounded-3xl font-semibold bg-black hover:bg-gray-800 text-white absolute right-0 top-0 bottom-0 cursor-pointer' type="button" value="Apply Coupon" />
                            </div>
                        </div>
                    </div>
                    <div className='h-fit border-solid border-gray-100 border-2 rounded-md p-6'>
                        <h4 className='text-xl font-medium mb-4'>Cart Total</h4>
                        <div className='flex justify-between items-center text-sm text-gray-700 border-solid border-gray-100 border-0 border-b-2 pb-3 mb-4 '>
                            <p className=''>Subtotal:</p>
                            <p className='font-medium text-black'>$84.00</p>
                        </div>
                        <div className='flex justify-between items-center text-sm text-gray-700 border-solid border-gray-100 border-0 border-b-2 pb-3 mb-4'>
                            <p>Shipping:</p>
                            <p className='font-medium text-black'>Free</p>
                        </div>
                        <div className='flex justify-between items-center text-sm text-gray-700 mb-10'>
                            <p>Total</p>
                            <p className='font-medium text-black'>$84.00</p>
                        </div>
                        <div className='w-full'>
                            <input className='w-full px-6 py-2 rounded-3xl text-base font-semibold bg-primary-color hover:bg-green-500 text-white cursor-pointer' type="button" value="Proceed to checkout" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShoppingCart;