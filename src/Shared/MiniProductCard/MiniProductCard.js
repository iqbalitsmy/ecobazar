import React, { useCallback, useContext, useState } from 'react';
import { Rating } from '@mui/material';
import addToCartProducts from '../../utils/useAddToCartData';
import { SnackbarContext } from '../../Layout/ProductsLayout';
import ProductModal from '../ProductModal/ProductModal';

// Memorized Icons component to prevent re-renders
const Icons = React.memo(({ handleOpen, handleAddToCartData }) => (
    <>
        <button type='button' title='Add to Cart'
            className='p-1 lg:p-2 border-solid border-[1px] hover:border-0 border-slate-200 rounded-full hover:bg-[#00B207] fill-slate-700 hover:fill-white cursor-pointer'
            onClick={() => handleAddToCartData()}
        >
            <svg height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M27 25.15 25.28 10.5a2.93 2.93 0 0 0-3-2.5h-1.35c0-.19 0-.38-.06-.57-.22-1.54-.41-2.87-1.59-4a4.51 4.51 0 0 0-6.56 0c-1.18 1.14-1.37 2.47-1.59 4 0 .19 0 .38-.06.57H9.69a2.93 2.93 0 0 0-3 2.5L5 25.15a4.13 4.13 0 0 0 1 3.26A4.87 4.87 0 0 0 9.72 30h12.56a4.87 4.87 0 0 0 3.64-1.59A4.13 4.13 0 0 0 27 25.15zM13.11 7.71c.22-1.52.34-2.21 1-2.85A2.78 2.78 0 0 1 16 4a2.78 2.78 0 0 1 1.89.86c.66.64.78 1.33 1 2.85V8h-5.8c.01-.1.01-.19.02-.29zm11.31 19.37a2.83 2.83 0 0 1-2.14.92H9.72a2.83 2.83 0 0 1-2.14-.92 2.14 2.14 0 0 1-.58-1.7l1.7-14.65a.94.94 0 0 1 1-.73H11c0 .38.05.76.1 1.14a1 1 0 1 0 2-.28c0-.29 0-.57-.06-.86H19c0 .29 0 .57-.06.86a1 1 0 0 0 .8 1.14h.14a1 1 0 0 0 1-.86c.05-.38.08-.76.1-1.14h1.34a.94.94 0 0 1 1 .73L25 25.38a2.14 2.14 0 0 1-.58 1.7z" data-name="shopping bag" />
            </svg>
        </button>
        <div className='bg-gray-100 p-1 lg:p-2 border-solid border-[1px] hover:border-0 border-slate-200 rounded-full hover:bg-[#00B207] opacity-75 fill-slate-700 hover:fill-white cursor-pointer'>
            <svg className='' height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
        </div>
        <button
            type='button' title='Preview'
            className='bg-gray-100 p-1 md:p-2 rounded-full opacity-50 hover:opacity-100'
            onClick={handleOpen}
        >
            <svg height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>
        </button>
    </>
))

const MiniProductCard = ({ productDetail, productPage = false, style }) => {
    const { _id, title, newPrice, thumbnail, rating } = productDetail;
    const [isHovered, setIsHovered] = useState(false);

    // for modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    // snackbar
    const { snackbar, setSnackbar } = useContext(SnackbarContext);

    const handleAddToCartData = useCallback((_id) => {
        addToCartProducts(_id, 1);

        setSnackbar([...snackbar, {
            _id: snackbar.length + 1,
            message: "1 new item(s) have been added to your cart",
            type: "success",
            isVisible: true,
        }]);
    }, [snackbar, setSnackbar]);


    return (
        <div
            className={`max-h-[120px] min-h-24 w-full border-solid border-gray-200 hover:border-green-600 border-[1px] rounded-md shadow-md hover:shadow-green-300 flex mb-3 p-1 ${style}  ${productPage ? "gap-0 lg:gap-4 cursor-pointer" : "gap-4"}`}
            onMouseEnter={() => setIsHovered(!productPage && true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <figure className='max-h-[140px] w-full'>
                <a href={`/products/${_id}`}>
                    <img className='h-full min-w-full object-contain mx-auto' loading="lazy" src={thumbnail} alt="Product" />
                </a>
            </figure>
            <div className={`${productPage ? "px-0 py-1 lg:p-2" : "p-2"} w-full my-auto`}>
                <div className='text-base text-slate-600 font-medium cursor-pointer hover:text-primary-color'>
                    <a href={`/products/${_id}`}>
                        <h1>{title}</h1>
                    </a>
                </div>
                {/* hover items */}
                <div className={`${productPage ? "" : "relative"}`}>
                    {/* Icons */}
                    <div className={`flex gap-2 mt-4 ${isHovered ? `block` : `hidden`}`}>
                        <Icons handleOpen={handleOpen} handleAddToCartData={() => handleAddToCartData(_id)}></Icons>
                    </div>
                    <ProductModal productDetail={{ ...productDetail }} open={open} setOpen={setOpen} ></ProductModal>
                    <div className={`${isHovered ? `hidden` : `block`}`}>
                        <div className=''>
                            <p className={`${productPage ? "text-base font-semibold" : "text-lg font-semibold"}`}>${newPrice.toFixed(2)}</p>
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
