import React from "react"
import Group from "./images/Group.png"

function Banner(){
    return(
        <section className="banner">
            <img src={Group} className="banner--logo" alt="logo" />
            <h1 className="title">Online Experiences</h1>
            <h3 className="subtitle">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</h3>
        </section>
    )
}

export default Banner