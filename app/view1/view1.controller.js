(function () {
    'use strict';

    angular
        .module('myApp.view1')
        .controller('View1Controller', View1Controller);

    View1Controller.$inject = ['$timeout', 'view1Service'];

    function View1Controller($timeout, view1Service) {
        var vm = this;

        activate();

        /////////////////////////////////////////////////////

        function activate() {
            createAreaChart();
            createDonutChart();
        }

        function createAreaChart() {
            //Demo's van de charts: http://www.highcharts.com/demo
            Highcharts.chart('areaChart', {
                chart: {
                    type: 'area',
                    events: {
                        load: function () {
                            var series = this.series;
                            setInterval(function () {
                                console.log('Polling area chart data every 2 seconds');
                                var data = view1Service.getAreaChartData();
                                //colors werkt nog niet:(
                                data.deelnames.color = "#18ed5ed";
                                data.scores.color= "#1992c5";
                                series[0].setData(data.deelnames, true);
                                series[1].setData(data.scores, true);
                            }, 2000);
                        }
                    }
                },
                title: {
                    text: 'Aantal deelnemers en gemiddelde score'
                },
                subtitle: {
                    text: 'Capgemini IoT Tech Days 2016'
                },
                xAxis: {
                    allowDecimals: false
                },
                yAxis: {
                    title: {
                        text: 'Aantal'
                    }
                },
                tooltip: {
                    pointFormat: '{series.name}: {point.y:,.0f}'
                },
                plotOptions: {
                    area: {
                        pointStart: 8,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: 'Aantal deelnemers',
                    data: []
                }, {
                    name: 'Gemiddelde score',
                    data: []
                }]
            });
        }

        function createDonutChart() {
            //Demo's van de charts: http://www.highcharts.com/demo
            Highcharts.chart('donutChart', {
                chart: {
                    type: 'pie',
                    events: {
                        load: function () {
                            var series = this.series;
                            var colors = ["#1992c5", "#556367", "#18559e", "#57a2bc", "#a7b65b", "#134154", "#18ed5ed"];
                            setInterval(function () {
                                console.log('Polling donut chart data every 4 seconds');
                                var data = view1Service.getDonutChartData();
                                for (var i = 0; i < data.length; i++) {
                                    data[i].color = colors[i]
                                }
                                series[0].setData(data, true);
                            }, 4000);
                        }
                    }
                },
                title: {
                    text: 'Aantal goede antwoorden per vraag'
                },
                subtitle: {
                    text: 'Capgemini IoT Tech Days 2016'
                },
                plotOptions: {
                    pie: {
                        shadow: false,
                        center: ['50%', '50%']
                    }
                },
                series: [{
                    name: 'Aantal goede antwoorden per vraag',
                    data: [],
                    size: '80%',
                    innerSize: '60%'
                }]
            });
        }
    }
})();