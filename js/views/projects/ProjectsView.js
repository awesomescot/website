define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/projects/projectsTemplate.html'
], function($, _, Backbone, ProjectsTemplate){

  var ProjectsView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.nav li').removeClass('active');
      $('.nav li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(ProjectsTemplate);

    }

  });

  return ProjectsView;
  
});