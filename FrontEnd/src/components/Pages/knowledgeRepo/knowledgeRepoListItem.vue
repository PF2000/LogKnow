<template>
  <div class="col-md-6">
     <!-- general form elements -->
       <div class="box box-primary">
         <div class="box-header with-border">
           <h3 class="box-title">{{ knowledgeListItem.title }}</h3>
           <div class="col-xs-1 pull-right">
               <button @click="remove" type="button" class="btn btn-danger fa fa-times" ></button>
           </div>
         </div>
         <!-- /.box-header -->
         <div class="box-body">
           <router-link  :to="{ path: '/knowledgeRepoItem/' + knowledgeListItem._id }" >
             <div class="form-group">
               <label for="exampleInputEmail1">Tags</label>
               <vSelect v-model="knowledgeListItem.OptionsTagsSelected" multiple :options="knowledgeListItem.OptionsTagsSelected"></vSelect>
             </div>
             <div class="form-group">
               <label for="exampleInputPassword1">Summary</label>
               <textarea type="input" class="form-control" v-model="knowledgeListItem.summary" rows="2" ></textarea>
             </div>
           </router-link>
         </div>
       </div>
   </div>
</template>

<script>
import vSelect from 'vue-select'
import KnowledgeRepo from '../../../api/knowledgeRepo.service.js'

export default {
  props: {
    knowledgeListItem: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selected: null
    }
  },
  methods: {
    remove: function () {
      var self = this
      KnowledgeRepo.deleteById(self.knowledgeListItem._id)
       .then(x => {
         // Updates the id on the CLientSide
         self.serviceMessages = x
         // to remove from the list
         this.$emit('removeknowledgeItem')
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

  },
  components: {
    vSelect: vSelect
  }
}
</script>

<style>

</style>
