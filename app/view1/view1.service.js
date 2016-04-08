(function () {
    'use strict';

    angular
        .module('myApp.view1')
        .service('view1Service', view1Service);

    view1Service.$inject = ['$q'];

    function view1Service($q) {
        var mongodbUrl = '/';

        return {
            getAreaChartData: getAreaChartData,
            getDonutChartData: getDonutChartData
        };
        function getAreaChartData() {
            var returnData = {
                'deelnames': [],
                'scores':[]
            };

            returnData.deelnames = [20, 42, 15, 30, 8, 40, 20, 14, 11, 9];
            returnData.scores =[7, 4, 3, 5, 1, 6, 3, 2, 6, 4];
            //TODO remove lines above. Uncomment lines below
            // retrieveData('/deelnamesScores').then(function (res) {
            //     //TODO implement logic with retrieved data
            //     returnData.deelnames = res.deelnames;
            //     returnData.scores = res.scores;
            // });

            return returnData;
        }

        function getDonutChartData() {
            var returnData = [];

            for(var i = 1; i <= 7;i++){
                returnData.push({
                    name: 'Vraag ' + i,
                    y: 10.5
                });
            }
            //TODO remove lines above. Uncomment lines below
            // retrieveData('/goedeAntwoordenPerVraag').then(function (res) {
            //     //TODO implement logic with retrieved data
            //     returnData.deelnames = res.deelnames;
            //     returnData.scores = res.scores;
            // });
            return returnData;
        }
        
        function retrieveData(endpoint){
            var deferred = $q.defer();
            $http
                .get(mongodbUrl+endpoint)
                .success(function (res) {
                    deferred.resolve(res);
                })
                .error(function (data) {
                    deferred.reject();
                });
            return deferred.promise;
        }
    }
})();