const Vue = require('vue')
const App = require('./App.vue')
new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})