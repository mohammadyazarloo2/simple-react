import React from 'react'
import './style.css'

const Header=(props)=>{
    return(
        <header className="header">
            <nav className="headerMenu">
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </nav>
            <div className="socialmedia">
                Social media links
            </div>
        </header>
    )
}

export default Header