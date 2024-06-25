import React, { useRef } from "react";
export default function Search(props){
    const searchInput=useRef();
    return(
        <div className="search">
            <input type="search" className="input" value={props.searchData} 
            onChange={()=>props.eventHandler(searchInput.current.value)}
            ref={searchInput}
            />
            <button onclick={props.eventHandler} className="button" >Search</button>
        </div>
    )
}