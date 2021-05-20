import React from "react";
import { IGood } from "../../../../store/goods/i";
interface IGoodModalContent {
  removeButton: React.ReactNode;
  addButton: React.ReactNode;
  name: string;
  banner: string;
  about: string;
  available: number;
}
const GoodModalContent = ({
  removeButton,
  addButton,
  about,
  name,
  banner,
  available,
}: IGoodModalContent) => {
  return (
    <div className="good-modal-content">
      <div className="good-modal-content__image">
        <img src={banner} alt={name} />
      </div>
      <div className="good-modal-content__about">{about}</div>
      <div className="good-modal-content__info">Available: {available}</div>

      <div className="good-modal-content__controls">
        {removeButton}
        {addButton}
      </div>
    </div>
  );
};

export default GoodModalContent;
