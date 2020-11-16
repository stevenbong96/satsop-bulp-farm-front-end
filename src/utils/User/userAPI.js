import axios from "axios";


export default {
  getGoogleMaps: function() {
    const BASEURL = "";
    return axios.get(BASEURL);
  }
};