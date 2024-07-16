// handle add to cart
export default function addToCartProducts(_id, productQuantity) {

    const prevStoredProducts = JSON.parse(localStorage.getItem('addToCartData'));
    let storedData = [{
        _id,
        productQuantity,
    }]
    if (prevStoredProducts) {
        // if product already exist just update quantity
        let existingProducts;
        // separate existing product also remove them from main array
        for (let i = 0; i < prevStoredProducts.length; i++) {
            if (prevStoredProducts[i]._id === _id) {
                existingProducts = prevStoredProducts.splice(i, 1)[0];
                break;
            }
        }
        if (existingProducts) {
            existingProducts.productQuantity += productQuantity;

            return localStorage.setItem("addToCartData", JSON.stringify([...prevStoredProducts, existingProducts]));
        }

        storedData = [...prevStoredProducts, ...storedData]
    }
    return localStorage.setItem("addToCartData", JSON.stringify(storedData))
}
