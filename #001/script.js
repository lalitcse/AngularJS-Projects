var app = angular.module("computer", ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/main', {
    templateUrl: 'main.html',
    controller: 'mainCtrl'
  }).
  when('/about', {
    templateUrl: 'about.html',
    controller: 'mainCtrl'
  }).
  when('/services', {
    templateUrl: 'services.html',
    controller: 'serviceCtrl'
  }).
  when('/contact', {
    templateUrl: 'contact.html',
    controller: 'contactCtrl'
  }).
  otherwise({ redirectTo: '/main'})
}])


.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])
.controller('serviceCtrl', ['$scope', '$http' ,function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])
.controller('contactCtrl', ['$scope','$http' ,function($scope, $http){
  $http.get('locations.json').then(function(response){
    $scope.locations = response.data;
  });
}]);