import React from "react";
import '../App.css';
import star1 from '../images/star1.ico';
import star2 from '../images/star2.ico';

function DisplaySingle(props) {
  // console.log("props sddsss", props.single_product);
  const handleIconChange = () => {
    let da = props.dataArray.filter((item) => {
      if (item.id === props.single_product.id) {
        item.isFav = !item.isFav;
      }
      return item;
    });
    props.handleDataArray(da);
  };
  return (
    <div className="single-product">
      <div className="icon" onClick={handleIconChange}>
      {
        props.single_product.isFav?
        <img src={star1} alt="" style={{width:'20px'}}/>
        :<img src={star2} alt="" style={{width:'20px'}}/>
      }
      </div>
      <img className="product-image" src={props.single_product.img} alt="" />

      <p>{props.single_product.id}</p>
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
