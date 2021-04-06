import { Link } from "react-router-dom";

export default function Header () {
    // Properties
    const logoObject = require (`../assets/images/logo/Logotype.png`);
    const logoURL = logoObject.default;

    return (
        <nav id="navigation-menu">
            <Link to="/">
            <img src={logoURL} alt="Logo"/>
            </Link>
            <Link to="/">
            <h3>Home</h3>
            </Link>
            <Link to="/track">
            <h3>Track</h3>
            </Link>
        </nav>
        

    )

}