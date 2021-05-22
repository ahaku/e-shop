import React, { FC } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink activeClassName="header__active-link" exact to="/">
            E-Shop
          </NavLink>
          <NavLink activeClassName="header__active-link" to="/orders">
            Orders
          </NavLink>
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
