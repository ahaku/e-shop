import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../../store/goods/actions";
import { IGood } from "../../../store/goods/i";
import { getMoneyString } from "../../../utils/helpers";
import "./index.css";
import GoodModalContent from "./ModalContent";
const GoodItem = ({
  id,
  available,
  image,
  stock,
  name,
  price,
  banner,
  about,
}: IGood) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(false);

  const addToCart = (e: any) => {
    e.stopPropagation();
    dispatch(addToCartAction(id));
  };
  const removeFromCart = (e: any) => {
    e.stopPropagation();
    dispatch(removeFromCartAction(id));
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  const removeButton = (
    <Button
      onClick={removeFromCart}
      disabled={available === stock}
      additionalClassName="cart-actions-btn"
    >
      -
    </Button>
  );
  const addToCartButton = (
    <Button
      onClick={addToCart}
      disabled={available === 0}
      additionalClassName="cart-actions-btn"
    >
      +
    </Button>
  );
  const isSoldOut = stock === 0;
  return (
    <>
      <div className="good" onClick={showModal}>
        {isSoldOut && <div className="good__overlay">Sold out</div>}
        <div className="good__image">
          <img src={image} alt={name} />
        </div>
        <div className="good__row">
          <div className="good__overall">
            <strong className="good__info">
              <span className="good__name">{name}</span>
              <div className="good__price">{getMoneyString(price)}</div>
            </strong>

            <div className="good__available">
              <small>Available: {available}</small>
            </div>
          </div>
          <div className="good__controls">
            {removeButton}
            {addToCartButton}
          </div>
        </div>
      </div>
      <Modal show={show} handleClose={hideModal}>
        <GoodModalContent
          {...{
            name,
            available,
            banner,
            about,
            price,
            removeButton,
            addButton: addToCartButton,
          }}
        />
      </Modal>
    </>
  );
};

export default GoodItem;
