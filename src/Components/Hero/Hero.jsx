import React from "react";
import hand from "../../assets/hand.jpg";
import arrow from "../../assets/ar.jpg";
import men from "../../assets/men2.jpg";
import "./Hero.css";
const Hero=()=>{
    return(
     <div className="hero">
        <div className="hero-left">
  <h2>Best  Deals!    Best  Prices!</h2>
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand} alt="" height="60px"/>
        </div>
        <p>colletions</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
    <div>Latest Collections</div>
    <img src={arrow} alt="" height="25px" />
 </div>
 </div>
 

        <div className="hero-right">
<img src={men} alt="" height="300px"/>
        </div>
     </div>
    )
}
export default Hero;