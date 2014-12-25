define(function(require, exports, module) {
  "use strict";

  var app = require("app");

  var View = Backbone.View.extend({

    tagName: "li",

    right_template: require("ldsh!./templates/right_template"),

    left_template: require("ldsh!./templates/left_template"),

    logo_template: require("ldsh!./templates/logo_template"),

    className: "document-row",

    events: {
      'click li.menu-item': 'menuClickItem'
    },

    initialize: function() {
      console.log('menu view...');
      $('section.top-bar-section > ul.right').html(this.right_template());
      $('section.top-bar-section > ul.left').html(this.left_template());
      $('nav.top-bar > ul.title-area').html(this.logo_template());
    },

    menuClickItem: function(e) {
      console.log(e);
    }
  });

  module.exports = View;
});
