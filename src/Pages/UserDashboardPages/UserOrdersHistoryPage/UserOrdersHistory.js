import React from 'react';
import { Link } from 'react-router-dom';

const UserOrdersHistory = () => {
    return (
        <div className='w-full border-solid border-2 border-gray-100 rounded-md mb-6'>
            <p className='m-4 mb-6 text-xl font-medium text-gray-900'>
                Order History
            </p>
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
                    <tr className='text-gray-800'>
                        <td className='text-sm py-3 pl-4'>#{"738"}</td>
                        <td className='text-sm py-3'>8 Sep, 2020</td>
                        <td className='text-sm py-3'><span className='font-medium'>$135.00 </span>(5 Products)</td>
                        <td className='text-sm py-3'>Processing</td>
                        <td className='text-center'>
                            <Link className='text-[#00B207] font-medium'>View Details</Link>
                        </td>
                    </tr>
                    <tr className='text-gray-800'>
                        <td className='text-sm py-3 pl-4'>#{"738"}</td>
                        <td className='text-sm py-3'>24 May, 2020</td>
                        <td className='text-sm py-3'><span className='font-medium'>$25.00 </span>(1 Products)</td>
                        <td className='text-sm py-3'>on the way</td>
                        <td className='text-center'>
                            <Link className='text-[#00B207] font-medium'>View Details</Link>
                        </td>
                    </tr>
                    <tr className='text-gray-800'>
                        <td className='text-sm py-3 pl-4'>#{"738"}</td>
                        <td className='text-sm py-3'>22 Oct, 2020</td>
                        <td className='text-sm py-3'><span className='font-medium'>$250.00 </span>(4 Products)</td>
                        <td className='text-sm py-3'>Completed</td>
                        <td className='text-center'>
                            <Link className='text-[#00B207] font-medium'>View Details</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserOrdersHistory;