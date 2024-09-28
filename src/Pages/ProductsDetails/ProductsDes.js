import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import React, { useState } from 'react';
import Reviewers from '../../Shared/Reviewers/Reviewers';
import Pagination from '../../Shared/Pagination/Pagination ';
import face1 from "../../assets/face/face-1.jpg"
import face2 from "../../assets/face/face-2.avif"
import face3 from "../../assets/face/face-3.avif"
import face4 from "../../assets/face/face-4.avif"

const ratings = [
    {
        star: 5,
        rating: 40
    },
    {
        star: 4,
        rating: 30
    },
    {
        star: 3,
        rating: 20
    },
    {
        star: 2,
        rating: 5
    },
    {
        star: 1,
        rating: 5
    },
]

const reviews = [
    {
        name: "Kristin Watson",
        avatar: face1,
        rating: 3.4,
        time: Date.now() - (30 * 60 * 1000),
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi perspiciatis omnis, delectus quos mollitia maiores. Architecto aspernatur quae odio fuga labore facilis optio nisi!",
    },
    {
        name: "Jane Cooper",
        avatar: face2,
        rating: 3.4,
        time: Date.now() - (34 * 24 * 60 * 60 * 1000),
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi perspiciatis omnis, delectus quos mollitia maiores. Architecto aspernatur quae odio fuga labore facilis optio nisi!",
    },
    {
        name: "Jacob Jones 3",
        avatar: face3,
        rating: 3.4,
        time: Date.now() - (1 * 365.25 * 24 * 60 * 60 * 1000),
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi perspiciatis omnis, delectus quos mollitia maiores. Architecto aspernatur quae odio fuga labore facilis optio nisi!",
    },
    {
        name: "Ralph Edwards 4",
        avatar: face4,
        rating: 3.4,
        time: Date.now() - (1 * 30.44 * 24 * 60 * 60 * 1000),
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi perspiciatis omnis, delectus quos mollitia maiores. Architecto aspernatur quae odio fuga labore facilis optio nisi!",
    },
    {
        name: "Ralph Edwards",
        avatar: face1,
        rating: 3.4,
        time: Date.now() - (1 * 30.44 * 24 * 60 * 60 * 1000),
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi perspiciatis omnis, delectus quos mollitia maiores. Architecto aspernatur quae odio fuga labore facilis optio nisi!",
    },
]

const ProductsDes = () => {

    // Define initial state
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageData, setCurrentPageData] = useState(reviews.slice(0, 2));
    const itemsPerPage = 3; // Change this value according to your requirement

    // Function to handle page change
    const handlePageChange = (page) => {
        // Calculate the index range for current page
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, reviews.length);

        setCurrentPage(page);
        setCurrentPageData(reviews.slice(startIndex, endIndex))
    };

    const handleLoadMoreReviews = () => {
        setCurrentPageData(reviews.slice(0, 3))
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 pt-5 border-solid border-0 border-t-[1px] border-opacity-20 border-gray-500'>
            {/* product description */}
            <div className=''>
                <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Descriptions</h2>
                <div className='text-gray-600 font-normal text-sm text-justify'>
                    <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at quaerat explicabo ullam distinctio natus dolorum assumenda veritatis quasi, ipsa exercitationem. Sint tempore officia esse dicta quidem animi error perspiciatis mollitia consectetur. Ipsa veniam dolores illum pariatur totam minima placeat sequi alias, aliquid nobis, hic suscipit assumenda! Repudiandae at, animi culpa vero porro et nobis dicta iste qui adipisci molestias obcaecati voluptas atque omnis, eveniet ea ducimus, beatae doloribus eaque aspernatur veniam fugiat temporibus voluptates! Soluta maiores molestiae eius dignissimos!</p>
                    <ul className='text-left space-y-2 mb-4'>
                        <li><span className='bg-green-500 px-1 rounded-full text-white mr-1'><FontAwesomeIcon icon={faCheck} /></span>100 g of fresh leaves provides.</li>
                        <li><span className='bg-green-500 px-1 rounded-full text-white mr-1'><FontAwesomeIcon icon={faCheck} /></span>Aliquam ac est at augue volutpat elementum.</li>
                        <li><span className='bg-green-500 px-1 rounded-full text-white mr-1'><FontAwesomeIcon icon={faCheck} /></span>Quisque nec enim eget sapien molestie.</li>
                        <li><span className='bg-green-500 px-1 rounded-full text-white mr-1'><FontAwesomeIcon icon={faCheck} /></span>Proin convallis odio volutpat finibus posuere.</li>
                    </ul>
                    <p>Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. </p>
                </div>
            </div>
            {/* customer feedback */}
            <div>
                <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Customer Feedback</h2>
                <div className='flex flex-col lg:flex-row gap-6 justify-between mb-8'>
                    <div className='lg:mr-14'>
                        <div className='flex items-center gap-4'>
                            <h1 className='text-2xl font-semibold'>3.7</h1>
                            <p className='text-gray-700'>104 rating</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Rating name="read-only" className='' size='small' value={3.7} readOnly precision={0.5} />
                            <div className='text-gray-600'>
                                <p>{3.7} out of 5</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-grow'>
                        {
                            ratings.map(({ rating, star }, i) => {
                                return (
                                    <div key={i} className='flex gap-4 items-center'>
                                        <div>
                                            <Rating name="read-only" size='small' value={star} readOnly precision={0.5} />
                                        </div>
                                        <div className="bg-gray-100 rounded-xl shadow-sm overflow-hidden w-full h-3">
                                            <div className="relative h-full flex items-center justify-center">
                                                <div
                                                    className={`absolute top-0 bottom-0 left-0 rounded-lg bg-[#ff9900]`}
                                                    style={{
                                                        "width": `${rating}%`
                                                    }}
                                                ></div>
                                                <div className="relative text-blue-900 text-xs">{rating}%</div>
                                            </div>
                                        </div>
                                    </div>)
                            }
                            )
                        }
                    </div>
                </div>
                <div className='relative'>
                    {
                        currentPageData.map((data, i) => {
                            return (
                                <Reviewers
                                    key={i}
                                    {...data}
                                />
                            )
                        })
                    }
                    {
                        currentPageData.length <= 2 && currentPage === 1 && (<div>
                            <button
                                className='rounded-xl bg-green-50 hover:bg-green-100 text-green-600 hover:text-green-700 px-5 py-2 font-medium'
                                onClick={handleLoadMoreReviews}
                            >Load More...</button>
                        </div>)
                    }
                    {
                        (currentPageData.length === 3 || currentPage !== 1) && (<div className='absolute right-0'>
                            {/* Pagination component */}
                            <Pagination currentPage={currentPage} totalPages={Math.ceil(reviews.length / itemsPerPage)} onPageChange={handlePageChange} PAGE_RANGE={2} />
                            {/* <Pagination currentPage={currentPage} totalPages={25} onPageChange={handlePageChange} PAGE_RANGE = {2} /> */}
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsDes;