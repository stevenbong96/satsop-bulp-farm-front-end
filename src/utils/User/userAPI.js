import axios from "axios";


export default {
  getAllFAQ: function() {
    const BASEURL = "https://calm-brook-21723.herokuapp.com/api/faqText";
    return axios.get(BASEURL);
  }
};  