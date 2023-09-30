import "./App.css";

import Home from "./Routes/Home/Home";
import Product from "./Routes/Product/Product";
import Contact from "./Routes/Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
