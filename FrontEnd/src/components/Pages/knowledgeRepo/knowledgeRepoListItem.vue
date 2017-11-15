<template>
  <div class="col-md-6">
     <!-- general form elements -->
       <div class="box box-success box-solid">
         <div class="box-header with-border">
           <h3 class="box-title">{{ knowledgeListItem.title }}</h3>
           <div class="box-tools pull-right">
               <button @click="remove" type="button" class="btn btn-box-tool fa fa-times" ></button>
           </div>
         </div>
         <!-- /.box-header -->
         <div class="box-body">
           <router-link  :to="{ path: '/knowledgeRepoItem/' + knowledgeListItem._id }" >
             <div class="form-group">
               <label for="exampleInputEmail1">Tags</label>
               <p>
                 <h3>
                    <span class="label label-warning" style="margin-left:3px" v-for="item in knowledgeListItem.OptionsTagsSelected">
                        {{  item }}
                    </span>
                  </h3>
               </p>
             </div>
             <hr />
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
         self.$emit('removeknowledgeItem')
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

  }
}
</script>

<style>

</style>
