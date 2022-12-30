import React from "react"
import Star from "./images/Star.png"

function Card(props){
    let badgeText
    if (props.object.openSpots === 0){
        badgeText="SOLD OUT"
    }
    else if(props.object.location === "Online"){
        badgeText="ONLINE"
    }
    return(
        <section className="card">
            {console.log(props)}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.object.coverImg} className="card--pic" alt="logo" />
            <div className="card--info">
                <img src={Star} className="card--star"/>
                <span className="card--rating">{props.object.stats.rating}</span>
                <span className="card--text gray"> ({props.object.stats.reviewCount}) • {props.object.location}</span>
            </div>
            <p className="card--title">{props.object.title}</p>
            <p className="card--price"><span className="bold">From ${props.object.price} </span>/ person</p>
        </section>
    )
}

export default Card