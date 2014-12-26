define(function(require, exports, module) {
  "use strict";

  module.exports = {
    Collection: require("./collection"),
    View: {
    	single: require("./views/single"),
    	Multiple: require("./views/multiple")
    },
    Model: require("./model")

  };
});
