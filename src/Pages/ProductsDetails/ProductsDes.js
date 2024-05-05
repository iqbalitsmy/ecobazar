import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import React from 'react';
import Reviewers from '../../Shared/Reviewers/Reviewers';

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

const reviewes = [
    {
        name: "Kristin Watson",
        avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
        rating: 3.4,
        time: Date.now() - (30 * 60 * 1000),
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi perspiciatis omnis, delectus quos mollitia maiores. Architecto aspernatur quae odio fuga labore facilis optio nisi!",
    },
    {
        name: "Jane Cooper",
        avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
        rating: 3.4,
        time: Date.now() - (34 * 24 * 60 * 60 * 1000),
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi perspiciatis omnis, delectus quos mollitia maiores. Architecto aspernatur quae odio fuga labore facilis optio nisi!",
    },
    {
        name: "Jacob Jones",
        avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg",
        rating: 3.4,
        time: Date.now() - (1 * 365.25 * 24 * 60 * 60 * 1000),
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi perspiciatis omnis, delectus quos mollitia maiores. Architecto aspernatur quae odio fuga labore facilis optio nisi!",
    },
    {
        name: "Ralph Edwards",
        avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg",
        rating: 3.4,
        time: Date.now() - (1 * 30.44 * 24 * 60 * 60 * 1000),
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi perspiciatis omnis, delectus quos mollitia maiores. Architecto aspernatur quae odio fuga labore facilis optio nisi!",
    },
]

const ProductsDes = () => {
    return (
        <div className='grid grid-cols-2 pt-5 border-solid border-0 border-t-[1px] border-opacity-20 border-gray-500'>
            <div className='md:w-[90%]'>
                <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Descriptions</h2>
                <div className='text-gray-600 font-medium text-justify'>
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
            <div>
                <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Customer Feedback</h2>
                <div className='flex flex-col lg:flex-row gap-6 justify-between mb-8'>
                    <div className='lg:mr-14'>
                        <div className='flex  items-center gap-4'>
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
                <div>
                    {
                        reviewes.map(({ name, avatar, rating, time, review }, i) => {
                            return (
                                <Reviewers
                                    key={i}
                                    name={name}
                                    avatar={avatar}
                                    rating={rating}
                                    time={time}
                                    review={review}
                                />
                            )
                        })
                    }
                    <div>
                        <button className='rounded-2xl bg-green-100 text-green-600 px-5 py-2 font-semibold'>Load More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDes;