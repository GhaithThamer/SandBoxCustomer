import "./styles.css";
import React from "react";


const Customer = ({ items }) => {
  const renderedItems = items.map((item) => {
    return <div className="bordered">{item}</div>;
  });
  return <div>{renderedItems}</div>;
};

export default Customer;
