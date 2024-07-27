import React from 'react';
import formattedDateName from '../../../utils/useGetFormatedDate';
import { Link } from 'react-router-dom';

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
                    orders.map((data) => (
                        <tr key={data._id} className='text-gray-800'>
                            <td className='text-sm py-3 pl-4'>#{data.id}</td>
                            <td className='text-sm py-3'>{formattedDateName(data.date)}</td>
                            <td className='text-sm py-3'><span className='font-medium'>${data.totalPrice.toFixed(2)}</span> ({data.numberOfItems} Products)</td>
                            <td className='text-sm py-3'>{data.deliveryStatus}</td>
                            <td className='text-center'>
                                <Link to={`/user/dashboard/order-history/${data._id}`} className='text-[#00B207] font-medium'>View Details</Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default OrderHistory;