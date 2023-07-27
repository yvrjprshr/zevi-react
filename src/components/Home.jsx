import React from "react";
import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import DisplayAll from "./DisplayAll";

function Home() {
  const [dataArray, setDataArray] = useState([]);
  const handleDataArray = (data) => {
    setDataArray(data);
  };
  useEffect(() => {
    const x = () => {
      const data_items = [];
      for (let i = 1; i <= 100; i++) {
        let obj = {
          id: i,
          name:  faker.commerce.productName(),
          department:  faker.commerce.department(),
          price: faker.commerce.price(),
          product:  faker.commerce.product(),
          productAdjective:  faker.commerce.productAdjective(),
          desc:  faker.commerce.productDescription(),
          productMaterial:  faker.commerce.productMaterial(),
          img: faker.image.urlLoremFlickr({category: 'shirts'}),
          isFav: i%2===0?false:true,
        };
        data_items.push(obj);
      }
    //   setData(data_items);
    setDataArray(data_items);
    };
    x();
  }, []);

  return <div>

    { dataArray.length===0? <div>hi</div>: <DisplayAll dataArray={dataArray} handleDataArray={handleDataArray}/>}
  </div>;
}

export default Home;
