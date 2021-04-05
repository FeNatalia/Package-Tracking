import Packages from "../components/Packages";
import { useEffect, useState } from "react";

export default function Track(){

    const [status, setStatus] = useState(0);
    const [information, setData] = useState([]);

    const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then(onFetchSuccess)
        .catch(onFetchFail);
    }, [setData, setStatus]);

    function onFetchSuccess(json) {
        setData(json);
        setStatus(2);
    }

    function onFetchFail(error) {
        console.error("There was an error", error);
        setStatus(1);
    }

    return (
        <div id="track-page" className="container">
        <h1>Track my parcel</h1>
        {status === 0 && <p>Loading</p>}
        {status === 1 && <p>Error</p>}
        {status ===2 && <Packages information={information}/>}
        </div>
    )
}
