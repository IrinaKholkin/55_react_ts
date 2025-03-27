import './style.css'
import { ProductProps } from "./types";

function Product ({productName, productPrice}: ProductProps) {
    return (
        <div className="product-container">
            <div>Product: {productName}</div>
            <div>Price: {productPrice}</div>
        </div>
    )
}

export default Product;