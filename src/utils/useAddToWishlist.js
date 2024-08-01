// handle add to wishlist
export default function addToWishlistProducts(_id) {
    const prevStoredProducts = JSON.parse(localStorage.getItem('addToWishlist'));
    // console.log(prevStoredProducts)

    if (prevStoredProducts) {
        // if product already exist than remove
        for (let i = 0; i < prevStoredProducts.length; i++) {
            if (prevStoredProducts[i] === _id) {
                prevStoredProducts.splice(i, 1);
                return localStorage.setItem("addToWishlist", JSON.stringify([...prevStoredProducts]));
            }
        }
        return localStorage.setItem("addToWishlist", JSON.stringify([...prevStoredProducts, _id]))
    }
    return localStorage.setItem("addToWishlist", JSON.stringify([_id]))
}
