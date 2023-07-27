import React from "react";
import '../App.css';
function DisplaySingle(props) {
  console.log("props sddsss", props.single_product);
  return (
    <div className="single-product">
      <img src={props.single_product.img} alt="" />
      <h1>{props.single_product.name}</h1>
      <p>{props.single_product.department}</p>
      <p>{props.single_product.price}</p>
      <p>{props.single_product.product}</p>
      <p>{props.single_product.productAdjective}</p>
      <p>{props.single_product.desc}</p>
      <p>{props.single_product.productMaterial}</p>
    </div>
  );
}

export default DisplaySingle;
