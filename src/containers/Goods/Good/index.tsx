import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../../store/goods/actions";
import { IGood } from "../../../store/goods/i";
import "./index.css";
const GoodItem = ({ id, available, image, stock, name, price }: IGood) => {
  const dispatch = useDispatch();

  const addToCart = (e: any) => {
    e.stopPropagation();
    dispatch(addToCartAction(id));
  };
  const removeFromCart = (e: any) => {
    e.stopPropagation();

    dispatch(removeFromCartAction(id));
  };

  return (
    <div className="good">
      <div className="good__image">
        <img src={image} alt={name} />
      </div>
      <strong className="good__name">
        {name} <span>{price} $</span>
      </strong>

      <div className="good__info">
        <small>Available: {available}</small>
      </div>
      <div className="good__controls">
        <Button onClick={removeFromCart} disabled={available === stock}>
          Remove
        </Button>
        <Button onClick={addToCart} disabled={available === 0}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default GoodItem;
