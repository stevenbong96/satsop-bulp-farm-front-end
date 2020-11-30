import React, { useEffect, useState } from "react";
import "./planting.css";
import API from "../../../utils/User/userAPI";
import PlantingResult from "./PlantingResult";
import Header from "../Header/Header";
import Navbar from "../../../components/User Dashboard/Navbar/Navbar";
import Footer from "../../../components/User Dashboard/Footer/Footer";
import Jumbotron from "../../../components/Jumbotron/Jumbotron";
import bkgImage from "../../../images/bkg-7.jpg";

function Planting() {
  const [currentPlantingResult, setCurrentPlantingResultState] = useState([]);
  // const [progress, setProgress] = React.useState(10);

  useEffect(() => {
    loadAllFAQ();
  }, []);

  function loadAllFAQ() {
    API.getAllPlantingInfo()
      .then((res) => {
        // console.log(res.data);
        setCurrentPlantingResultState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="plantingStyle">
        <Jumbotron image={bkgImage} headline="Planting FAQ"></Jumbotron>
        {/* {currentResult.length > 0 ? currentResult.map(resultObj => {
                return <FaqResult question={resultObj.question} answer={resultObj.answer} />
            }) : <h1>Loading!</h1>} */}
        {/* <CircularProgressWithLabel value={progress} /> */}
        {currentPlantingResult.map((resultObj) => {
          return (
            <PlantingResult
              question={resultObj.title}
              answer={resultObj.text}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Planting;
