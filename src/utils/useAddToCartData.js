// handle add to cart
export default function addToCartProducts(_id, productQuantity) {

    const prevStoredProducts = JSON.parse(localStorage.getItem('addToCartData'));
    let storedData = [{
        _id,
        productQuantity,
    }]
    if (prevStoredProducts && prevStoredProducts.length > 0) {
        // if product already exist just update quantity
        for (let i = 0; i < prevStoredProducts.length; i++) {
            if (prevStoredProducts[i]._id === _id) {
                prevStoredProducts[i].productQuantity += productQuantity;
                return localStorage.setItem("addToCartData", JSON.stringify([...prevStoredProducts]));
            }
        }
        storedData = [...prevStoredProducts, ...storedData]
    }
    return localStorage.setItem("addToCartData", JSON.stringify(storedData))
}
