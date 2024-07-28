import React, { useContext, useEffect } from 'react';
import WishlistProducts from '../../Shared/WishlistProducts/WishlistProducts';
import { PageNavContext } from '../../Provider/PageNavProvider';

const DashboardWishlist = () => {
    // for page navigation
    const { setPageNav } = useContext(PageNavContext);

    useEffect(() => {
        setPageNav([{ title: "account", navLink: "/user/dashboard" }, { title: "wishlist", navLink: "" }]);
    }, [setPageNav]);

    return (
        <WishlistProducts></WishlistProducts>
    );
};

export default DashboardWishlist;