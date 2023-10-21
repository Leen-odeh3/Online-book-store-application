import React, { useState } from "react";
import { cartInfo } from "./../../data/cart";
import "./Cart.css";

const Cart = () => {
  const [value, setvalue] = useState();

  return (
    <div className="cart-content">
      
      <div className="content-cart-shopping">
        <div className="title-cart">
        <h1>Your shopping cart</h1>
      </div>
        <div className="items-cart">
          {cartInfo.map((e) => (
            <div key={e.id} className="cart-item">
              <img src={`/books/${e.image}`} alt={e.title} className="imd-cart" />
              <div className="infoo">
                <b>Title: {e.title}</b>
                <b> Author: {e.author}</b>
              </div>
              <div className="quantiety">
                <div className="flex">
                  <div className="qun">
                    <button>
                      <i class="bi bi-dash" onClick={()=>setvalue(prev=>prev+1)}></i>
                    </button>
                    <b>{e.quantity} </b>
                    <button>
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                  <b className="price-item">${e.price * e.quantity}</b>
                  <div> <i class="bi bi-trash3-fill"></i></div> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div> order Summary</div>
    </div>
  );
};

export default Cart;
