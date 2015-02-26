define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, HomeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.nav li').removeClass('active');
      $('.nav li a[href="#"]').parent().addClass('active');
      this.$el.html(HomeTemplate);

    }

  });

  return HomeView;
  
});
