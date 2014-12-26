define(function(require, exports, module) {
  "use strict";

  var app = require("app");

  var View = Backbone.View.extend({

    template: require("ldsh!../templates/multiple_template"),

    events: {

    },

    initialize: function(options) {
      console.log(this.$el);
      var resturantsCollection = [
        {
          id: 1,
          name: 'adsfasdf'
        },
        {
          id: 1,
          name: 'adsfasdf'
        },
        {
          id: 1,
          name: 'adsfasdf'
        }
      ];
      this.$el.html(this.template({resturantsCollection: resturantsCollection}));
    },

  });

  module.exports = View;
});
