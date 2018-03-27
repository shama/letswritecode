<template>
  <ul>
    <li v-for="bear in bears" @click="click(bear, $event)">
      {{bear}}
    </li>
  </ul>
</template>

<script>
module.exports = {
  props: ['bears'],
  methods: {
    click: function (bear, e) {
      const msg = bear + ' has growled.'
      this.$emit('click', msg, e)
    }
  }
}
</script>