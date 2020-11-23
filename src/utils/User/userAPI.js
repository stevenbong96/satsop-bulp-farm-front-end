import axios from "axios";

// const apiURL = "https://calm-brook-21723.herokuapp.com";
const apiURL = "http://localhost:4000";

export default {
  getAllFAQ: function () {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/faqText";
    return axios.get(BASEURL);
  },
  getAllProducts: function () {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/products";
    return axios.get(BASEURL);
  },
  getProductsName: function (query) {
    const BASEURL = `https://calm-brook-21723.herokuapp.com/api/product/${query}`;
    return axios.get(BASEURL);
  },
  getAllHomeInfo: function () {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/homeText/";
    return axios.get(BASEURL);
  },
  getLogin: function (userData) {
    return axios.post(`${apiURL}/api/login`, userData);
    
    // console.log(userData);
    // return fetch(`${apiURL}/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(userData)
    // })
    //   .then(res => {
    //     // console.log(res);
    //     return res.json();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  },
  getAdminInfo: function (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios.get(`${apiURL}/api/secrets`);

    // return fetch(`${apiURL}/secrets`, {
    //   headers: {
    //     "authorization": `Bearer ${token}`
    //   }
    // })
    //   .then(res => {
    //     // console.log(res);
    //     return res.json();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  },
  getAllPlantingInfo: function () {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/PlantingInstructionText";
    return axios.get(BASEURL);
  },
  getGoogleMaps: function () {
    const BASEURL = "";
    return axios.get(BASEURL);
  },
};
