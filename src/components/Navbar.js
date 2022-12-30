import React from "react"
import airbnblogo from './images/airbnblogo.png'

function Navbar(){
    return(
        <nav>
            <img src={airbnblogo} className="nav--logo" alt="logo" />
        </nav>
    )
}

export default Navbar