import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import SideBar from "../sidebar/sideBar.js" 
import '../sidebar/sidebar.css'
import $ from 'jquery'


const Navbar = () => {


$('#hamburger').on('click', function(){
  $('#x').addClass('active');
})

  return (
    <>
      <div>

        <Link class="logoContainer" to="/">
          <h1 class="logo">Developed by <span class="name">Vegas Cruz</span></h1>
        </Link>
        <span id="hamburger">
          <label id="nav-icon1" for="nav-menu1" /*onClick={myFunction}*/>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </span>
        <span id='x'>
          <SideBar class="sideBar" id="sideBar"/>
        </span>
        <nav class="navBar">
          <ul>
              <li><Link class = "links" to="/My-Portfolio/">Home</Link></li>
              <li><Link class = "links" to="/My-Portfolio/About">About</Link></li>
              <li><Link class = "links" to="/My-Portfolio/Contact">My Work</Link></li>
              <li><Link class = "links" to="/My-Portfolio/MyWork">Resume</Link></li>
              <li><Link class = "links" to="/My-Portfolio/Resume">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar