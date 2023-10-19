import React from 'react'
import './BookSlider.css'

const BookSlider = ({item}) => {
  return (
    <div className='books-container'>
      <i class="bi bi-chevron-left"></i>

      <div className='books-slider'> 
      
      {
        item.map((e)=> 
        <div className='books-content-info'>
            <img src={`./books/${e.image}`} alt={e.title} className="book-slide-img"/>
            <h3>{e.title}</h3>
            <div className='rating-component'>Rating</div>
            <div className='book-price'> {e.price} </div>
            <div className='book-icons'> 
            <i class="bi bi-eye-fill"></i>
            <i class="bi bi-cart-plus"></i>

            </div>
            
             </div>)
      }
      
      </div>
      <i class="bi bi-chevron-right"></i>
    </div>
  )
}

export default BookSlider
