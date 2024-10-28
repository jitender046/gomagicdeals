import React from "react";
import { Route, Routes } from 'react-router-dom';
import App from "./App";
import TodoApp from "./TodoApp/TodoApp.jsx";
import Signup from './Login Signup/Signup.jsx'
import Login from './Login Signup/Login.jsx'
import Youtube from "./YouTube/YoutubeApp.jsx";
import QuizTest from "./QuickScreen/Quickscreen test.jsx";
import WeatherApp from "./WeatherApp/WeatherApp.jsx";
import PrivacyPolicy from "./All pages/PrivacyPolicy.jsx";
import Contact from "./All pages/contactus.jsx";
import Terms from "./All pages/Terms & services.jsx";
import About from "./All pages/Aboutus.jsx";
import Service from "./All pages/Service.jsx";

const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/todo-app' element={<TodoApp />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/youtube' element={<Youtube />} />
      <Route path="/quickscreen" element={<QuizTest />} />
      <Route path="/weather" element={<WeatherApp />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />

    </Routes>
  )
}

export default AllRoute;