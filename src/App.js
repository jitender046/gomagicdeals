import './App.css';
import Header  from './Header';
// import TodoApp from './TodoApp';
// import Myskills from './Myskills'
// import Footer from "./Footer";
// import Weather from './WeatherApp';
// import QuizTest from './Quickscreen test';
// import Youtube from './YoutubeApp';
import CoffeeCards from './coffee/CoffeeCards.js'
import Login from './Loginsignup.jsx';
import Signup from './Login Signup/Signup.jsx'
function App() {
  return (
    <div className="App"> 
          <Header/> 
    < CoffeeCards/>
    <Login />
    <Signup/>
      {/* <Weather/> */}
      {/* <QuizTest/> */}
      {/* <TodoApp/> */}
      {/* <Youtube/> */}
    </div>
  );
}

export default App;
