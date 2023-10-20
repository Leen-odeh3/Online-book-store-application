import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Author from "./Pages/Authors/Author";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Author/>} />
        <Route path="/aboutus" element={<AboutUs/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
