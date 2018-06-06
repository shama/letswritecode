const Vue = require('vue')
const App = require('./App.vue')

const beardb = {
  'bear1': {
    name: 'Oliver',
    type: 'grizzly'
  },
  'bear3': {
    name: 'Sheryl',
    type: 'brown'
  },
  'bear55': {
    name: 'Frank',
    type: 'polar'
  },
}

new Vue({
  el: '#app',
  render: function (h) {
    return h(App, {
      props: {
        beardb: beardb
      }
    })
  }
})