import React from "react";
import './Result.css'
export default function Result({weatherData}){
    return(
        <div className="result">
            {
                weatherData.name !==0
                ?
                <>
               <h2> {weatherData?.city?.name}</h2>
               <div  className="all1">
            <div><img src={`http://openweathermap.org/img/wn/${weatherData?.list?.[0]?.weather?.[0]?.icon}@2x.png`}/></div>
            <div>Description<br/>{weatherData?.list?.[0]?.weather?.[0]?.description}</div>
            </div>
                {/* <div className="suncode">
               <p>
                 <div className="styled" >Sunrise :- {weatherData?.city?.sunrise}</div>
                 <div className="styled">Sunset :- {weatherData?.city?.sunset}</div>
               </p>
                 </div> */}
            <div className="all">
            <div className="styled">Temp_min: {weatherData?.list?.[0]?.main?.temp_min}</div>
            <div className="styled">Temp_max: {weatherData?.list?.[0]?.main?.temp_max}</div>
            <div className="styled">Humidity: {weatherData?.list?.[0]?.main?.humidity}%</div>
            <div className="styled">Wind speed : {weatherData?.list?.[0]?.wind?.speed}Km/h</div>


            </div>
                </>
                :
                <>
                <h3>   please enter the city name</h3>
                </>
            }
           
        </div>
    )
}