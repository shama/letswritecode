<template>
  <div>
    <button @click="flipSort">Flip Sort</button>
    <ul>
      <li v-for="bear in bears" :key="bear.id">
        {{bear.name}}
      </li>
    </ul>
    <button @click="newBear">New Bear</button>
  </div>
</template>

<script>
module.exports = {
  props: ['beardb'],
  data() {
    return {
      sort: 1,
      rawBears: this.beardb
    }
  },
  computed: {
    bears: {
      get() {
        console.log('HELLO!')
        const result = Object.keys(this.rawBears).map((id) => {
          const bear = this.rawBears[id]
          bear.id = id
          return bear
        })
        result.sort((a, b) => {
          return a.name.localeCompare(b.name) * this.sort
        })
        return result
      },
      set(newValue) {
        this.$set(this.rawBears, 'autoid', {
          name: newValue
        })
      }
    }
  },
  watch: {
    bears(newValue, oldValue) {

    }
  },
  methods: {
    flipSort() {
      this.sort = this.sort === 1 ? -1 : 1
    },
    newBear() {
      this.bears = 'Ozma'
      // this.$set(this.rawBears, 'newid', {
      //   name: 'Steve'
      // })
      // this.rawBears = Object.assign({}, this.rawBears, {
      //   'newid': {
      //     name: 'Steve'
      //   }
      // })
      // this.beardb['newid'] = {
      //   name: 'Steve'
      // }
      // delete this.beardb['bear1']
    }
  }
}
</script>