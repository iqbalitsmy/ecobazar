import React, { useContext, useEffect } from 'react';
import ShoppingCartProducts from '../../Shared/ShoppingCartProducts/ShoppingCartProducts';
import { PageNavContext } from '../../Provider/PageNavProvider';

const ShoppingCart = () => {
    // for page navigation
    const { setPageNav } = useContext(PageNavContext);

    useEffect(() => {
        setPageNav([{ title: "Shopping Cart", navLink: "" },]);
    }, [setPageNav]);

    return (
        <section className='container mx-auto min-h-[60vh] lg:min-h-screen mb-14 mt-6'>
            <h1 className='text-center text-[32px] font-semibold mb-6'>My Shopping Cart</h1>
            <div className='xl:w-[80%] mx-auto'>
                <ShoppingCartProducts></ShoppingCartProducts>
            </div>
        </section>
    );
};

export default ShoppingCart;