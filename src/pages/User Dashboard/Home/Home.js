import React from "react";
import Header from "../Header/Header";
import Direction from "../Direction/Direction";
import Contact from "../Contact/Contact";

function Home() {
    return(
        <div>
            <h1>This is the Home page</h1>
            <Direction />
            <Contact />
        </div>
    )
}

export default Home