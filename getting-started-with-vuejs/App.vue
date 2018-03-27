<template>
  <div>
    <BearList :bears="bears" @click="growl" />
    <BearList :bears="bears" />
    <button @click="addBear">Add Bear</button>
  </div>
</template>

<script>
const BearList = require('./BearList.vue')
module.exports = {
  data: function () {
    return {
      bears: [
        'grizzly',
        'polar',
        'brown'
      ]
    }
  },
  methods: {
    addBear: function () {
      this.bears.push('New Bear')
    },
    growl: function (msg, e) {
      console.log(msg, e)
    }
  },
  components: {
    BearList: BearList
  }
}
</script>