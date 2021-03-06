import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Direction from "../Direction/Direction";
import Contact from "../Contact/Contact";
import About from "../About/About";
import "./home.css";
import API from "../../../utils/User/userAPI";
import StoreInfo from "../Store Info/StoreInfo";
import Navbar from "../../../components/User Dashboard/Navbar/Navbar";
import Footer from "../../../components/User Dashboard/Footer/Footer";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import Jumbotron from "../../../components/Jumbotron/Jumbotron";
import homeBkg from "../../../images/bkg-9.jpg";

function Home() {
  // Declare state
  const [currentHome, setCurrentHomeState] = useState({
    aboutUsMain: "",
    aboutUsSub: "",
    salesInfo: "",
    welcome: "",
    brief: "",
  });

  useEffect(() => {
    loadAllData();
  }, []);

  function loadAllData() {
    API.getAllHomeInfo()
      .then((res) => {
        // console.log(res.data);
        const homeTitle = [
          "welcome",
          "brief",
          "aboutUsMain",
          "aboutUsSub",
          "salesInfo",
        ];
        const filterHomeInfo = res.data.filter((homeObj) =>
          homeTitle.includes(homeObj.title)
        );
        // setCurrentHomeState(filterHomeInfo);
        // console.log(filterHomeInfo);
        let resultsObj = {};
        filterHomeInfo.forEach((resultObj) => {
          resultsObj[resultObj.title] = {
            text: resultObj.text,
          };
        });
        setCurrentHomeState(resultsObj);
        // console.log(currentHome);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="homeStyle">
        {/* <PhotoCarousel /> */}
        <Jumbotron
          image={homeBkg}
          headline="Welcome to Satsop Bulb Farm"
          subtitle="Growing the finest bulbs for over 50 years"
        ></Jumbotron>
        <div className="section">
          <div className="container">
            <StoreInfo storeText={currentHome.salesInfo.text} />
            {/* <Direction /> */}
            <Contact />
            <About
              text1={currentHome.aboutUsMain.text}
              text2={currentHome.aboutUsSub.text}
              text3={currentHome.welcome.text}
              text4={currentHome.brief.text}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
