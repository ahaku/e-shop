import React from "react";
import { IGood } from "../../../store/goods/i";
import "./index.css";
const GoodItem = ({ id, available, image, stock, name }: IGood) => {
  return <div className="good">{name}</div>;
};

export default GoodItem;
