import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productDetails from '../../../assets/fakeData/fakeData';
import ProgressTracker from '../../../Components/UserDashboardPages/ProgressTracker';
import { PageNavContext } from '../../../Provider/PageNavProvider';
import { Step, StepLabel, Stepper } from '@mui/material';


const OrderDetails = () => {
    // for page navigation
    const { setPageNav } = useContext(PageNavContext);

    useEffect(() => {
        setPageNav([{ title: "account", navLink: "/user/dashboard" }, { title: "order history", navLink: "/user/dashboard/order-history" }, { title: "order detail", navLink: "" },]);
    }, [setPageNav]);

    return (
        <section className='border-solid border-gray-100 border-2 mb-20'>
            <div className='mb-6 flex justify-between p-4 border-solid border-gray-100 border-2'>
                <div className='flex items-center gap-5'>
                    <h3 className='text-xl font-medium'>Order Details</h3>
                    <ul className='list-disc flex items-center gap-5 text-sm text-gray-700'>
                        <li>April 24, 2021</li>
                        <li>3 Products</li>
                    </ul>
                </div>
                <div className='text-primary-color font-medium'>
                    <Link to={"../"}>Back to List</Link>
                </div>
            </div>
            {/* order all details */}
            <div className='mx-4 mb-8 flex lg:flex-nowrap flex-wrap gap-6'>
                {/* user details */}
                <table className='lg:flex-grow'>
                    <thead className='border-solid border-gray-100 border-2 text-gray-400'>
                        <tr className='text-sm'>
                            <th className='py-3 pl-3 text-left font-normal uppercase'>Billing Address</th>
                            <th className='py-3 pl-3 text-left font-normal uppercase'>Shipping Address</th>
                        </tr>
                    </thead>
                    <tbody className='border-solid border-gray-100 border-2'>
                        <tr>
                            <td className='pl-3 pt-3 pb-5 border-solid border-gray-100 border-0 border-r-2'>
                                <p className='pb-2'>Dainne Russell</p>
                                <p className='text-gray-600 text-sm'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                            </td>
                            <td className='pl-3 pt-3 pb-5'>
                                <p className='pb-2'>Dainne Russell</p>
                                <p className='text-gray-600 text-sm'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='pl-3 pt-3 border-solid border-gray-100 border-0 border-r-2'>
                                <p className='text-gray-400 text-xs uppercase'>Email</p>
                                <p className='text-sm -mb-1'>dainne.ressell@gmail.com</p>
                            </td>
                            <td className='pl-3 pt-3'>
                                <p className='text-gray-400 text-xs uppercase'>Email</p>
                                <p className='text-sm -mb-1'>dainne.ressell@gmail.com</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='pl-3 pt-3 pb-8 border-solid border-gray-100 border-0 border-r-2'>
                                <p className='text-gray-400 text-xs uppercase'>Phone</p>
                                <p className='text-sm'>(671) 555-0110</p>
                            </td>
                            <td className='pl-3 pt-3 pb-8'>
                                <p className='text-gray-400 text-xs uppercase'>Phone</p>
                                <p className='text-sm'>(671) 555-0110</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* order payment details */}
                <div className="w-full lg:max-w-md border-solid border-gray-100 border-2">
                    <div className="border-solid border-gray-100 border-0 border-b-2 text-gray-400 p-4 flex justify-between">
                        <div className='border-solid border-gray-100 border-0 border-r-2 w-full'>
                            <p className="text-gray-400 text-xs uppercase mb-1">Order ID:</p>
                            <p className="text-black">#4152</p>
                        </div>
                        <div className='w-full pl-6'>
                            <p className="text-gray-400 text-xs uppercase mb-1">Payment Method:</p>
                            <p className="text-black">Paypal</p>
                        </div>
                    </div>
                    <div className="text-gray-600 pl-4 py-2 pr-4">
                        <div className="flex justify-between items-center py-3 border-solid border-gray-100 border-0 border-b-2">
                            <span>Subtotal:</span>
                            <span className="font-medium text-right text-black">$365.00</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-solid border-gray-100 border-0 border-b-2">
                            <span>Discount:</span>
                            <span className="font-medium text-right text-black">20%</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-solid border-gray-100 border-0 border-b-2">
                            <span>Shipping:</span>
                            <span className="font-medium text-right text-black">Free</span>
                        </div>
                        <div className="flex justify-between items-center text-lg text-black py-3">
                            <span>Total:</span>
                            <span className="text-right font-semibold text-green-800">$84.00</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* stepper of progress */}
            <div className='mb-8'>
                <ProgressTracker />
            </div>
            {/* order products */}
            <table className='w-full mx-auto mb-8'>
                <thead>
                    <tr className='text-gray-700 bg-gray-100 uppercase text-sm'>
                        <th className='font-normal text-start pl-4 py-3'>Product</th>
                        <th className='font-normal text-start py-3'>price</th>
                        <th className='font-normal text-start py-3'>quantity</th>
                        <th className='font-normal text-start py-3'>subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-sm shadow-sm'>
                        <td className='flex items-center gap-2 text-start border-solid border-gray-100 border-0 border-b-2 pl-4'>
                            <img className='max-h-24 max-w-24' loading="lazy" src={productDetails[0].thumbnail} alt="Product" />
                            <h3 className='text-sm'>{productDetails[0].title}</h3>
                        </td>
                        <td className='border-solid border-gray-100 border-0 border-b-2'>
                            <p>
                                ${productDetails[0].newPrice.toFixed(2)}
                            </p>
                        </td>
                        <td className='text-start border-solid border-gray-100 border-0 border-b-2'>
                            <p>x5</p>
                        </td>
                        <td className='font-medium border-solid border-gray-100 border-0 border-b-2 mr-4'>
                            <p>
                                ${productDetails[0].newPrice.toFixed(2)}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default OrderDetails;