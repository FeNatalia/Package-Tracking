// NPM Package
import { Link } from "react-router-dom";

//Project files
import PackageDetails from "./PackageDetails";

export default function Package({ props }) {
    //Properties
    const routerID= props.match.params.id;
    const myPackage = props.data.find((item)=> item.parcel_id === routerID);

    return (
        <div>
        <div>
            {myPackage.map((item) => (<PackageDetails key={item.id} information={item}/>
            ))}
        </div>
        <Link to="/track">Back to packages</Link>
        </div>
    )
}