import axios from 'axios'

export default {
    getBasicInfo: function (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // return axios.get('https://calm-brook-21723.herokuapp.com/api/companyInfoText')
        return axios.get('http://localhost:4000/api/companyInfoText')
    },
    updateBasicInfo: function (info) {
        return axios.put('https://calm-brook-21723.herokuapp.com/api/companyInfoText', info)
    },
    getHomePageText: function () {
        return axios.get('https://calm-brook-21723.herokuapp.com/api/homeText/')
    },
    updateHomePageText: function (id, text) {
        return axios.put('https://calm-brook-21723.herokuapp.com/api/homeText/' + id, text)
    },
    getProducts: function (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.get('https://calm-brook-21723.herokuapp.com/api/products')
    },
    postProduct: function (productObj) {
        // return axios.post('https://calm-brook-21723.herokuapp.com/api/product', productObj)
    },
    updateProduct: function (id, productObj) {
        return axios.put('https://calm-brook-21723.herokuapp.com/api/update/product/' + id, productObj)
    },
    deleteProduct: function (id) {
        return axios.delete('https://calm-brook-21723.herokuapp.com/api/product/' + id)
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
