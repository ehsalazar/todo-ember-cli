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
  }
});
