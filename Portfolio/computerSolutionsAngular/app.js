var app = angular.module("computerSolutions",['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
      
      $routeProvider.
      
      when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })      
      .when('/about', {
        templateUrl: 'about.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })      
      .when('/services', {
        templateUrl: 'services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'servicesCtrl'
      })      
      .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contactCtrl'
      })
      .otherwise({redirectTo:'/main'});

    }])
    
    .controller('ServicesCtrl',['$scope','$http',function($scope,$http){
       $http.get('services.json').then(function(response){
           $scope.services = response.data;
       });
    }]) 
    .controller('ContactCtrl',['$scope','$http',function($scope,$http){
       $http.get('locations.json').then(function(response){
           $scope.locations = response.data;
       });
    }])
 
    .controller('MainCtrl',['$scope','$http',function($scope,$http){
       $http.get('services.json').then(function(response){
           $scope.services = response.data;
       });
    }]);