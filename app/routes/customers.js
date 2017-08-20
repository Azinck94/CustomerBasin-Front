import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      customers:

    });
  },

  setupController: function(controller, models) {
    return controller.setProperties(models);
  }

})
