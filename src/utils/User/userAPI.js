import axios from "axios";


export default {
  getAllProducts: function() {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/products";
    return axios.get(BASEURL);
  },
  getProductsName: function(query) {
    const BASEURL = `https://calm-brook-21723.herokuapp.com/api/product/${query}`;
    return axios.get(BASEURL);
  },
  getGoogleMaps: function() {
    const BASEURL = "";
    return axios.get(BASEURL);
  }
};
