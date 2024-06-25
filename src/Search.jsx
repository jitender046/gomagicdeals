import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Search(props){
    const searchInput=useRef();
    return(
        <div className="search">
            <input type="search" className="input" value={props.searchData} 
            onChange={()=>props.eventHandler(searchInput.current.value)}
            ref={searchInput}
            />
            <button onclick={props.eventHandler} className="button" ><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
    )
}