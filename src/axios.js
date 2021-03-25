import axios from 'axios'

const instance= axios.create({
    baseURL:'https://nbchatting.herokuapp.com/'
})
export default instance; 

