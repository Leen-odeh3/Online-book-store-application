
import BookSlider from './Component/BookSlider/BookSlider';
import Header from './Component/Header/Header';
import Services from './Component/Services/Services';
import Slider from './Component/Slider/Slider';
import {books} from './data/books'

function App() {
  return (
    <div className="App">
   <Header/>
   <Slider/>
   <Services/>
   <BookSlider item={books}/>

    </div>
  );
}

export default App;
