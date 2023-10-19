
import BookSlider from './Component/BookSlider/BookSlider';
import Header from './Component/Header/Header';
import Services from './Component/Services/Services';
import Slider from './Component/Slider/Slider';
import {books} from './data/books'
import Headeing from ".././src/Component/Headeing/Headeing.jsx";
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
   <Header/>
   <Slider/>
   <Services/>
   <Headeing title="Best Seller"/>
   <BookSlider item={books}/>
   <Headeing title="Most Gifted"/>
   <BookSlider item={books}/>
   <Headeing title="Most Wished for"/>
   <BookSlider item={books}/>
<Footer/>

    </div>
  );
}

export default App;
