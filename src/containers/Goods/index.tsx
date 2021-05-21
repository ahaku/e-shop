import React from "react";
import { useSelector } from "react-redux";
import { getGoods } from "../../store/goods/selectors";
import "./index.css";
import GoodItem from "./Good";

const GoodsContainer = () => {
  const goods = useSelector(getGoods);

  if (goods && goods.length === 0) return <div>No data</div>;

  return (
    <div className="goods">
      {goods.map((good) => {
        return <GoodItem key={good.id} {...good} />;
      })}
    </div>
  );
};

export default GoodsContainer;
