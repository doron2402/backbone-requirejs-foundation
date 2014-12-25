define(function(require, exports, module) {
  "use strict";

  var app = require("app");

  var View = Backbone.View.extend({

    template: require("ldsh!./template"),

    events: {

    },

    initialize: function(options) {
      console.log('menu view...');
      console.log('options');
      console.log(options);
      this.$el.html(this.template({
        text: "ASDFASDFASDFSAD",
        anotherText: "anotherText"
      }));
    },

    menuClickItem: function(e) {
      console.log(e);
    }
  });

  module.exports = View;
});
