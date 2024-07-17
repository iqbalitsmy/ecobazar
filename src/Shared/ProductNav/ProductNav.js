import React from 'react';

import navBg from '../../assets/navigation-bg.png'
import './ProductNav.css'


const ProductNav = ({ titles, newStyle, navLink }) => {
    return (
        <div
            className={`w-full flex items-center bg-opacity-0 ${newStyle ? "min-h-12" : "min-h-16"}`}
            style={{
                backgroundImage: `url(${"https://t4.ftcdn.net/jpg/07/23/73/45/360_F_723734529_MlCdDL8Yxand7qiq1hmHv6qBVvsibIJS.jpg"})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
        >
            <ul className='flex text-white gap-2 parent mx-[5vw] drop-shadow-2xl'>
                <li className='fill-white flex items-center gap-2'>
                    <a href="/" className='hover:fill-green-400'>
                        <svg height={"20px"} width={"20px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M4.18753 11.3788C4.03002 11.759 4 11.9533 4 12V20.0018C4 20.5529 4.44652 21 5 21H8V15C8 13.8954 8.89543 13 10 13H14C15.1046 13 16 13.8954 16 15V21H19C19.5535 21 20 20.5529 20 20.0018V12C20 11.9533 19.97 11.759 19.8125 11.3788C19.6662 11.0256 19.4443 10.5926 19.1547 10.1025C18.5764 9.1238 17.765 7.97999 16.8568 6.89018C15.9465 5.79788 14.9639 4.78969 14.0502 4.06454C13.5935 3.70204 13.1736 3.42608 12.8055 3.2444C12.429 3.05862 12.1641 3 12 3C11.8359 3 11.571 3.05862 11.1945 3.2444C10.8264 3.42608 10.4065 3.70204 9.94978 4.06454C9.03609 4.78969 8.05348 5.79788 7.14322 6.89018C6.23505 7.97999 5.42361 9.1238 4.8453 10.1025C4.55568 10.5926 4.33385 11.0256 4.18753 11.3788ZM10.3094 1.45091C10.8353 1.19138 11.4141 1 12 1C12.5859 1 13.1647 1.19138 13.6906 1.45091C14.2248 1.71454 14.7659 2.07921 15.2935 2.49796C16.3486 3.33531 17.4285 4.45212 18.3932 5.60982C19.3601 6.77001 20.2361 8.0012 20.8766 9.08502C21.1963 9.62614 21.4667 10.1462 21.6602 10.6134C21.8425 11.0535 22 11.5467 22 12V20.0018C22 21.6599 20.6557 23 19 23H16C14.8954 23 14 22.1046 14 21V15H10V21C10 22.1046 9.10457 23 8 23H5C3.34434 23 2 21.6599 2 20.0018V12C2 11.5467 2.15748 11.0535 2.33982 10.6134C2.53334 10.1462 2.80369 9.62614 3.12345 9.08502C3.76389 8.0012 4.63995 6.77001 5.60678 5.60982C6.57152 4.45212 7.65141 3.33531 8.70647 2.49796C9.2341 2.07921 9.77521 1.71454 10.3094 1.45091Z"></path> </g></svg>
                    </a>
                    <span className=''>&gt;</span>
                </li>
                {
                    titles.map((title, i) => (
                        <li key={i} className='flex gap-4 child'>
                            <a className='drop-shadow-2xl' href={`${navLink[i]}`}>
                            <span className='hover:text-green-400 capitalize'>{title}</span>
                            <span className='arrow'> &gt;</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductNav;