<template>
  <section class="content" >
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
                  Tags:
                  </label>
                  <div class="col-sm-10">
                    <vSelect v-model="knowledgeItem.OptionsTagsSelected" multiple pushTags taggable :closeOnSelect="false" :options="OptionsTags"></vSelect>
                  </div>
                </div>
                <!-- Title -->
                <div class="form-group">
                  <label for="picker2" class="col-sm-2 control-label">
                    Title:
                  </label>
                  <div class="col-sm-10">
                    <input v-model="knowledgeItem.title" name="txtTitle" class="form-control" type="text" />
                  </div>
                </div>
                <!-- Summary -->
                <div class="form-group">
                  <label for="picker2" class="col-sm-2 control-label">
                    Summary:
                  </label>
                  <div class="col-sm-10">
                    <textarea v-model="knowledgeItem.summary" name="txtSummary" class="form-control" type="text" rows="3"></textarea>
                  </div>
                </div>
                <!-- Files -->
                <div class="form-group">
                  <label for="picker2" class="col-sm-2 control-label">
                    Editor:
                  </label>
                  <div class="col-sm-10">
                      <vue-editor v-model="knowledgeItem.editorContent"></vue-editor>
                    <!--SUCCESS-->
                  </div>
                </div>
                <!-- Comments -->
                <div class="form-group">
                  <label for="picker2" class="col-sm-2 control-label">
                    Comments:
                  </label>
                  <div class="col-sm-10">
                    <textarea v-model="knowledgeItem.comments" name="txtComments" class="form-control" type="text" rows="3"></textarea>
                  </div>
                </div>

              </div>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
              <router-link to="/knowledgeRepo">
                <button id="btnknowledgeRepo" type="button" class="btn btn-default">Cancel</button>
              </router-link>
              <button v-on:click="saveknowledgeItem" type="button" class="btn btn-primary pull-right">Save Item</button>
              <ResponseMessages :serviceMessage="serviceMessages" ></ResponseMessages>
            </div>
          </div>
          <!-- /.box -->
        </div>
    </div>
  </section>
<!-- /.content -->
</template>

<script>

import { VueEditor } from 'vue2-editor'
import vSelect from 'vue-select'
import KnowledgeRepo from '../../../api/knowledgeRepo.service.js'
import ResponseMessages from '../Utils/ResponseMessages'

export default {
  data () {
    return {
      knowledgeItem: {
        _id: '',
        title: '',
        summary: '',
        editorContent: '',
        comments: '',
        OptionsTagsSelected: []
      },
      OptionsTags: [],
      serviceMessages: {
        status: '',
        message: ''
      }
    }
  },
  methods: {
    addTag (newTag) {
      var self = this
      self.knowledgeItem.OptionsTagsSelected.push(newTag)
      self.OptionsTags.push(newTag)
    },
    saveknowledgeItem () {
      var self = this
      KnowledgeRepo.upsert(self.knowledgeItem)
       .then(x => {
         // Updates the id on the CLientSide
         self.knowledgeItem._id = x.message.objBiz._id
         self.serviceMessages = x
       })
       .catch(err => {
         self.serviceMessages = {
           status: false,
           message: { message: err.toString() }
         }
       })
    }
  },
  created () {
    var self = this
    // Gets the item if exists
    if (self.$route.params.id !== undefined) {
      KnowledgeRepo.selectById(self.$route.params.id)
       .then(x => {
         // Updates the id on the CLientSide
         self.knowledgeItem = x.message.objBiz
         self.serviceMessages = x
       })
       .catch(err => {
         self.serviceMessages = {
           status: false,
           message: { message: err.toString() }
         }
       })
    }
  },
  beforeCreate () {
    var self = this
    KnowledgeRepo.selectAllTags()
      .then(x => {
        // Updates the id on the ClientSide
        self.OptionsTags = x.message.objBiz
        self.serviceMessages = x
      })
      .catch(err => {
        self.serviceMessages = {
          status: false,
          message: { message: err.toString() }
        }
      })
  },
  components: {
    VueEditor: VueEditor,
    ResponseMessages: ResponseMessages,
    vSelect: vSelect
  }
}
</script>

<style>

</style>
