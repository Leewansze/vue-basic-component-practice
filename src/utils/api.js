import Axios from 'axios'

const demoService = Axios.create({
  baseURL: 'http://localhost:8085/api',
  timeout: 30000
})

export default {demoService}
