<template>
  <!-- Main content -->
  <section class="content">
    <div class="row">
      <SearchItem v-on:NewSeachItems="NewSeachItems"></SearchItem>
    </div>

    <div class="row">
      <knowledgeRepoListItem v-for="(item, index) in this.knowledgeItemList"
        :knowledgeListItem="item"
        :key= "item"
        v-on:removeknowledgeItem="removeknowledgeItem(index,item)" >
      </knowledgeRepoListItem>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link to="/knowledgeRepoItem">
          <button id="btnActivityLogItem" type="button" class="btn btn-info">Create New knowledge Item</button>
        </router-link>
      </div>
    </div>
    <!-- /.row -->
  </section>
  <!-- /.content -->

</template>

<script>
import knowledgeRepoListItem from './knowledgeRepoListItem'
import KnowledgeRepo from '../../../api/knowledgeRepo.service.js'
import SearchItem from '../Search/SearchItem.vue'

export default {
  data () {
    return {
      knowledgeItemList: [{
        _id: 'sdfsdf',
        title: 'sdfsdf',
        summary: 'sfsdf',
        editorContent: 'sdfsdf',
        comments: 'sdsdf',
        OptionsTagsSelected: ['css', 'cs456s', 'csrters', 'cssasd']
      }]
    }
  },
  methods: {
    removeknowledgeItem (index) {
      var self = this
      self.knowledgeItemList.splice(index, 1)
    },
    NewSeachItems (itemsSearch) {
      var self = this
      self.knowledgeItemList = itemsSearch
    }
  },
  created () {
    var self = this
    KnowledgeRepo.selectAll()
     .then(x => {
       // Updates the id on the CLientSide
       self.knowledgeItemList = x.message.objBiz
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
    knowledgeRepoListItem: knowledgeRepoListItem,
    SearchItem: SearchItem
  }
}
</script>

<style>

</style>
