import "./App.css";
import Header from "./Header Footer/Header.js";
import Footer from "./Header Footer/Footer.jsx";
// import CoffeeCards from "./coffee/CoffeeCards.js";
import Cscworks from "./Csc works/Cscworks.jsx"
import Onedocslider from "./Csc works/Onedocslider.jsx"
import Counter from "./Components/Counter.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <CoffeeCards /> */}
      <Cscworks />
      <Onedocslider />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
