import axios from "axios";


const apiURL = "https://calm-brook-21723.herokuapp.com";
export default {
  getAllFAQ: function() {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/faqText";
    return axios.get(BASEURL);
  },
  getAllProducts: function() {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/products";
    return axios.get(BASEURL);
  },
  getProductsName: function(query) {
    const BASEURL = `https://calm-brook-21723.herokuapp.com/api/product/${query}`;
    return axios.get(BASEURL);
  },
  getAllHomeInfo: function() {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/homeText/";
    return axios.get(BASEURL);
  },
  getAllPlantingInfo: function() {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/PlantingInstructionText";
    return axios.get(BASEURL);
  },
  getLogin: function (contactData) {
    console.log(contactData);
    return fetch(`${apiURL}/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactData)
    })
      .then(res => {
        console.log(res);
        res.json();
      })
      .catch(err => {
        console.log(err);
      })
  },
  getGoogleMaps: function() {
    const BASEURL = "";
    return axios.get(BASEURL);
  },
};
