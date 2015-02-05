/*global define*/
define([
  'jquery',
  'backbone',
  'views/education',
  'views/home',
  'views/aboutus'
], function ($, Backbone, educationView, homeView, aboutusView) {
  'use strict';

  var EducationView = new educationView(),
	  HomeView = new homeView(),
    AboutUsView = new aboutusView(),
    Router = Backbone.Router.extend({
      routes: {
          '':     'home',
          'home': 'home',
          'education': 'education',
          'aboutus': 'aboutus'
      },

      initialize: function() {
      },

      home: function() {
          HomeView.render();
      },

      education: function() {
          EducationView.render();
      },

      aboutus: function() {
          AboutUsView.render();
      },

      event: function() {
          //HeaderView.render(1);
          //EventView.render();
          //window.location = '#event';
      },

      awards: function() {
          //HeaderView.render(2);
          //AwardsView.render();
          //window.location = '#awards';
      }
  });
  return Router;
});


