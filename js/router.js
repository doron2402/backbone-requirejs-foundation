define(function(require, exports, module) {
  "use strict";

  var app = require("app");
  console.log('asdf');
  require('foundation');

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    initialize: function() {
      console.log('init router...');
    },

    routes: {
      "": "index",
      "!/say/:something": "saySomething",
      "*actions": "defaultRoute"
    },

    // Shortcut for building a url.
    go: function() {
      return this.navigate(_.toArray(arguments).join("/"), true);
    },

    index: function() {
      console.log('index...');
    },

    saySomething: function(something) {
      console.log(something);
    },

    defaultRoute: function() {
      console.log('defaultRoute');
    }

  });

  module.exports = Router;
});
