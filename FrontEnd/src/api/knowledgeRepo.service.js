import * as axios from 'axios'
// import config from '../config'

// const BASE_URL = config.serverURI // 'http://localhost:3000'

// export default class KnowledgeRepo {
export default {

  insert (formData) {
    const url = '/api/knowledgeRepo/insert'
    return axios.post(url, formData)
          // get data
          .then(x => x.data)
  },
  upsert (formData) {
    const url = '/api/knowledgeRepo/upsert'
    return axios.post(url, formData)
          // get data
          .then(x => x.data)
  },
  selectAll (formData) {
    const url = '/api/knowledgeRepo/getAll'
    return axios.get(url)
          // get data
          .then(x => x.data)
  },
  selectById (id) {
    const url = '/api/knowledgeRepo/getById/' + id
    return axios.get(url)
          // get data
          .then(x => x.data)
  },
  selectByTag (tag) {
    console.log(tag)
    const url = '/api/knowledgeRepo/getByTag'
    return axios.post(url, tag)
          // get data
          .then(x => x.data)
  },
  selectAllTags () {
    const url = '/api/knowledgeRepo/getAllTags'
    return axios.get(url)
          // get data
          .then(x => x.data)
  },
  deleteById (id) {
    const url = '/api/knowledgeRepo/deleteById/' + id
    return axios.delete(url)
          // get data
          .then(x => x.data)
  }
  // deleteById (id) {
  //   const url = `${BASE_URL}/api/knowledgeRepo/deleteById/` + id
  //  return axios.delete(url)
  //        // get data
  //        .then(x => x.data)
  // }

}
