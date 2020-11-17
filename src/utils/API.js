import axios from 'axios'

export default {
    getBasicInfo: function () {
        return axios.get('/user')
    },
    updateBasicInfo: function (info) {
        return axios.put('https://calm-brook-21723.herokuapp.com/api/user', info)
    },
    getHomePageText: function () {
        return axios.get('https://calm-brook-21723.herokuapp.com/api/homeText/')
    },
    updateHomePageText: function (id, text) {
        return axios.put('https://calm-brook-21723.herokuapp.com/api/homeText/' + id, text)
    },
    getProducts: function () {
        // return axios.get('/products)
    },
    getProduct: function () {
        // return axios.get('/products)
    },
    updateProduct: function () {
        // return axios.get('/products)
    },
    deleteProduct: function () {
        // return axios.get('/products)
    },
    getFAQ: function () {
        return axios.get('https://calm-brook-21723.herokuapp.com/api/faqText')
    },
    updateFAQ: function(id, questionObj) {
        return axios.put('https://calm-brook-21723.herokuapp.com/api/faqText/' + id, questionObj)
    },
    createFAQ: function(newQuestion) {
        return axios.post('https://calm-brook-21723.herokuapp.com/api/faqText', newQuestion)
    },
    deleteFAQ: function(id) {
        return axios.delete('https://calm-brook-21723.herokuapp.com/api/faqText/' + id)
    }
}
