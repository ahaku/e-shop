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

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <footer>
          <Button onClick={handleClose}>X</Button>
        </footer>
      </section>
    </div>
  );
};

export default Modal;
