import thumbnail1 from "../../assets/products/green apple/thumbnail.png"
import greenApple1 from "../../assets/products/green apple/1.jpg"
import greenApple2 from "../../assets/products/green apple/2.jpeg"
import thumbnail2 from "../../assets/products/Chanise Cabbage/thumbnail.png"
import chaniseCabbage1 from "../../assets/products/Chanise Cabbage/1.png"
import chaniseCabbage2 from "../../assets/products/Chanise Cabbage/2.png"

import brandImg from "../../assets/brand/brand.png"


const productDetails = [
    {
        title: "Green Apple",
        price: 20,
        offPercentage: 20,
        newPrice: 16,
        thumbnail: thumbnail1,
        images: [greenApple1, greenApple2],
        numOfReview: 3,
        rating: 2.5,
        brandImg: brandImg,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nemo, veniam cupiditate quia quos eligendi voluptas temporibus ipsa iste tempore itaque alias hic deserunt, quam error tenetur placeat? Recusandae, accusantium.",
        quantity: 5,
        category: "Vegetables",
        tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        status: "",
    },
    {
        title: "Chanise Cabbage ",
        price: 20.05 ,
        offPercentage: 20,
        newPrice: 16,
        thumbnail: thumbnail2,
        images: [chaniseCabbage1, chaniseCabbage2],
        numOfReview: 3,
        rating: 4.5,
        brandImg: brandImg,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur perspiciatis nulla fugit, unde ad aspernatur obcaecati cum doloremque sunt voluptatum fugiat delectus voluptate itaque.",
        quantity: 5,
        category: "Vegetables",
        tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
        status: "",
    },
    // {
    //     title: "Green Lettuce",
    //     price: 20,
    //     offPercentage: 20,
    //     newPrice: 16,
    //     thumbnail: "",
    //     images: [],
    //     numOfReview: 3,
    //     rating: 2.5,
    //     brandImg: "",
    //     description: "",
    //     quantity: 5,
    //     category: "",
    //     tags: [],
    //     status: "",
    // },
    // {
    //     title: "Green Chili",
    //     price: 14.99,
    //     offPercentage: 20,
    //     newPrice: 16,
    //     thumbnail: "",
    //     images: [],
    //     numOfReview: 3,
    //     rating: 2.5,
    //     brandImg: "",
    //     description: "",
    //     quantity: 5,
    //     category: "",
    //     tags: [],
    //     status: "",
    // },
    // {
    //     title: "Corn",
    //     price: 14.99,
    //     offPercentage: 20,
    //     newPrice: 16,
    //     thumbnail: "",
    //     images: [],
    //     numOfReview: 3,
    //     rating: 2.5,
    //     brandImg: "",
    //     description: "",
    //     quantity: 5,
    //     category: "",
    //     tags: [],
    //     status: "",
    // },
]


export default productDetails;