import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { orderHistory } from '../../../assets/fakeData/fakeData';
import Pagination from '../../../Shared/Pagination/Pagination ';
import formattedDateName from '../../../utils/useGetFormatedDate';

const UserOrdersHistory = () => {
    // Define initial state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Change this value according to your requirement
    const [currentPageData, setCurrentPageData] = useState(orderHistory.slice(0, itemsPerPage));

    // Function to handle page change
    const handlePageChange = (page) => {
        // Calculate the index range for current page
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, orderHistory.length);

        setCurrentPage(page);
        setCurrentPageData(orderHistory.slice(startIndex, endIndex))
    };

    return (
        <div className='w-full min-h-full relative border-solid border-2 border-gray-100 rounded-md mb-6'>
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
                    {
                        currentPageData.map((data) => (
                            <tr key={data._id} className='text-gray-800'>
                                <td className='text-sm py-3 pl-4'>#{data.id}</td>
                                <td className='text-sm py-3'>{formattedDateName(data.date)}</td>
                                <td className='text-sm py-3'><span className='font-medium'>${data.totalPrice.toFixed(2)}</span> ({data.numberOfItems} Products)</td>
                                <td className='text-sm py-3'>{data.deliveryStatus}</td>
                                <td className='text-center'>
                                    <Link to={`${data._id}`} className='text-[#00B207] font-medium'>View Details</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='absolute bottom-0 left-0 right-0 mb-4'>
                <Pagination currentPage={currentPage} totalPages={Math.ceil(orderHistory.length / itemsPerPage)} onPageChange={handlePageChange} PAGE_RANGE={2} />
            </div>
        </div>
    );
};

export default UserOrdersHistory;