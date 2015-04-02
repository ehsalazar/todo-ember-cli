import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createTodo: function(newTitle) {
      // create the new todo
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false
      });
      // clear the 'new todo' text field
      this.set('newTitle', '');
      // save the new model
      todo.save();
    }
  },

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return (remaining === 1) ? 'item' : 'items';
  }.property('remaining')
});
