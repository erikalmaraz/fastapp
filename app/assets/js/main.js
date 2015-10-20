
window.onload = function() {

// Jquery code
    $('#erik_cruz').hover(function(){
        $('.first_right').addClass('inactive');
        $('.team_section').removeClass('inactive');
        $('#erik_cruz_team').removeClass('inactive');
        $('#silver_muñoz_team').addClass('inactive');
        $('#aaron_vergara_team').addClass('inactive');
    });
    $('#silver_muñoz').hover(function(){
        $('.first_right').addClass('inactive');
        $('.team_section').removeClass('inactive');
        $('#silver_muñoz_team').removeClass('inactive');
        $('#erik_cruz_team').addClass('inactive');
        $('#aaron_vergara_team').addClass('inactive');
    });
    $('#aaron_vergara').hover(function(){
        $('.first_right').addClass('inactive');
        $('.team_section').removeClass('inactive');
        $('#aaron_vergara_team').removeClass('inactive');
        $('#silver_muñoz_team').addClass('inactive');
        $('#erik_cruz_team').addClass('inactive');
    });
    $('.button_todas').click(function(){
        if ($('.item-portafolio')) {
            $('.empresarial').fadeIn();
            $('.basica').fadeIn();
            $('.personalizada').fadeIn();
        }
    });
    $('.button_basica').click(function(){
        if ($('.item-portafolio').hasClass('basica')) {
            $('.empresarial').fadeOut(125);
            $('.personalizada').fadeOut(125);
            $('.basica').fadeIn();
        }
    });
    $('.button_personalizada').click(function(){
        if ($('.item-portafolio').hasClass('personalizada')) {
            $('.empresarial').fadeOut(125);
            $('.basica').fadeOut(125);
            $('.personalizada').fadeIn();
        }
    });
    $('.button_empresarial').click(function(){
        if ($('.item-portafolio').hasClass('empresarial')) {
            $('.empresarial').fadeIn();
            $('.basica').fadeOut(125);
            $('.personalizada').fadeOut(125);
        }
    });
}

//Google maps API

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.3940919, lng:-99.1751099},
    zoom: 17,
    disableDefaultUI: true
  });
  var companyPos = new google.maps.LatLng(19.3940919,-99.1751099);
    var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        title:"FastApp"
    });
}

// Routes AngularJS pricing

var app = angular.module('Price',['ngRoute']);
app.controller('Routes',function($scope){

});
app.config(function($routeProvider) {
  $routeProvider
          .when('/', {
              templateUrl : '/only_price.html',
              controller  : 'Routes'
          })
          .when('/basica', {
              templateUrl : 'price.html',
              controller  : 'Packb'
          })

          .otherwise({
              redirectTo: '/'
          });
  });
