import * as axios from 'axios'

const BASE_URL = 'http://localhost:3000'

// export default class KnowledgeRepo {
export default {

  insert (formData) {
    const url = `${BASE_URL}/api/knowledgeRepo/insert`
    return axios.post(url, formData)
          // get data
          .then(x => x.data)
  },
  upsert (formData) {
    const url = `${BASE_URL}/api/knowledgeRepo/upsert`
    return axios.post(url, formData)
          // get data
          .then(x => x.data)
  },
  selectAll (formData) {
    const url = `${BASE_URL}/api/knowledgeRepo/getAll`
    return axios.get(url)
          // get data
          .then(x => x.data)
  },
  selectById (id) {
    const url = `${BASE_URL}/api/knowledgeRepo/getById/` + id
    return axios.get(url)
          // get data
          .then(x => x.data)
  }

}