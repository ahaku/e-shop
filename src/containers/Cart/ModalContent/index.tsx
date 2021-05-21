import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button";
import { resetCartAction } from "../../../store/cart/actions";
import { getCart } from "../../../store/cart/selectors";
import { setGoodsAction } from "../../../store/goods/actions";
import { getGoods } from "../../../store/goods/selectors";
import { removeZeroValues, randomId } from "../../../utils/helpers";
import {
  createOrder,
  getUpdatingGoodsList,
  responseListToJSON,
} from "./helpers";
import "./index.css";

const CartModalContent = ({ total, hideModal }: any) => {
  const dispatch = useDispatch();
  const goods = useSelector(getGoods);
  const cartData = useSelector(getCart);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      phone: { value: string };
    };
    const name = target.name.value;
    const phone = target.phone.value;

    const cartDataWithCount = removeZeroValues(cartData);
    Promise.all(getUpdatingGoodsList(cartDataWithCount, goods))
      .then(responseListToJSON)
      .then((res) => {
        const updatedIds = res.map(({ id }) => id);
        const newGoods = goods.map((good) => {
          if (updatedIds.includes(good.id)) {
            const updatedGood = res.find((g) => g.id === good.id);
            return { ...updatedGood, available: updatedGood.stock };
          }
          return { ...good, available: good.stock };
        });

        const orderData = Object.entries({ ...cartDataWithCount }).map(
          ([goodId, count]) => {
            const purchasedGood = goods.find((good) => good.id === goodId);
            return { ...purchasedGood, count };
          }
        );
        const order = {
          id: randomId(),
          date: new Date(),
          data: orderData,
          name,
          phone,
        };
        dispatch(setGoodsAction(newGoods));
        dispatch(resetCartAction());
        setTimeout(() => {
          // prevent json-server crash
          createOrder(order).then(() => {
            hideModal();
          });
        }, 200);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="cart-modal">
      {Object.entries(cartData).map(([goodId, inCartCount]) => {
        if (inCartCount) {
          const good = goods.find(({ id }) => id === goodId);
          const price = good?.price;
          const name = good?.name;

          return (
            <div key={goodId} className="cart-modal__item">
              <span className="cart-modal__item-info">
                {name} {inCartCount} x {price} $
              </span>
              <div className="cart-modal__controls">
                <Button additionalClassName="cart-modal__item-btn">-</Button>
                <Button additionalClassName="cart-modal__item-btn">+</Button>
              </div>
            </div>
          );
        }
        return null;
      })}
      {total ? (
        <div className="cart-modal__result">
          <span className="cart-modal__total">Total: {total} $</span>
          <form className="cart-modal__form" onSubmit={handleSubmit}>
            <div className="cart-modal__inputs">
              <input type="text" name="name" placeholder="Name" />
              <input type="tel" name="phone" placeholder="Phone" />
            </div>
            <Button type="submit">Create order</Button>
          </form>
        </div>
      ) : (
        <div className="cart-modal__empty">cart is empty</div>
      )}
    </div>
  );
};

export default CartModalContent;
