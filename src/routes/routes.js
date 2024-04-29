import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import HomePage from "../Pages/Home/HomePage";
import ProductsDetailsPage from "../Pages/ProductsDetails/ProductsDetailsPage";


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
    }
])

export default router;