import axios from 'axios'

export default {
    updateBasicInfo: function (info) {
        return axios.put('https://calm-brook-21723.herokuapp.com/api/user', info)
    },
    getBasicInfo: function () {
        return axios.get('/user')
    },
    getAboutInfo: function () {
        // return axios.get('/aboutText')
    },
    getProducts: function () {
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
