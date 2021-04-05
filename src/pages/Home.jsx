import { Link } from "react-router-dom";

export default function Home() {
    const homePictureObject = require (`../assets/images/home/home-picture.jpg`);
    const homePictureURL = homePictureObject.default;

    return (
        <div id="home">
            <img src={homePictureURL} alt="A parcel with balloons illustration"/>
            <h1>Yellowbox tracks your parcel live</h1>
            <Link className="button" to="/track"><button>Track now</button></Link>
        </div>
    )
}