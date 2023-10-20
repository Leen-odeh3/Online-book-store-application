import React from "react";
import "./Modal.css";
import Rating from "../BookSlider/Rating";

function Modal({ databooks, open }) {
  const { title, image, author, price, rating, reviews, inStock } = databooks;

  return (
    <div className="full-modal">
      <div className="content-modal">
        <i
          class="bi bi-x-circle"
          onClick={() => {
            open(false);
          }}
        ></i>
        <div className="img-content">
          <img src={`/books/${image}`} alt={title} />
        </div>
        <div className="info-book">
          <div className="top">
         
            <h3>{title}</h3>
          </div>
          <div className="top">
        
            <b>status:</b>
            {inStock ? "in stock" : "not instock"}
          </div>
          <div className="top">
            <Rating rating={rating} reviews={reviews} />
          </div>
          <div className="top">
            <b>
              Author:<span> {author}</span>
            </b>
          </div>

          <div className="top">
            
            <b>
              Price : <span>{price} </span>
            </b>
          </div>
          <div className="top all-info">
            <input type="number" min="1" max="100" className="input-order" />
            <button className="add-to">
              <i class="bi bi-cart-plus"></i>
              Add to cart
            </button>
          </div>
          <div className="top">
         
            <button className="details">Seem more detailes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
