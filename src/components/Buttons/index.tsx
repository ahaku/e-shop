import { getMoneyString } from "../../utils/helpers";
import "./index.css";
interface ICartButton {
  onClick: () => void;
  total: number;
}
export const CartButton = ({ onClick, total }: ICartButton) => {
  return (
    <button
      type="button"
      className="shopping-cart-button float-right"
      data-toggle="shopping-cart-dropdown"
      onClick={onClick}
    >
      <span className="text">
        Cart {total ? `(${getMoneyString(total)})` : null}
      </span>
    </button>
  );
};
