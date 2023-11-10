import React from 'react'
import '../Navbar/Navbar.css'
import { FaLocationDot } from "react-icons/fa6"
import { AiOutlineDown } from "react-icons/ai"
import { FaOpencart } from "react-icons/fa6"
import { AiOutlineUserAdd } from "react-icons/ai"


function Navbar() {

    const handleonclick = () => {
        alert("this location detailes")
    }
    return (
        <div className='nav-bar'>
            <ul>
                <a href="/"><FaOpencart className='loc' /></a>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/category">Category</a></li>
            </ul>
        </div>
    )
}

export default Navbar
