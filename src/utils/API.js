import axios from 'axios'

export default {
    updateBasicInfo: function (info) {
        return axios.put('/user', info)
    },
    getBasicInfo: function () {
        // return axios.get('/user')
    },
    getAboutInfo: function () {
        // return axios.get('/aboutText')
    },
    getProducts: function () {
        // return axios.get('/products)
    },
    getFAQ: function () {
        // return axios.get('/products')
    },
    deleteFAQ: function() {
        
    }
}

