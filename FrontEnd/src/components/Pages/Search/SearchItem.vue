<template>
  <section>
    <div class="row">
      <div class="col-sm-12">
        <div class="box box-info">
          <div class="box-header">
            <h3 class="box-title">Activity Log Item</h3>
          </div>
          <div class="box-body">
            <div class="form-horizontal">
              <div class="form-group">
                <label for="DateTime" class="col-sm-2 control-label">
                Search By Tag:
                </label>
                <div class="col-sm-10">
                  <v-select
                  	:debounce="250"
                  	:on-search="getOptions"
                  	placeholder="Search knowledgeItem..."
                  	label="full_name"
                    searchable
                    :closeOnSelect="false"
                    :noDrop="true"
                  >
                  </v-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- /.content -->
</template>

<script>

import vSelect from 'vue-select'
import KnowledgeRepo from '../../../api/knowledgeRepo.service.js'
import ResponseMessages from '../Utils/ResponseMessages'

export default {
  data () {
    return {
      optionsArr: [],
      options: '',
      serviceMessages: {
        status: '',
        message: ''
      }
    }
  },
  watch: {

  },
  methods: {
    getOptions (search, loading) {
      var self = this
      if (search !== undefined) {
        // var searchToSend = ''
        // searchToSend = self.makeSerachArray(search)
        var src = {'search': [search]}
        KnowledgeRepo.selectByTag(src)
         .then(x => {
           // Updates the id on the CLientSide
           if (x.message.objBiz !== []) {
             self.options = x.message.objBiz
             self.$emit('NewSeachItems', self.options)
           }
         })
         .catch(err => {
           self.serviceMessages = {
             status: false,
             message: { message: err.toString() }
           }
         })
      }
    },
    makeSerachArray (searchh) {
      var self = this
      var arr = self.optionsArr
      console.log(searchh.slice(0, -1))
      console.log(arr[arr.length - 1])
      console.log('push')
      if (searchh.slice(0, -1) !== arr[arr.length - 1]) {
        arr.pop()
        arr.push(searchh)
      }

      return arr
    }
  },
  created () {

  },
  components: {
    ResponseMessages: ResponseMessages,
    vSelect: vSelect
  }
}
</script>

<style>

</style>
