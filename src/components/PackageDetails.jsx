// NPM Package
import { Link } from "react-router-dom";
import React from "react";

export default function PackageDetails({ information }) {
    return (
        <div>
        <div>
            <h3>Sender: {information.sender}</h3>
            <p>ID: {information.parcel_id}</p>
            <p>Status: {information.status}</p>
            <p>Location: {information.location_name}</p>
        </div>
        <Link to="/track">Back to packages</Link>
        </div>
    )
}