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
    
    $scope.doughnutLabels = ["January", "February", "March"];
    $scope.doughnutSeries = ['Scores'];
    $scope.doughnutData = [
        65, 59, 80
    
        ];
  
  
}]);