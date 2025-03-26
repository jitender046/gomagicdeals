import "./App.css";
import Header from "./Header Footer/Header.js";
import Footer from "./Header Footer/Footer.jsx";
// import CoffeeCards from "./coffee/CoffeeCards.js";
import Cscworks from "./Csc works/Cscworks.jsx"
import Onedocslider from "./Csc works/Onedocslider.jsx"
function App() {
  return (
    <div className="App">
      <Header />
      {/* <CoffeeCards /> */}
      <Cscworks />
      <Onedocslider />
      <Footer />
    </div>
  );
}

export default App;
