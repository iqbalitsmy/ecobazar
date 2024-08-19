import React, { createContext, useEffect, useState } from 'react';
export const BadgeContext = createContext({});

const BadgeProvider = ({ children }) => {
    const [wishlistProductsNo, setWishlistProductsNo] = useState(0);
    const [cartProductsNo, setCartProductsNo] = useState(0);

    // get length of wishlist and cart products

    const updateBadgeDataFromLocalStorage = () => {
        const wishlistLength = JSON.parse(localStorage.getItem('addToWishlist'));
        const cartLength = JSON.parse(localStorage.getItem("addToCartData"));
        if (wishlistLength) {
            setWishlistProductsNo(wishlistLength.length);
        } else {
            setWishlistProductsNo(0);
        }
        if (cartLength) {
            setCartProductsNo(cartLength.length)
        } else {
            setCartProductsNo(0)
        }
    }

    // console.log(wishlistProductsNo, cartProductsNo);

    useEffect(() => {
        updateBadgeDataFromLocalStorage();
    }, [wishlistProductsNo, cartProductsNo])
    return (
        <BadgeContext.Provider value={{ wishlistProductsNo, cartProductsNo, updateBadgeDataFromLocalStorage }}>
            {children}
        </BadgeContext.Provider>
    );
};

export default BadgeProvider;