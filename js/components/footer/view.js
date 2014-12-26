define(function(require, exports, module) {
  "use strict";

  var app = require("app");

  var View = Backbone.View.extend({

    template: require("ldsh!./templates/template"),

    className: "document-row",

    events: {

    },

    initialize: function() {
      console.log('footer view...');
      this.$el.html(this.template())
    },

  });

  module.exports = View;
});
