import React from "react";
import { getMoneyString } from "../../../../utils/helpers";
import "./index.css";
interface IGoodModalContent {
  removeButton: React.ReactNode;
  addButton: React.ReactNode;
  name: string;
  banner: string;
  about: string;
  available: number;
  price: number;
}
const GoodModalContent = ({
  removeButton,
  addButton,
  about,
  name,
  banner,
  available,
  price,
}: IGoodModalContent) => {
  return (
    <div className="good-modal-content">
      <div className="good-modal-content__header">
        <div className="good-modal-content__image">
          <img src={banner} alt={name} />
        </div>
        <div className="good-modal-content__bio">
          {name} {getMoneyString(price)}
        </div>
      </div>

      <p className="good-modal-content__about">{about}</p>
      <div className="good-modal-content__info">
        <small>Available: {available}</small>
      </div>

      <div className="good-modal-content__controls">
        {removeButton}
        {addButton}
      </div>
    </div>
  );
};

export default GoodModalContent;
