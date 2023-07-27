import React from "react";
import DisplaySingle from "./DisplaySingle";
import "../App.css";
import { useState } from "react";

function DisplayAll(props) {
  const [ipTxt, setIpTxt] = useState("");
  const [data, setData] = useState(props.dataArray);
  const handleInputChange = (e) => {
    setIpTxt(e.target.value);
    const filteredData = props.dataArray.filter((item) => {
      return item.name.includes(
        e.target.value || 
        item.department.includes(e.target.value) || 
        item.product.includes(e.target.value) || 
        item.productAdjective.includes(e.target.value) || 
        item.desc.includes(e.target.value) || 
        item.productMaterial.includes(e.target.value));
    });
    if(e.target.value===""){
      setData(props.dataArray)
    }else{
      setData(filteredData);
    }
  }
  return (
    <div className="container-box">
      <input type="text" className="input" value={ipTxt} onChange={handleInputChange} placeholder="search..."/>
      <div className="containerx">
        {data.map((item, index) => {
          return (
            <>
              <div key={item.id}>
                <DisplaySingle  single_product={item} dataArray={props.dataArray} handleDataArray={props.handleDataArray}/>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayAll;
