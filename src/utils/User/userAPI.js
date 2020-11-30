import axios from "axios";

const apiURL = "https://calm-brook-21723.herokuapp.com";
// const apiURL = "http://localhost:4000";

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
    // const BASEURL = "http://localhost:4000/api/homeText/";
    return axios.get(BASEURL);
  },
  getLogin: function (userData) {
    return axios.post(`${apiURL}/api/login`, userData);
  },
  getAdminInfo: function (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios.get(`${apiURL}/api/secrets`);
  },
  getAllPlantingInfo: function () {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/PlantingInstructionText";
    return axios.get(BASEURL);
  },
  sendContactInfo: function (contactData) {
    console.log(contactData);
    return axios.post(`${apiURL}/api/email`, contactData);
  },
  getStoreInfo: function(){
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/companyInfoText";
    return axios.get(BASEURL);
  },
  getGoogleMaps: function() {
    const BASEURL = "";
    return axios.get(BASEURL);
  }
};
