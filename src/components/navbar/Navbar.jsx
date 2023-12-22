import React from 'react'
import "./navbar.css"

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="title"><h2>Title</h2></div>
            <div className="links">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <button className='btn'>Button</button>
            </div>
        </div>
    )
}

export default Navbar