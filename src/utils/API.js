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
        return axios.get('https://calm-brook-21723.herokuapp.com/api/products')
    },
    postProduct: function (productObj) {
        // return axios.post('https://calm-brook-21723.herokuapp.com/api/product', productObj)
    },
    updateProduct: function (id, productObj) {
        // return axios.update('https://calm-brook-21723.herokuapp.com/api/product/ + id, productObj)
    },
    deleteProduct: function (id) {
        // return axios.delete('https://calm-brook-21723.herokuapp.com/api/product/' + id)
    },
    getFAQ: function () {
        return axios.get('https://calm-brook-21723.herokuapp.com/api/faqText')
    },
    createFAQ: function (newQuestion) {
        return axios.post('https://calm-brook-21723.herokuapp.com/api/faqText', newQuestion)
    },
    updateFAQ: function (id, questionObj) {
        return axios.put('https://calm-brook-21723.herokuapp.com/api/faqText/' + id, questionObj)
    },
    deleteFAQ: function (id) {
        return axios.delete('https://calm-brook-21723.herokuapp.com/api/faqText/' + id)
    },
    getInstructions: function () {
        return axios.get('https://calm-brook-21723.herokuapp.com/api/PlantingInstructionText')
    },
    updateInstructions: function (id, obj) {
        return axios.put('https://calm-brook-21723.herokuapp.com/api/PlantingInstructionText/' + id, obj)
    }
}
