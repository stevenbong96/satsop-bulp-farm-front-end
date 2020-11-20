import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Direction from "../Direction/Direction";
import Contact from "../Contact/Contact";
import About from "../About/About";
import "./home.css";
import API from "../../../utils/User/userAPI";
import StoreInfo from "../Store Info/StoreInfo";

function Home() {
    // const [setAboutMain, setAboutMainState] = useState({
    //     aboutUsMain: ""
    // });
    // const [setAboutSub, setAboutSubState] = useState({
    //     aboutUsSub: ""
    // });
    // const [setSalesInfo, setSalesInfoState] = useState({
    //     salesInfo: ""
    // });
    // const [setWelcome, setWelcomeState] = useState({
    //     welcome: ""
    // });
    // const [setBrief, setBriefState] = useState({
    //     brief: ""
    // });

    const [currentHome, setCurrentHomeState] = useState({
        aboutUsMain: "",
        aboutUsSub: "",
        salesInfo: "",
        welcome: "",
        brief: ""
    })

    useEffect(() => {
        loadAllData();
    }, [])

    function loadAllData(){
        API.getAllHomeInfo()
        .then(res => {
            // console.log(res.data);
            const homeTitle = ["welcome", "brief", "aboutUsMain", "aboutUsSub", "salesInfo"];
            const filterHomeInfo = res.data.filter(homeObj => homeTitle.includes(homeObj.title))
            // setCurrentHomeState(filterHomeInfo);
            // console.log(filterHomeInfo);
            let resultsObj = {};
            filterHomeInfo.forEach(resultObj => {
                resultsObj[resultObj.title] = {
                    text: resultObj.text,
                }
            })
            setCurrentHomeState(resultsObj);
            // console.log(currentHome);
        })
        .catch(err => {
            console.log(err);
        })
    }

    // const displayWelcome = currentHome.filter(welcomeText => welcomeText.title === "welcome");
    // console.log(displayWelcome);
    
    // const displayAboutUs = currentHome.filter(aboutUsText => aboutUsText.title === "aboutUsMain" && aboutUsText.title === "aboutUsSub");
    // console.log(displayAboutUs);

    // const displayAboutSub = currentHome.filter(aboutUsSubText => aboutUsSubText.title === "aboutUsSub");
    // console.log(displayAboutSub);

    // const displaySales = currentHome.filter(salesInfoText => salesInfoText.title === "salesInfo");
    // console.log(displaySales);

    // const displayBrief = currentHome.filter(briefText => briefText.title === "brief");
    // console.log(displayBrief);

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("SELECTED")
    }

    return(
        <div className="homeStyle">
            <About text1={currentHome.aboutUsMain.text} text2={currentHome.aboutUsSub.text} text3={currentHome.welcome.text} text4={currentHome.brief.text}/>
            <StoreInfo storeText = {currentHome.salesInfo.text}/>
            <Direction />
            <Contact submit={handleFormSubmit}/>
        </div>
    )
}

export default Home