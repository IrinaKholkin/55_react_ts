import './style.css'
import { ProductProps } from "./types";

function Product ({name, price}: ProductProps) {
    return (
        <div className="product-container">
            <h2>{name}</h2>
            <div>{price}</div>
        </div>
    )
}

export default Product;