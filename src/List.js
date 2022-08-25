import "./styles.css";
import React from "react";

const Customer = ({ items }) => {
  const renderedItems = items.map((item, index) => {
    return (
      <div key={index} className="bordered">
        {item}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
};

export default Customer;
