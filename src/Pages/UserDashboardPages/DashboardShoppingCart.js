import React, { useContext, useEffect } from 'react';
import ShoppingCartProducts from '../../Shared/ShoppingCartProducts/ShoppingCartProducts';
import { PageNavContext } from '../../Provider/PageNavProvider';

const DashboardShoppingCart = () => {
    // for page navigation
    const { setPageNav } = useContext(PageNavContext);

    useEffect(() => {
        setPageNav([{ title: "account", navLink: "/user/dashboard" }, { title: "Shopping Cart", navLink: "" }]);
    }, [setPageNav]);

    return (
        <div className='mb-14'>
            <ShoppingCartProducts></ShoppingCartProducts>
        </div>
    );
};

export default DashboardShoppingCart;