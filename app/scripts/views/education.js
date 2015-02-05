define([
  'jquery',
  'underscore',
  'backbone', 
  'text!../templates/education.html'
], function ($, _, Backbone, education_template) {
  'use strict';
  var EducationView = Backbone.View.extend({
    el: '.content',
    education_template: _.template(education_template),
    events: {
    },

    initialize: function (options) {
        // ---------------------------------
        // Add the options as part of the instance
        //_.extend(this, options);
    },

    render: function() {   
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.education_template());
    }
  });

  return EducationView;
});

