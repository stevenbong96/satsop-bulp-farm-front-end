import axios from 'axios'

export default {
    getBasicInfo: function (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.get('https://calm-brook-21723.herokuapp.com/api/companyInfoText')
        // return axios.get('http://localhost:4000/api/companyInfoText')
    },
    updateBasicInfo: function (info, token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.put('https://calm-brook-21723.herokuapp.com/api/companyInfoText', info)
        // return axios.put('http://localhost:4000/api/companyInfoText', info)
    },
    getHomePageText: function () {
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.get('https://calm-brook-21723.herokuapp.com/api/homeText/')
        // return axios.get('http://localhost:4000/api/homeText/')
    },
    updateHomePageText: function (id, text, token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.put('https://calm-brook-21723.herokuapp.com/api/homeText/' + id, text)
        // return axios.put('http://localhost:4000/api/homeText/' + id, text)
    },
    getProducts: function () {
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.get('https://calm-brook-21723.herokuapp.com/api/products')
        // return axios.get('http://localhost:4000/api/products')
    },
    postProduct: function (productObj) {
        // return axios.post('https://calm-brook-21723.herokuapp.com/api/product', productObj)
    },
    updateProduct: function (id, productObj, token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.put('https://calm-brook-21723.herokuapp.com/api/update/product/' + id, productObj)
        // return axios.put('http://localhost:4000/api/update/product/' + id, productObj)
    },
    deleteProduct: function (id, token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.delete('https://calm-brook-21723.herokuapp.com/api/product/' + id)
        // return axios.delete('http://localhost:4000/api/product/' + id)
    },
    getFAQ: function () {
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.get('https://calm-brook-21723.herokuapp.com/api/faqText')
        // return axios.get('http://localhost:4000/api/faqText')
    },
    createFAQ: function (newQuestion, token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.post('https://calm-brook-21723.herokuapp.com/api/faqText', newQuestion)
        // return axios.post('http://localhost:4000/api/faqText', newQuestion)
    },
    updateFAQ: function (id, questionObj, token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.put('https://calm-brook-21723.herokuapp.com/api/faqText/' + id, questionObj)
        // return axios.put('http://localhost:4000/api/faqText/' + id, questionObj)
    },
    deleteFAQ: function (id, token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.delete('https://calm-brook-21723.herokuapp.com/api/faqText/' + id)
        // return axios.delete('http://localhost:4000/api/faqText/' + id)
    },
    getInstructions: function () {
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.get('https://calm-brook-21723.herokuapp.com/api/PlantingInstructionText')
        // return axios.get('http://localhost:4000/api/PlantingInstructionText')
    },
    updateInstructions: function (id, obj, token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.put('https://calm-brook-21723.herokuapp.com/api/PlantingInstructionText/' + id, obj)
        // return axios.put('http://localhost:4000/api/PlantingInstructionText/' + id, obj)
    }
}
