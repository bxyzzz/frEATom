import React from 'react'
import './Header.css'
import check_mark from './check_mark.png'

const Header = () => {
  return (
     <div className = "header">
	<div id="overlay">
	   <div id="content">
       	      <h1>frEATom</h1>
              <img src = {check_mark}></img>
	   </div>
	</div>
     </div>
  )
}

export default Header