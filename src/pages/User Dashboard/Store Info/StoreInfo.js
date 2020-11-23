import React , {useState, useEffect}from "react";
// import MapView from "./mapView";
import "./storeInfo.css";
// import 'leaflet/dist/leaflet.css';
// import {Link} from "react-router-dom";
import API from "../../../utils/User/userAPI";

function StoreInfo(props) {
    const [currentStoreInfo, setCurrentStoreInfo] = useState([]);

    useEffect(() => {
        loadStoreInfo();
    }, [])

    function loadStoreInfo(){
        API.getStoreInfo()
        .then(res => {
            // console.log(res.data);
            setCurrentStoreInfo(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }


    // {currentStoreInfo.map(storeObj => {
    //     console.log(storeObj)
    //     return <phoneNumber={storeObj.phoneNumber} email={storeObj.companyEmail} hours={storeObj.hours}/>
    // })}

    return (
        <div className="storeStyle">
            <h2 className="title is-2">Store Info</h2>
            <br/>
            <h6 className="subtitle is-6 storeText has-text-white">{props.storeText}</h6>
            <div className="columns is-justify-content-center storeText">
                <div className="column is-12">
                    <h6 className="subtitle is-6 has-text-white">Phone Number: {currentStoreInfo.map(phoneObj => phoneObj.phoneNumber)}</h6>
                </div>
            </div>
            <div className="columns is-justify-content-center storeText">
                <div className="column is-12">
                    <h6 className="subtitle is-6 has-text-white">Email: {currentStoreInfo.map(emailObj => emailObj.companyEmail)}</h6>
                </div>
            </div>
            <div className="columns is-justify-content-center storeText">
                <div className="column is-12">
                    <h6 className="subtitle is-6 has-text-white">Store Hours: Monday-Friday 10AM - 5PM</h6>
                    {/* <p>{currentStoreInfo.map(hoursObj => hoursObj.map(hoursObj2 => console.log(hoursObj2)))}</p> */}
                </div>
            </div>
        </div>
    )
}

export default StoreInfo