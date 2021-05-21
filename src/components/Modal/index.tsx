import React, { FC } from "react";
import Button from "../Button";
import "./index.css";

interface IModal {
  children: React.ReactNode;
  handleClose: () => void;
  show?: boolean;
}

const Modal: FC<IModal> = ({ children, handleClose, show = false }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const closeButton = <div onClick={handleClose} className="close"></div>;

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-main__header">{closeButton}</div>
        {children}
      </section>
    </div>
  );
};

export default Modal;
