import React from "react";
import { string, number, func } from "prop-types";
import "./index.scss";

const ItemCard = ({ imageUrl, title, id, price, handleAddToCart }) => (
  <div className="item-card">
    <div className="cover-container">
      <img src={imageUrl} alt="" />
    </div>
    <p>{title}</p>
    <p>From {price}</p>
    <div className="btn-holder">
      <button type="button" id={id} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  </div>
);

ItemCard.propTypes = {
  imageUrl: string.isRequired,
  title: string.isRequired,
  id: number.isRequired,
  price: string.isRequired,
  handleAddToCart: func.isRequired,
};

export default ItemCard;
