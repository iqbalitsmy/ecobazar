import React, { useContext, useEffect } from 'react';
import WishlistProducts from '../../Shared/WishlistProducts/WishlistProducts';
import { PageNavContext } from '../../Provider/PageNavProvider';

const Wishlist = () => {
    // for page navigation
    const { setPageNav } = useContext(PageNavContext);

    useEffect(() => {
        setPageNav([{ title: "wishlist", navLink: "" }]);
    }, [setPageNav]);

    return (
        <section className='container mx-auto min-h-[50vh] md:min-h-screen mt-6 mb-10'>
            <h1 className='text-center text-[32px] font-semibold mb-6'>My Wishlist</h1>
            <div className='w-full lg:w-3/4 mx-auto'>
                <WishlistProducts></WishlistProducts>
            </div>
        </section>
    );
};

export default Wishlist;