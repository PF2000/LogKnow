<template>
  <div class="content">
    <div class="row">
      <RoutesItem v-for="(item, index) in this.responseMessage[1].children"
        :routeItem="item"
        :key= "item" >
      </RoutesItem>
    </div>
  </div>
</template>

<script>
import RoutesItem from './RoutesItem'
import routes from './../../../routes.js'

export default {
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
    var self = this

    self.responseMessage = routes
  },
  components: {
    routes: routes,
    RoutesItem: RoutesItem
  }
}
</script>

<style>

</style>
