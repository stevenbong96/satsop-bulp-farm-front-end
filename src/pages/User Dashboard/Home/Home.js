import React from "react";
import Header from "../Header/Header";
import Direction from "../Direction/Direction";
import Contact from "../Contact/Contact";
import About from "../About/About";
import "./home.css";

function Home() {
    return(
        <div className="homeStyle">
            <About />
            <Direction />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Contact />
        </div>
    )
}

export default Home