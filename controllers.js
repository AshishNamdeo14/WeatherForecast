
// CONTROLLERS


weatherApp.controller('homeController', ['$scope', 'cityService','$location', function($scope, cityService,$location) {
    
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city; 
     })

    $scope.submit = function () {
        $location.path("/forecast")
    }
}]);


weatherApp.controller('forecastController', ['$scope', 'cityService','$resource','$sceDelegate','$sce','$http', 'weatherAppService',function($scope, cityService,$resource,$sceDelegate,$sce,$sceDelegateProvider ,$http,weatherAppService) {
    
    $scope.city = cityService.city;
    // $sceDelegateProvider.resourceUrlWhitelist(['^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?\(openweathermap|youtube)\.com(/.*)?$', 'self']);
    // $sceDelegateProvider.resourceUrlWhitelist([
    //     self,
    //     'https://api.openweathermap.org/**'
    // ])


   
    
    // $http.get("http://api.weatherapi.com/v1/current.json?key=5dd73967e7464ed8ad5185200230104&q=London").then(function(prd)
    // {
    //     $scope.prd = prd.data;
    // });
    // console.log("",$scope.weatherAPI);
    // $resource("https://http://api.weatherapi.com/v1/current.json",{callback: "JSON_CALLBACK"},{get:{method:"JSONP"}})
    // $scope.weatherResult = $scope.weatherAPI.get({key:"5dd73967e7464ed8ad5185200230104",q:$scope.city})
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });

    console.log("vity",$scope.city);
    var Url = 'https://api.openweathermap.org/data/2.5/weather?q='+ $scope.city + '&appid=2fce26b3009e0a66de8c0a0223800869'
    console.log("Url",Url)

    
    $scope.weatherResult = weatherAppService(Url)

    $scope.convertToFer = function(degk){
   return Math.round((1.8 * (degk- 273) +32))
    }

    $scope.convertToDate = function(date){
        return new Date(date * 1000)
         }
    
    // async function funcToGetData(url){
    //     const response = await fetch(url);
    //     var data = await response.json();
    //     }

    //     funcToGetData(Url)

    //     console.log(data)
    // fetch(Url)
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log(data,"yp")});


    // $scope.trustSrc = function(weatherResult) {
    //     return $sce.trustAsResourceUrl(weatherResult);
    //   };

    console.log("Intiated",$scope.weatherResult)
    
}]);
