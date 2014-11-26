require.config({
    baseUrl: 'assets/js',

    paths: {
        jquery:     'libs/jq',
        underscore: 'libs/underscore-min',
        backbone:   'libs/backbone-min',
        backboneExt:'libs/backbone.ext',
        marionette: 'libs/backbone.marionette.min',
        moment:     'libs/moment',
        leaflet:     'libs/leaflet',
        text:       'libs/text',
        i18n:       'libs/i18n'
    },

    shim: {
        'i18n': {
            deps: ['jquery'],
            exports: 'jQuery'
        },

        'backbone': {
            deps: ['underscore', 'jquery', 'moment', 'i18n', 'leaflet'],
            exports: 'Backbone'
        },

        'backboneExt': {
            deps: ['backbone'],
            exports: 'Backbone'
        },

        'underscore': {
            exports: '_'
        },

        'marionette': {
            deps: ['backboneExt'],
            exports: 'Marionette'
        }
    }
});

require(["app/app", "app/router", "locale/localization"], function (MyApp, MyAppRouter, resources) {

    var MyApp = new MyApp;

    window.MyApp = MyApp;

    MyApp.addInitializer(function(options) {
        // Init localization
        i18n.init({
            resStore: resources, lng: "en-US"
        });

        // Add main layout
        MyApp.createLayout();

        // Start router
        new MyAppRouter();
        Backbone.history.start();

    });
    
    MyApp.start();

});