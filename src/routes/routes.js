import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import HomePage from "../Pages/Home/HomePage";
import ProductsDetailsPage from "../Pages/ProductsDetails/ProductsDetailsPage";
import ProductsLayout from "../Layout/ProductsLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path: "/category",
                element: <HomePage></HomePage>,
            },
            {
                path: "/category/:id",
                element: <ProductsDetailsPage></ProductsDetailsPage>,
            },
        ]
    },
    {
        path: "/product",
        element: <ProductsLayout></ProductsLayout>,
        children: [
            {
                path: ":id", 
                element: <ProductsDetailsPage></ProductsDetailsPage>,
            },
        ]
    },
])

export default router;