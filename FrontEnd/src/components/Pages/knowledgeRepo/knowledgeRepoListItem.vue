<template>
  <div class="col-md-6">
     <!-- general form elements -->
     <router-link  :to="{ path: '/knowledgeRepoItem/' + knowledgeListItem._id }" >
       <div class="box box-primary">
         <div class="box-header with-border">
           <h3 class="box-title">{{ knowledgeListItem.title }}</h3>
         </div>
         <!-- /.box-header -->
         <div class="box-body">
           <div class="form-group">
             <label for="exampleInputEmail1">Tags</label>
             <vSelect v-model="knowledgeListItem.OptionsTagsSelected" multiple :disabled="true" :options="knowledgeListItem.OptionsTagsSelected"></vSelect>
           </div>
           <div class="form-group">
             <label for="exampleInputPassword1">Summary</label>
             <textarea readonly type="input" class="form-control" v-model="knowledgeListItem.summary" rows="2" ></textarea>
           </div>
         </div>
       </div>
    </router-link>
   </div>
</template>

<script>
import vSelect from 'vue-select'

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
