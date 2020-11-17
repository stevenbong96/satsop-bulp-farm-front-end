import React, { useEffect, useState } from "react";
import "./faq.css";
import API from "../../../utils/User/userAPI";
import FaqResult from "./FaqResult";

function Faq() {
    const [currentResult, setCurrentResultState] = useState({
        result:""
    })

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
            {currentResult.map(resultObj => {
                return <FaqResult question={resultObj.question} answer={resultObj.answer}/>
            })}
        </>
    )
}

export default Faq