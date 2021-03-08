import React from "react";
import { number } from "prop-types";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import "./index.scss";

const Spacing = (num) => '* '.repeat(num).split(' ').map((val, index) => <React.Fragment key={index}>&nbsp;</React.Fragment>);

/**
 * @function TonNavbar
 * @description The top navigation bar component
 */
const TopNavbar = ({ totalItemInCart, handleCartModal }) => (
  <header>
    <nav>
      <ul>
        <li key="1">
          <a href={window.location.href}>
            L{Spacing(3)}
            U{Spacing(3)}
            M{Spacing(3)}
            I{Spacing(3)}
            N
          </a>
          
        </li>

        <li key="2">
          <a href={window.location.href} className="account">Account</a>
          <button type="button" onClick={handleCartModal}>
            <CartIcon />
            <span
              className={`cart-size ${
                totalItemInCart > 0 ? "active-cart" : ""
              }`}
            >
              {totalItemInCart}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

TopNavbar.propTypes = {
  totalItemInCart: number,
};

TopNavbar.defaultProps = {
  totalItemInCart: 0,
};

export default TopNavbar;
