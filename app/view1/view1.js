'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])





.controller('View1Ctrl', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['AverageScores', 'AmountOfTestTakers'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
        ];
    
    $scope.doughnutLabels = ["1", "2", "3", "4", "5", "6", "7"];
    $scope.doughnutSeries = ['Questions'];
    $scope.doughnutData = [
        65, 59, 80, 60, 40, 50, 10
    
        ];
        
 /*       function dataCtrl($scope, $timeout, Data) {
    $scope.data = [];

    (function tick() {
        $scope.data = Data.query(function(){
            $timeout(tick, 1000);
        });
    })();
    
};
 // Updates should be as follows:
$scope.data.push(value)
$scope.lables.push(label)
$scope.doughnutData = newArray
  */
  
}]);