'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])





.controller('View1Ctrl', ['$scope', function($scope) {
    
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Scores', 'Contesters'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
        ];
    
    $scope.pielabels = ["January", "February", "March"];
    $scope.pieseries = ['Scores'];
    $scope.piedata = [
        65, 59, 80
    
        ];
  
  
}]);