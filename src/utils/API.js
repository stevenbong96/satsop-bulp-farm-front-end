import axios from 'axios'

export default {
    updateBasicInfo: function(info) {
        return axios.put('/user', info)
    },
    getBasicInfo: function() {
        // return axios.get('/user')
    }
}