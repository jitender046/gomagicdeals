import React from "react";
import './Header.css' 

function Header(){
    return(
        <>
        <nav>
		<label class="switch">
			<input type="checkbox"/>
			<span className="slider" onclick="onDarkMode()"></span>
		</label>
		<input type="checkbox" id="check" name="" value=""/>
		<label for="check" id="checkbtn"><i class="fa fa-bars"></i></label>
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
function onDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 export {
    Header,
    onDarkMode
 } 