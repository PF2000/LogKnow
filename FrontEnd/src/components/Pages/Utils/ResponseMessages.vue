<template>
  <div>
    <br />
    <div v-if="responseError" class="alert alert-danger alert-dismissable">
       <i class="fa fa-ban"></i>
       <b>Alert! </b>{{this.responseMessage}}
    </div>
    <!-- successMessage  -->
    <div v-if="responseSuccess" class="alert alert-success alert-dismissable">
      <i class="fa fa-check"></i>
      <b>Alert! </b> {{this.responseMessage}}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    serviceMessage: {
      type: Object,
      required: true
    }
  },
  watch: {
    serviceMessage: function () {
      var self = this
      self.updateStatus()
    }
  },
  data () {
    return {
      responseSuccess: false,
      responseError: false,
      responseMessage: ''
    }
  },
  methods: {
    updateStatus () {
      var self = this
      if (self.serviceMessage != null) {
        if (self.serviceMessage.status) {
          self.responseSuccess = true
          self.responseError = false
        } else {
          self.responseError = true
          self.responseSuccess = false
        }
        self.responseMessage = self.serviceMessage.message.message === '' ? 'Updated' : self.serviceMessage.message.message
      }
    }
  },
  created () {
  }
}
</script>

<style>

</style>
