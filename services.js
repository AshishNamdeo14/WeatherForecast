// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York";
    
});

weatherApp.service('weatherAppService',[ '$resource' ,function($resource) {
   
    this.city = "New York";
    this.getWeather = function(Url){
    var weatherAPI = $resource(Url,  { get: { method: "JSONP" }});
    return weatherAPI.get();
   } 
}]);