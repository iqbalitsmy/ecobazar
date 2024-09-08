import React, { useContext, useEffect, useState } from 'react';
import Pagination from '../../../Shared/Pagination/Pagination ';
import OrderHistory from './OrderHistory';
import { PageNavContext } from '../../../Provider/PageNavProvider';
import fetchData from '../../../utils/fetchData';
import Spinner from '../../../Shared/Spinner/Spinner';

const UserOrdersHistories = () => {
    const { setPageNav } = useContext(PageNavContext);

    // fetch data
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // pagination part
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const [currentPageData, setCurrentPageData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData(window.location.origin+'/fakeOrders.json');
                setOrders(result);
                setCurrentPageData(() => result.slice(0, itemsPerPage));
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getData();
    }, []);

    // Function to handle page change
    const handlePageChange = (page) => {
        // Calculate the index range for current page
        console.log("re-render");
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, orders.length);

        setCurrentPage(page);
        setCurrentPageData(orders.slice(startIndex, endIndex))
    };

    // for page navigation
    useEffect(() => {
        setPageNav([{ title: "account", navLink: "/user/dashboard" }, { title: "order history", navLink: "" }]);
    }, [setPageNav]);

    if (loading) return <Spinner></Spinner>

    if (error) return <p className='text-center h-[40vh] text-red-400 font-medium text-lg'>Error: {error.message}</p>;

    return (
        <div className='w-full min-h-full relative border-solid border-2 border-gray-100 rounded-md mb-6'>
            <p className='m-4 mb-6 text-xl font-medium text-gray-900'>
                Order History
            </p>
            {/* order history */}
            <OrderHistory orders={currentPageData}></OrderHistory>

            {/* Pagination */}
            <div className='absolute bottom-0 left-0 right-0 mb-4'>
                <Pagination currentPage={currentPage} totalPages={Math.ceil(orders.length / itemsPerPage)} onPageChange={handlePageChange} PAGE_RANGE={2} />
            </div>
        </div>
    );
};

export default UserOrdersHistories;