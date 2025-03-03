import "./App.css";
import Header from "./Header Footer/Header.js";
import Footer from "./Header Footer/Footer.jsx";
// import CoffeeCards from "./coffee/CoffeeCards.js";
import Cscworks from "./Components/Cscworks.jsx"
function App() {
  return (
    <div className="App">
      <Header />
      {/* <CoffeeCards /> */}
      <Cscworks />
      <Footer />
    </div>
  );
}

export default App;
