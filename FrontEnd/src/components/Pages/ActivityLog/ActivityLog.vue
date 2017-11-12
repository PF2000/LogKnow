<template>
  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-md-12">

      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link to="/ActivityLogItem">
          <button id="btnActivityLogItem" type="button" class="btn btn-info">Create New Log</button>
        </router-link>
      </div>
    </div>
    <!-- /.row -->
  </section>
  <!-- /.content -->


</template>

<script>

export default {
  data () {
    return {

      responseSuccess: false,
      responseError: false
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
