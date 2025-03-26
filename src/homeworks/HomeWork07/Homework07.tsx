
// import './styles.css'

import { productsData } from "./data"
import Product from "../../components/Product/Product"
import { v4 } from "uuid"


function Homework07 (){
    const products = productsData.map((product) => {
        return <Product
        key={v4()}
        name={product.name}
        price={product.price}/>
    })

return (
    <div className="cards-wrapper">
        {products}
    </div>
)
}

export default Homework07