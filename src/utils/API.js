import axios from 'axios'

export default {
    updateBasicInfo: function (info) {
        return axios.put('/user', info)
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
    updateFAQ: function(id) {
        return axios.put('https://calm-brook-21723.herokuapp.com/api/faqText/' + id)
    },
    createFAQ: function() {
        return axios.post('https://calm-brook-21723.herokuapp.com/api/faqText')
    },
    deleteFAQ: function(id) {
        return axios.delete('https://calm-brook-21723.herokuapp.com/api/faqText/' + id)
    }
}

