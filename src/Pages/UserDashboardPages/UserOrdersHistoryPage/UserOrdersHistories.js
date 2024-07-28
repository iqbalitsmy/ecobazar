import React, { useContext, useEffect, useState } from 'react';
import { orderHistory } from '../../../assets/fakeData/fakeData';
import Pagination from '../../../Shared/Pagination/Pagination ';
import OrderHistory from './OrderHistory';
import { PageNavContext } from '../../../Provider/PageNavProvider';

const UserOrdersHistories = () => {
    const { setPageNav } = useContext(PageNavContext);

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

    // for page navigation
    useEffect(() => {
        setPageNav([{ title: "account", navLink: "/user/dashboard" }, { title: "order history", navLink: "" }]);
    }, [setPageNav]);

    return (
        <div className='w-full min-h-full relative border-solid border-2 border-gray-100 rounded-md mb-6'>
            <p className='m-4 mb-6 text-xl font-medium text-gray-900'>
                Order History
            </p>
            {/* order history */}
            <OrderHistory orders={currentPageData}></OrderHistory>

            {/* Pagination */}
            <div className='absolute bottom-0 left-0 right-0 mb-4'>
                <Pagination currentPage={currentPage} totalPages={Math.ceil(orderHistory.length / itemsPerPage)} onPageChange={handlePageChange} PAGE_RANGE={2} />
            </div>
        </div>
    );
};

export default UserOrdersHistories;