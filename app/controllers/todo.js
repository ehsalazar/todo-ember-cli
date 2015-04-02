import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    editTodo: function() {
      this.set('editTodo', true);
    }
  }
});
