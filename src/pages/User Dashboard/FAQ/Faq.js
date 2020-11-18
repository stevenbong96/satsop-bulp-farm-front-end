import React, { useEffect, useState } from "react";
import "./faq.css";
import API from "../../../utils/User/userAPI";
import FaqResult from "./FaqResult";

function Faq() {
    const [currentResult, setCurrentResultState] = useState([])

    useEffect(() => {
        loadAllFAQ();
    },[])

    function loadAllFAQ(){
        API.getAllFAQ()
        .then(res => {
            // console.log(res.data);
            setCurrentResultState(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            {currentResult.length>0? currentResult.map(resultObj => {
                return <FaqResult question={resultObj.question} answer={resultObj.answer}/>
            }) : <h1>Loading!</h1>}
        </>
    )
}

export default Faq