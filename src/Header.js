import React from "react";
import './Header.css' 
import  DarkMode from './DarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <>
        <nav>
		<label class="switch">
			<input type="checkbox"/>
			<DarkMode />
		</label>
		<input type="checkbox" id="check" name="" value=""/>
		<label for="check" id="checkbtn"><FontAwesomeIcon icon={faBars} /></label>
		<label className="logo">Go Magic Deals</label>
		<ul>
			<li><a className="active" href="/">home</a></li>
			<li><a href="/about">about</a></li>
			<li><a href="/services">services</a></li>
			<li><a href="/gallery">gallery</a></li>
			<li><a href="/contact">contact</a></li>
		</ul>
	</nav>
    </>
    )
}  
export default Header;