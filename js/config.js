require.config({
    paths: {
        /* jQuery */
        'jquery': '../vendors/bower/jquery/dist/jquery.min',
        /* Foundation */
        'foundation': '../vendors/bower/foundation/js/foundation.min',
        /* Vendor Scripts */
        'jquery.cookie': '../vendors/bower/jquery.cookie/jquery.cookie',
        'fastclick': '../vendors/bower/fastclick/lib/fastclick',
        'modernizr': '../vendors/bower/modernizr/modernizr',
        'placeholder': '../vendors/bower/jquery-placeholder/jquery.placeholder',
        'backbone': '../vendors/bower/backbone/backbone',
        'underscore': '../vendors/bower/underscore/underscore-min',
        'lodash': '../vendors/bower/lodash/dist/lodash.min',
        'ldsh': '../vendors/bower/lodash-template-loader/loader',
        /* App */
    },
    shim: {
        /* Foundation */
        'foundation': {
            deps: ['jquery','modernizr'],
            exports: 'Foundation'
        },
        /* Vendor Scripts */
        'jquery.cookie': {
            deps: [
            'jquery'
            ]
        },
        'fastclick': {
            exports: 'FastClick'
        },
        'modernizr': {
            exports: 'Modernizr'
        },
        'placeholder': {
            exports: 'Placeholders'
        },
        "backbone": {
            // These are the two hard dependencies that will be loaded first.
            deps: ["jquery", "underscore"],

            // This maps the global `Backbone` object to `require("backbone")`.
            exports: "Backbone"
        },
    }
});
