import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
             <div class="header">
           
           <a href="#default" class="logo">Countries</a>
           <div class="header-right">
             
             <NavLink className="active" to={"/Home"}>All</NavLink>
           <NavLink to={"/Asia"}>Asia</NavLink>
           <NavLink to={"/Europe"}>Europe</NavLink>
           </div>
           
            
                 </div>
            
        </div>
    )
}

export default Header
