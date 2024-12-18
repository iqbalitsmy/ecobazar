
export default function findProductsById(productDetails, _ids) {
    const idsSets = new Set(_ids);

    const matchProducts = productDetails.filter((product) => {
        if (idsSets.has(product._id)) {
            return product;
        }
        return null;
    })
    return matchProducts;
} 