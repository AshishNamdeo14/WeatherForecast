// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


//Directives

weatherApp.directive('weatherApp',function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace:true,
        scope:{
            convertToDates:"&",
            dateFormate: "@",
            convertToFernate:"&",
            weatherDay: '='
        }
    }
})