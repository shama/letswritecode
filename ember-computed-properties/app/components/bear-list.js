import Ember from 'ember';

export default Ember.Component.extend({
  model: Ember.computed({
    set: function (key, bears) {
      return bears.map(function (bear) {
        bear.favorited = false;
        return Ember.Object.create(bear);
      });
    }
  }),
  totalBears: Ember.computed('model.[]', function () {
    return this.get('model.length');
  }),
  bears: Ember.computed('model.[]', 'page', function () {
    var page = this.get('page');
    return this.get('model').slice(page, page + 5);
  }),
  page: 0,
  favoritedBears: Ember.computed('model.@each.favorited', {
    get: function () {
      return this.get('model').filterBy('favorited', true).length;
    }
  }),
  actions: {
    showMore: function () {
      this.incrementProperty('page', 5);
    },
    favorite: function (bear) {
      bear.toggleProperty('favorited');
    }
  }
});
