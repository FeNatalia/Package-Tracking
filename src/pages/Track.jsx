// NPM Package
import React, { useEffect, useState } from "react";

//Project files
import Packages from "../components/Packages";

export default function Track(){
    //Properties
    const trackPictureObject = require (`../assets/images/track/track-picture.jpg`);
    const trackPictureURL = trackPictureObject.default;

    const [status, setStatus] = useState(0);
    const [parcels, setParcels] = useState([]);

    const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then(onFetchSuccess)
        .catch(onFetchFail);
    }, [setParcels, setStatus]);

    function onFetchSuccess(json) {
        setParcels(json);
        setStatus(2);
    }

    function onFetchFail(error) {
        console.error("There was an error", error);
        setStatus(1);
    }

    return (
        
        <div id="track-page" className="container">
            <div className="track">
            <img src={trackPictureURL} alt="an illustration of a hand holding a mobile phone"/>
            <h1>Track my parcel</h1>
            <br/>
            {status === 0 && <p>Loading</p>}
            {status === 1 && <p>Error</p>}
            {status ===2 && <Packages parcels={parcels}/>}
            </div>
        </div>
    )
}
