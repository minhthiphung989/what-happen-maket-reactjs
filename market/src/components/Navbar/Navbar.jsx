import React from "react";
import './Navbar.scss'
import logo from '../../img/logo.png'
export default function Navbar(){
    return<>
        <div className='navbar'>
            <div className='nav-brand'>
                <img src={logo} alt="" />
            </div>
            
            <ul class="nav-items">
                <li><a href="#about">INTRODUCTION</a></li>
                <li><a href="#my-works">SOLUTION</a></li>
                <li><a href="#contact-me">RATE PLAN</a></li>
                <hr style={{width:'0px', height:'35px'}}/>
                <li><a href="#my-works">LOGIN</a></li>
                <li><a href="#contact-me">APPLY FOR FREE</a></li>
            </ul>

            
            <div className='nav'>
        
                <input type="checkbox" id="checkbox"/>
                <label for="checkbox" id="icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul>
                    <li><a href="#about">INTRODUCTION</a></li>
                    <li><a href="#my-works">SOLUTION</a></li>
                    <li><a href="#contact-me">RATE PLAN</a></li>
                    <li><a href="#my-works">LOGIN</a></li>
                    <li><a href="#contact-me">APPLY FOR FREE</a></li>
                </ul>

            </div>
        </div>
    </>
}