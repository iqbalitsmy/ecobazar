import React from 'react';
import formattedDateName from '../../../utils/useGetFormatedDate';

const OrderHistory = ({ orders }) => {
    return (
        <table className='w-full mb-8'>
            <thead className='text-left'>
                <tr className='uppercase bg-gray-100 text-gray-700'>
                    <th className='text-xs font-normal py-3 pl-4'>Order ID</th>
                    <th className='text-xs font-normal py-3'>Date</th>
                    <th className='text-xs font-normal py-3'>Total</th>
                    <th className='text-xs font-normal py-3'>Status</th>
                    <th className='text-xs font-normal py-3'></th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order) => (
                        <tr key={order._id} className='text-gray-800'>
                            <td className='text-sm py-3 pl-4'>#{order._id}</td>
                            <td className='text-sm py-3'>{formattedDateName(order.orderDate)}</td>
                            <td className='text-sm py-3'><span className='font-medium'>${order.totalAmount.toFixed(2)}</span> ({order.productList.length} Products)</td>
                            <td className='text-sm py-3 capitalize'>{order.orderStatus}</td>
                            <td className='text-center'>
                                <a href={`/user/dashboard/order-history/${order._id}`} className='text-[#00B207] font-medium'>View Details</a>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default OrderHistory;