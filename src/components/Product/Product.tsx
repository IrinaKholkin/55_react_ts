import { useEffect } from "react";
import "./style.css";
import { ProductProps } from "./types";

function Product({ productName, productPrice }: ProductProps) {
  //Unmouting - выполняем действие при размонтировании компонента Product
  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []);
  return (
    <div className="product-container">
      <div>Product: {productName}</div>
      <div>Price: {productPrice}</div>
    </div>
  );
}

export default Product;
