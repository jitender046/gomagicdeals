import "./App.css";
import Header from "./Header Footer/Header.js";
import Footer from "./Header Footer/Footer.jsx";
import CoffeeCards from "./coffee/CoffeeCards.js";
function App() {
  return (
    <div className="App">
      <Header />
      <CoffeeCards />
      <Footer />
    </div>
  );
}

export default App;
