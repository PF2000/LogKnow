import * as axios from 'axios'
// import config from '../config'

// const BASE_URL = config.serverURI // 'http://localhost:3000'

export default {

  uploadFile (formData) {
    const url = '/api/uploadFile'
    return axios.post(url, formData)
          // get data
          .then(x => x.data)
  }

}
