import { getMoneyString } from "../../utils/helpers";

import "./index.css";
interface ICartButton {
  onClick: () => void;
  total: number;
}
export const CartButton = ({ onClick, total }: ICartButton) => {
  return (
    <button type="button" className="shopping-cart-button" onClick={onClick}>
      <img
        className="shopping-cart-button__image"
        src={"/shopping-cart.png"}
        alt="cart"
      />
      {total ? (
        <span className="shopping-cart-button__total">
          {`(${getMoneyString(total)})`}
        </span>
      ) : null}
    </button>
  );
};
