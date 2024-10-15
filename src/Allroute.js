import React from "react";
import { Route, Routes } from 'react-router-dom';
import App from "./App";
import TodoApp from "./TodoApp/TodoApp.jsx";
import Signup from './Login Signup/Signup.jsx'
import Login from './Login Signup/Login.jsx'
import Youtube from "./YouTube/YoutubeApp.jsx";


const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/todo-app' element={<TodoApp />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/youtube' element={<Youtube />} />
    </Routes>
  )
}

export default AllRoute;