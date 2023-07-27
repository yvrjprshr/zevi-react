import React from "react";
import { faker } from "@faker-js/faker";

function TestComponent() {
  const randomName = faker.person.fullName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  const dep = faker.commerce.department(); // Health
  const product = faker.commerce.product(); // Health
  const productName = faker.commerce.productName(); // Health
  const productAdjective = faker.commerce.productAdjective(); // Health
  const price = faker.commerce.price(); // Health
  return <div>
    <h1>{randomName}</h1>
    <h2>{randomEmail    }</h2>
    <h3>{dep}</h3>
    <h2>{product}</h2>
    <h2>{productName}</h2>
    <h2>{productAdjective}</h2>
    <h2>{price}</h2>
  </div>;
}

export default TestComponent;
