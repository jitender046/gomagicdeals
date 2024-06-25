import React from "react";
export default function Result({weatherData}){
    return(
        <div className="result">
            {
                weatherData.name !==0
                ?
                <>
               <h2> {weatherData?.city?.name}</h2>
                <div className="suncode">
               <p>
                 <div>Sunrise {weatherData?.city?.sunrise}</div>
                 <div>Sunset {weatherData?.city?.sunset}</div>
               </p>
                 </div>
            <div className="all">
            <div>Temp_min: {weatherData?.list?.[0]?.main?.temp_min}</div>
            <div>Temp_max: {weatherData?.list?.[0]?.main?.temp_max}</div>
            </div>

            <div  className="all1">
            <div><img src={`http://openweathermap.org/img/wn/${weatherData?.list?.[0]?.weather?.[0]?.icon}@2x.png`}/></div>
            <div>Description<br/>{weatherData?.list?.[0]?.weather?.[0]?.description}</div>
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