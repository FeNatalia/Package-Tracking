// NPM Packages
import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
    //Properties
    const homePictureObject = require (`../assets/images/home/home-picture.jpg`);
    const homePictureURL = homePictureObject.default;

    return (
        <div className="home">
            <img src={homePictureURL} alt="A parcel with balloons illustration"/>
            <h1>Yellowbox tracks your parcel live</h1>
            <Link to="/track"><button className="button">Track now</button></Link>
        </div>
    )
}