import React from "react";
import DisplaySingle from "./DisplaySingle";
import '../App.css';


function DisplayAll(props) {
  console.log("props", props.dataArray);
  // console.log('props' ,Array.isArray(props.dataArray.dataArray));

  return (
    <div
      className="containerx"
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: "row",
        // flexWrap: "wrap",
      }}
    >
      {props.dataArray.map((item, index) => {
        return (
          <>
            <div>
              {/* hey */}
              <DisplaySingle single_product={item} />
              {/* {item.name} */}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default DisplayAll;
