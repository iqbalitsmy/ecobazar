import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Box, Modal, Rating } from '@mui/material';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const MiniProductCard = ({ productDetail, productPage }) => {
    const { title, newPrice, price, offPercentage, thumbnail, rating, brandImg, description, quantity, category, tags, images } = productDetail;
    const [isHovered, setIsHovered] = useState(false);
    const [productImage, setProductImage] = useState(images[0]);

    // for mo
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70%",
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 2,
    }


    return (
        <div
            className={`max-h-[120px] min-h-24 w-full border-solid border-gray-200 hover:border-green-600 border-[1px] rounded-md shadow-lg hover:shadow-green-300 cursor-pointer flex mb-3 ${productPage ? "gap-0 lg:gap-4": "gap-4"}`}
            onMouseEnter={() => setIsHovered(!productPage && true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <figure className='max-h-[140px] w-full'>
                <img className='h-full min-w-full object-contain mx-auto' src={thumbnail} alt="Product" />
            </figure>
            <div className={`${productPage ? "px-0 py-1 lg:p-2": "p-2"} w-full`}>
                <div className='text-base text-slate-600 font-medium'>
                    <h1>{title}</h1>
                </div>
                <div className={`${productPage ? "" : "relative"}`}>
                    <div className={`flex gap-2 mt-4 ${isHovered ? `block` : `hidden`}`}>
                        <div className='p-1 lg:p-2 border-solid border-[1px] hover:border-0 border-slate-200 rounded-full hover:bg-[#00B207] fill-slate-700 hover:fill-white'>
                            <svg height={"22px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path d="M27 25.15 25.28 10.5a2.93 2.93 0 0 0-3-2.5h-1.35c0-.19 0-.38-.06-.57-.22-1.54-.41-2.87-1.59-4a4.51 4.51 0 0 0-6.56 0c-1.18 1.14-1.37 2.47-1.59 4 0 .19 0 .38-.06.57H9.69a2.93 2.93 0 0 0-3 2.5L5 25.15a4.13 4.13 0 0 0 1 3.26A4.87 4.87 0 0 0 9.72 30h12.56a4.87 4.87 0 0 0 3.64-1.59A4.13 4.13 0 0 0 27 25.15zM13.11 7.71c.22-1.52.34-2.21 1-2.85A2.78 2.78 0 0 1 16 4a2.78 2.78 0 0 1 1.89.86c.66.64.78 1.33 1 2.85V8h-5.8c.01-.1.01-.19.02-.29zm11.31 19.37a2.83 2.83 0 0 1-2.14.92H9.72a2.83 2.83 0 0 1-2.14-.92 2.14 2.14 0 0 1-.58-1.7l1.7-14.65a.94.94 0 0 1 1-.73H11c0 .38.05.76.1 1.14a1 1 0 1 0 2-.28c0-.29 0-.57-.06-.86H19c0 .29 0 .57-.06.86a1 1 0 0 0 .8 1.14h.14a1 1 0 0 0 1-.86c.05-.38.08-.76.1-1.14h1.34a.94.94 0 0 1 1 .73L25 25.38a2.14 2.14 0 0 1-.58 1.7z" data-name="shopping bag" />
                            </svg>
                        </div>
                        <div className='bg-gray-100 p-1 lg:p-2 border-solid border-[1px] hover:border-0 border-slate-200 rounded-full hover:bg-[#00B207] opacity-75 fill-slate-700 hover:fill-white'>
                            <svg className='' height={"22px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                        </div>
                        <div
                            className='bg-gray-100 p-1 lg:p-2 border-solid border-[1px] hover:border-0 border-slate-200 rounded-full hover:bg-[#00B207] opacity-75 fill-slate-700 hover:fill-white'
                            onClick={handleOpen}
                        >
                            <svg height={"22px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>
                        </div>
                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className="max-h-screen">
                            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6 lg:m-6'>
                                <div className='flex w-full gap-4'>
                                    <div className='flex flex-col gap-4'>
                                        {
                                            images.map((image, i) => (<figure
                                                className='h-[5vh] w-14 border-solid border-[1px] hover:border-2 border-gray-300 hover:shadow-md cursor-pointer'
                                                key={i}
                                                onClick={() => setProductImage(image)}>
                                                <img className='h-full w-full' src={image} alt="Product" />
                                            </figure>))
                                        }
                                    </div>
                                    <figure className='h-full w-full'>
                                        <img className='max-h-[400px] w-auto mx-auto' src={productImage} alt="Product" />
                                    </figure>
                                </div>
                                <div className=''>
                                    <div className='space-y-4 pb-6 mb-4 border-solid border-0 border-b-[1px] border-gray-300'>
                                        <div className='flex gap-4 flex-wrap items-center'>
                                            <h1 className='text-3xl font-bold'>{title}</h1>
                                            <p className='py-[2px] px-3 font-light bg-green-200 rounded-md text-green-900'>In Stock</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Rating name="read-only" value={rating} readOnly precision={0.5} />
                                            <div className='text-gray-600'>
                                                <p>{rating} Review</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2 text-lg font-semibold'>
                                            <p className='text-green-800'><del className='text-gray-400'>${price.toFixed(2)}</del> ${newPrice.toFixed(2)}</p>
                                            <p className='text-sm text-red-500 bg-red-100 p-1 px-2 rounded-lg'>{offPercentage}% Off</p>
                                        </div>
                                    </div>
                                    <div className='pb-6 mb-6 border-solid border-0 border-b-[1px] border-gray-300'>
                                        <div className='flex justify-between items-center flex-wrap pb-4'>
                                            <div className='flex items-center gap-1'>
                                                <p className='text-gray-700 font-medium'>Brand:</p>
                                                <img className='max-h-10 max-w-12' src={brandImg} alt="" />
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <p className='text-gray-700 font-medium'>Share item:</p>
                                                <div className='p-2 rounded-full hover:bg-[#00B207] fill-black hover:fill-white cursor-pointer'>
                                                    <svg height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 290">
                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path d="M205.807,0h-15.694c-43.62,0-79.107,35.488-79.107,79.108v33.386H84.193c-2.761,0-5,2.239-5,5v40c0,2.761,2.239,5,5,5 h26.811V285c0,2.761,2.239,5,5,5h40c2.761,0,5-2.239,5-5V162.494h39.786c2.761,0,5-2.239,5-5v-40c0-2.761-2.239-5-5-5h-39.786 V79.108c0-16.05,13.058-29.108,29.107-29.108h15.694c2.761,0,5-2.239,5-5V5C210.807,2.239,208.568,0,205.807,0z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className='p-2 rounded-full hover:bg-[#00B207] fill-black hover:fill-white cursor-pointer'>
                                                    <svg height={"24px"} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <g id="7935ec95c421cee6d86eb22ecd12f847">
                                                                <path style={{ display: 'inline' }} d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className='p-2 rounded-full hover:bg-[#00B207] fill-black hover:fill-white cursor-pointer'>
                                                    <svg height={"24px"} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <g id="7935ec95c421cee6d86eb22ecd12951c">
                                                                <path style={{ display: 'inline' }} d="M220.646,338.475C207.223,408.825,190.842,476.269,142.3,511.5 c-14.996-106.33,21.994-186.188,39.173-270.971c-29.293-49.292,3.518-148.498,65.285-124.059 c76.001,30.066-65.809,183.279,29.38,202.417c99.405,19.974,139.989-172.476,78.359-235.054 C265.434-6.539,95.253,81.775,116.175,211.161c5.09,31.626,37.765,41.22,13.062,84.884c-57.001-12.65-74.005-57.6-71.822-117.533 c3.53-98.108,88.141-166.787,173.024-176.293c107.34-12.014,208.081,39.398,221.991,140.376 c15.67,113.978-48.442,237.412-163.23,228.529C258.085,368.704,245.023,353.283,220.646,338.475z"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className='p-2 rounded-full hover:bg-[#00B207] fill-black hover:fill-white cursor-pointer'>
                                                    <svg height={"24px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-gray-500 font-medium'>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between gap-4 flex-wrap pb-6 mb-6 border-solid border-0 border-b-[1px] border-gray-300'>
                                        <div className='p-[6px] border-solid border-[1px] border-gray-200 flex items-center gap-4 text-gray-600 rounded-full'>
                                            <button
                                                className='px-[10px] py-[6px] rounded-full bg-gray-100 border-none inline-block'
                                                type="button"
                                            >
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                            <button className='text-lg font-semibold' type="button">{quantity}</button>
                                            <button
                                                className='px-[10px] py-[6px] rounded-full bg-gray-100 border-none inline-block'
                                                type="button">
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                        </div>
                                        <div className='flex-grow'>
                                            <button
                                                className='py-[12px] text-lg font-semibold text-white w-full rounded-full bg-[#00B207]'
                                                type="button"
                                            >
                                                <span>Add to Cart</span>
                                                <svg className='inline-block fill-white pl-2' height={"24px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                    <path d="M27 25.15 25.28 10.5a2.93 2.93 0 0 0-3-2.5h-1.35c0-.19 0-.38-.06-.57-.22-1.54-.41-2.87-1.59-4a4.51 4.51 0 0 0-6.56 0c-1.18 1.14-1.37 2.47-1.59 4 0 .19 0 .38-.06.57H9.69a2.93 2.93 0 0 0-3 2.5L5 25.15a4.13 4.13 0 0 0 1 3.26A4.87 4.87 0 0 0 9.72 30h12.56a4.87 4.87 0 0 0 3.64-1.59A4.13 4.13 0 0 0 27 25.15zM13.11 7.71c.22-1.52.34-2.21 1-2.85A2.78 2.78 0 0 1 16 4a2.78 2.78 0 0 1 1.89.86c.66.64.78 1.33 1 2.85V8h-5.8c.01-.1.01-.19.02-.29zm11.31 19.37a2.83 2.83 0 0 1-2.14.92H9.72a2.83 2.83 0 0 1-2.14-.92 2.14 2.14 0 0 1-.58-1.7l1.7-14.65a.94.94 0 0 1 1-.73H11c0 .38.05.76.1 1.14a1 1 0 1 0 2-.28c0-.29 0-.57-.06-.86H19c0 .29 0 .57-.06.86a1 1 0 0 0 .8 1.14h.14a1 1 0 0 0 1-.86c.05-.38.08-.76.1-1.14h1.34a.94.94 0 0 1 1 .73L25 25.38a2.14 2.14 0 0 1-.58 1.7z" data-name="shopping bag" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className='p-4 bg-green-100 rounded-full'
                                                type="button"
                                            >
                                                <svg className='fill-green-800 ' height={"20px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='font-semibold'>Category: <span className='font-normal text-gray-400'>{category}</span></p>
                                        <div>
                                            <p className='font-semibold'>Tag:{tags.map((tag, i) => (<span
                                                className='font-normal text-gray-400'
                                                key={i}> {tag}</span>))}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                    <div className={`${isHovered ? `hidden` : `block`}`}>
                        <div className=''>
                            <p className={`${productPage ? "text-base font-semibold" : "text-lg font-semibold"}`}>${price.toFixed(2)}</p>
                        </div>
                        <div>
                            <Rating name="read-only" size='small' value={rating} readOnly precision={0.5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniProductCard;