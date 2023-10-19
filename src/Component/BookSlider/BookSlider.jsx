import React, { useState } from "react";
import "./BookSlider.css";
import Rating from "./Rating";

const BookSlider = ({ item  }) => {
  const [index, setindex] = useState(0);
  return (
    <>
   
    <div className="books-container">
      {index <= item.length - 5 && (
        <i
          class="bi bi-chevron-left left-icon"
          onClick={() => {
            setindex(index + 1);
          }}
        ></i>
      )}
      <div className="books-slider">
        {item.map((e) => (
          <div
            className="books-content-info"
            style={{ transform: `translateX(${index * -340}px)` }}
          >
            <img
              src={`./books/${e.image}`}
              alt={e.title}
              className="book-slide-img"
            />
            <h3 className="book-title">{e.title}</h3>
            <Rating numbers={e.rating} className="book-rating" review={e.reviews}/>
            <div className="book-price"> {e.price}$ </div>
            <div className="book-icons">
              <i class="bi bi-eye-fill"></i>
              <i class="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
      {index !== 0 && (
        <i
          class="bi bi-chevron-right right-icon"
          onClick={() => {
            setindex(index - 1);
          }}
        ></i>
      )}
    </div>
    </>
  );
};

export default BookSlider;
