import React from "react";
import "./faq.css";

function FaqResult(props) {
    return (
        <div className="faqStyle is-justify-content-center">
            <div className="field">
                <label className="label">Question</label>
                <p>{props.question}</p>
            </div>

            <div className="field">
                <label className="label">Answers</label>
                <p>{props.answer}</p>
            </div>

            <hr />
        </div>
    )
}

export default FaqResult