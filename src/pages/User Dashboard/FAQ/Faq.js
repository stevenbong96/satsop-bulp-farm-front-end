import React, { useEffect, useState } from "react";
import "./faq.css";
import API from "../../../utils/User/userAPI";
import FaqResult from "./FaqResult";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "../Header/Header";
import Navbar from "../../../components/User Dashboard/Navbar/Navbar";
import Footer from "../../../components/User Dashboard/Footer/Footer";
import Jumbotron from "../../../components/Jumbotron/Jumbotron";
import bkgImage from "../../../images/bkg-6.jpg";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function Faq() {
  const [currentResult, setCurrentResultState] = useState([]);
  const [progress, setProgress] = React.useState(10);

  useEffect(() => {
    loadAllFAQ();
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function loadAllFAQ() {
    API.getAllFAQ()
      .then((res) => {
        // console.log(res.data);
        setCurrentResultState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="faqStyle">
        <Jumbotron image={bkgImage} headline="FAQ"></Jumbotron>
        {/* {currentResult.length > 0 ? currentResult.map(resultObj => {
                        return <FaqResult question={resultObj.question} answer={resultObj.answer} />
                    }) : <h1>Loading!</h1>} */}
        {/* <CircularProgressWithLabel value={progress} /> */}
        {currentResult.map((resultObj) => {
          return (
            <FaqResult
              question={resultObj.question}
              answer={resultObj.answer}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Faq;
