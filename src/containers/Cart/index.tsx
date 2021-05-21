import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { getCart } from "../../store/cart/selectors";
import { getGoods } from "../../store/goods/selectors";
import CartModalContent from "./ModalContent";

const CartContainer = () => {
  const [total, setTotal] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const goods = useSelector(getGoods);
  const cartData = useSelector(getCart);

  useEffect(() => {
    const total = Object.entries(cartData).reduce((acc, [goodId, count]) => {
      const goodPrice = goods.find(({ id }) => id === goodId)?.price;
      if (goodPrice) {
        return acc + count * goodPrice;
      }
      return acc;
    }, 0);
    setTotal(total);
  }, [cartData, goods]);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  return (
    <>
      <div>
        <button onClick={showModal}>Cart {total ? `${total} $` : null}</button>
      </div>
      <Modal show={show} handleClose={hideModal}>
        <CartModalContent {...{ total, hideModal }} />
      </Modal>
    </>
  );
};

export default CartContainer;
