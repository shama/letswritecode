import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return $.get('/bears.json');
  }
});
