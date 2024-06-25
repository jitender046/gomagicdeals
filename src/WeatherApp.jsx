// import './App.css';
import './Result.css'
import Search from './Search';
import Result from './Result';
import { useEffect, useState } from 'react';

  function WeatherApp() {
  const[search,setSearch]=useState("");
  const[Weather,setWeather]=useState([]);
  const changeSearch=(value)=>{
    setSearch(value);

  }
  const getWeather=()=>{
    let A=`http://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=560d78cb18e3c6d74ddd360b7fea1f05`;
   fetch(A)
   .then(async(res)=>{
    console.log(res);
    if(res.status===200){
      let temp=await res.json();
      setWeather(temp);
    }
   })
    
  }
  useEffect(()=>{
    if(search!==""){
      getWeather();
    }

  },[search])
  console.log(Weather);
  return (
    <div className="WeatherApp">
      <Search searchData={search} eventHandler={changeSearch} />
     <div className='r'> <Result weatherData={Weather}/></div>
    </div>
  );
}

export default WeatherApp;
