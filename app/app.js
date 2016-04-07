'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'chart.js'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.config(['ChartJsProvider', function (ChartJsProvider) {
// Configure all charts
ChartJsProvider.setOptions({
    colours: ['#1992c5', '#556367', '#18559e', '#57a2bc', '#a7b65b', '#134154', '#18ed5ed'],
    responsive: false
});
}]);
