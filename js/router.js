define(function(require, exports, module) {
  "use strict";

  var app = require("app");
  require("foundation");

  var Menu = require("./components/menu/index");
  var subMenu = require("./components/subMenu/index");
  var Footer = require("./components/footer/index");
  var Resturants = require("./components/resturants/index");

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    initialize: function() {
      this.baseView();
    },

    routes: {
      "": "index",
      "resturants": "goToResturantsPage",
      "resturants/:resturant_id": "resturantsPage",
      "*actions": "defaultRoute"
    },
    baseView: function() {
      var menuView = new Menu.View();
      var subMenuView = new subMenu.View({ el: $(".sub-menu") });
      var footerView = new Footer.View({ el: $("footer") });
    },

    // Shortcut for building a url.
    go: function() {
      return this.navigate(_.toArray(arguments).join("/"), true);
    },

    index: function() {
      console.log('index...');

    },

    goToResturantsPage: function() {
      console.log('here...goToResturantsPage');
      var resturantsView = new Resturants.View.Multiple({ el: '.main-body' });
    },

    resturantsPage: function(resturant_id) {
      console.log('load resturant page by id' + resturant_id);
    },

    defaultRoute: function() {
      console.log('defaultRoute');
      var menuView = new Menu.View({ el: $("#menu-view") });
    }

  });

  module.exports = Router;
});
