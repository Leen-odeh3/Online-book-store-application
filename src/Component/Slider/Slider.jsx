import "./Slider.css";
import book1 from "../../images/book1.png";
import book2 from "../../images/book2.png";
import book3 from "../../images/book3.png";

const Slider = () => {
  return (
    <div className="slider-container">
      <i class="bi bi-arrow-left arrow-left"></i>
      <div className="slider-content">
        <div className="slide first-slide">
          <div className="slider-img">
            <img src={book1} alt="img-1" />
          </div>
          <div className="slider-description">
            <h1>The book for everyone</h1>
            <p> you can read at the bookstore or home</p>
          </div>
        </div>

        <div className="slide second-slide">
          <div className="slider-img">
            <img src={book2} alt="img-2" />
          </div>
          <div className="slider-description">
            <h1>check out the new title </h1>
            <p> we send you the book you want at home </p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slider-img">
            <img src={book3} alt="img-3" />
          </div>
          <div className="slider-description">
            <h1> Book store</h1>
            <p> its not just reading , its living the advanture</p>
          </div>
        </div>
      </div>
      <i class="bi bi-arrow-right arrow-right"></i>
    </div>
  );
};

export default Slider;
