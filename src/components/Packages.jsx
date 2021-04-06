// import { Link } from "react-router-dom";

export default function Packages({parcels}) {
    //Properties
    const parcelLogoObject = require (`../assets/images/logo/parcel-logo.png`)
    const parcelLogoURL = parcelLogoObject.default;
    const PackagesArray = parcels.map((item) => (
        
    <div key={item.id} className="box"> 
        {/* <Link to={`track/${item.parcel_id}`}><img src={parcelLogoURL} alt="a box illustration"/></Link> */}
        <img src={parcelLogoURL} alt="a box illustration"/>
        <h1>From: {item.sender}</h1>
        <h3>Status: {item.status}</h3>
        <p>Parcel id: {item.parcel_id} </p>
        <p>Pick-up location: {item.location_name}</p>
        <p>ETA: {item.eta}</p>

    </div>
    ));

    return (
        <div>
        {PackagesArray}
        </div>
    )
}


