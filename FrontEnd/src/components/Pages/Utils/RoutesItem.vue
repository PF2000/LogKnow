<template>
  <div>
      <div class="col-md-3">
        <div class="form-group">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">{{ routeItem.name }} </h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Name : </label> {{  routeItem.meta.description }}
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Virtual Path : </label> {{ routeItem.path }}
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Physical Path</label>
                <p > {{ routeItem.component.__file.split('src')[1] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props: {
    routeItem: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      responseSuccess: false,
      responseError: false,
      responseMessage: 'sdf'
    }
  },
  methods: {

  },
  created () {
  }
}
</script>

<style>

</style>
