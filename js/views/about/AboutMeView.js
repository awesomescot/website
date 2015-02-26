define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/about/aboutMeTemplate.html'
], function($, _, Backbone, AboutMeTemplate){

  var AboutMeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.nav li').removeClass('active');
      $('.nav li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(AboutMeTemplate);

    }

  });

  return AboutMeView;
  
});