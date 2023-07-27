import React from "react";
import "../App.css";
import star1 from "../images/star1.ico";
import star2 from "../images/star2.ico";
import {useState} from 'react';
function DisplaySingle(props) {
  // console.log("props sddsss", props.single_product);

  const [isHover, setIsHover] = useState(false)
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
      {/* <img className="product-image" src={props.single_product.img} alt="" /> */}
      <div
        style={{
          backgroundImage: `URL(${props.single_product.img})`,
          height: "300px",
        }}
        className="background-img"
        onMouseEnter={(e) => {setIsHover(true)}}
        onMouseLeave={(e) => {setIsHover(false)}}
      >
        <div className="icon" onClick={handleIconChange}>
          {props.single_product.isFav ? (
            <img src={star1} alt="" style={{ width: "25px" }} />
          ) : (
            <img src={star2} alt="" style={{ width: "25px" }} />
          )}
        </div>
        <div className={isHover?'product-hover-txt':'display-none'}>
          <p>
            show product
            </p>
        </div>
      </div>
      <p>{props.single_product.id}</p>
      <p>{props.single_product.name}</p>
      {/* <p>{props.single_product.department}</p> */}
      {/* <p>{props.single_product.price}</p> */}
      {/* <p>{props.single_product.product}</p> */}
      {/* <p>{props.single_product.productAdjective}</p> */}
      {/* <p>{props.single_product.desc}</p> */}
      {/* <p>{props.single_product.productMaterial}</p> */}
    </div>
  );
}

export default DisplaySingle;
