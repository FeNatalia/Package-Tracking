import { Link } from "react-router-dom";

export default function Packages({information}) {
    //Properties
    const parcelLogoObject = require (`../assets/images/logo/parcel-logo.png`)
    const parcelLogoURL = parcelLogoObject.default;
    const PackagesArray = information.map((item) => (
        <div key={item.id}> 
        <Link to={`track/${item.parcel_id}`}><img src={parcelLogoURL} alt="a box illustration"/></Link>
        <h1>From: {item.sender}</h1>
        <h3>Status: {item.status}</h3>
        <p>ETA: {item.eta}</p>
        </div>
    ));

    return (
<div>
{PackagesArray}
</div>
    )
}


