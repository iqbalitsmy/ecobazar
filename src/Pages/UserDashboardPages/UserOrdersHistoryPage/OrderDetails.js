import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProgressTracker from '../../../Components/UserDashboardPages/ProgressTracker';
import { PageNavContext } from '../../../Provider/PageNavProvider';
import fetchData from '../../../utils/fetchData';
import OrderProducts from '../../../Components/OrderDetails/OrderProducts';
import Spinner from '../../../Shared/Spinner/Spinner';

const OrderDetails = () => {
    // for page navigation
    const { setPageNav } = useContext(PageNavContext);
    const { id } = useParams();

    // fetch data
    const [order, setOrder] = useState([]);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const orders = await fetchData(window.location.origin+'/fakeOrders.json');
                const users = await fetchData(window.location.origin+'/fakeUserData.json');
                const order = orders.find(o => o._id === parseInt(id))
                setOrder(order);
                setUser(users.find(u => u._id === order.userId));
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getData();
    }, [id]);

    useEffect(() => {
        setPageNav([{ title: "account", navLink: "/user/dashboard" }, { title: "order history", navLink: "/user/dashboard/order-history" }, { title: "order detail", navLink: "" },]);
    }, [setPageNav]);

    if (loading) return <Spinner></Spinner>

    if (error) return <p className='text-center h-[40vh] text-red-400 font-medium text-lg'>Error: {error.message}</p>;

    return (
        <section className='border-solid border-gray-100 border-[1px] mb-20'>
            <div className='mb-6 flex justify-between p-4 border-solid border-gray-100 border-[1px]'>
                <div className='flex items-center gap-5'>
                    <h3 className='text-xl font-medium'>Order Details</h3>
                    <ul className='list-disc flex items-center gap-5 text-sm text-gray-700'>
                        <li>April 24, 2021</li>
                        <li>{order.productList.length} Products</li>
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
                                <p className='pb-2'>{user.first_name} {user.last_name}</p>
                                <p className='text-gray-600 text-sm'>{order.billingAddress}</p>
                            </td>
                            <td className='pl-3 pt-3 pb-5'>
                                <p className='pb-2'>{user.first_name} {user.last_name}</p>
                                <p className='text-gray-600 text-sm'>{order.shippingAddress}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='pl-3 pt-3 border-solid border-gray-100 border-0 border-r-2'>
                                <p className='text-gray-400 text-xs uppercase'>Email</p>
                                <p className='text-sm -mb-1'>{user.email}</p>
                            </td>
                            <td className='pl-3 pt-3'>
                                <p className='text-gray-400 text-xs uppercase'>Email</p>
                                <p className='text-sm -mb-1'>{user.email}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='pl-3 pt-3 pb-8 border-solid border-gray-100 border-0 border-r-2'>
                                <p className='text-gray-400 text-xs uppercase'>Phone</p>
                                <p className='text-sm'>{user.phone_number}</p>
                            </td>
                            <td className='pl-3 pt-3 pb-8'>
                                <p className='text-gray-400 text-xs uppercase'>Phone</p>
                                <p className='text-sm'>{user.phone_number}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* order payment details */}
                <div className="w-full lg:max-w-md border-solid border-gray-100 border-2">
                    <div className="border-solid border-gray-100 border-0 border-b-2 text-gray-400 p-4 flex justify-between">
                        <div className='border-solid border-gray-100 border-0 border-r-2 w-full'>
                            <p className="text-gray-400 text-xs uppercase mb-1">Order ID:</p>
                            <p className="text-black">#{order._id}</p>
                        </div>
                        <div className='w-full pl-6'>
                            <p className="text-gray-400 text-xs uppercase mb-1">Payment Method:</p>
                            <p className="text-black">{"PayPal"}</p>
                        </div>
                    </div>
                    <div className="text-gray-600 pl-4 py-2 pr-4">
                        <div className="flex justify-between items-center py-3 border-solid border-gray-100 border-0 border-b-2">
                            <span>Subtotal:</span>
                            <span className="font-medium text-right text-black">${order.totalAmount.toFixed(2)}</span>
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
                            <span className="text-right font-semibold text-green-800">${order.totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* stepper of progress */}
            <div className='mb-8'>
                <ProgressTracker step={order.orderStatus}  />
            </div>
            {/* order products */}
            <table className='w-full mx-auto'>
                <thead>
                    <tr className='text-gray-700 bg-gray-100 uppercase text-sm'>
                        <th className='font-normal text-start pl-4 py-3'>Product</th>
                        <th className='font-normal text-start py-3'>price</th>
                        <th className='font-normal text-start py-3'>quantity</th>
                        <th className='font-normal text-start py-3'>subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.productList.map(({ productId, quantity }, i) => (
                            <OrderProducts key={i} productId={productId} quantity={quantity} ></OrderProducts>
                        ))
                    }
                </tbody>
            </table>
        </section>
    );
};

export default OrderDetails;