import React, { FC } from "react";
import { Link } from "react-router-dom";
import CartContainer from "../../containers/Cart";
import "./index.css";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <div className="header">
        <nav className="container">
          <Link to="/">
            <span className="header__title">E-Shop</span>
          </Link>
          <Link to="/orders">Orders</Link>
          <div className="header__cart">
            <CartContainer />
          </div>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default Layout;
