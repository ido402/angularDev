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
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })      
      .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .otherwise({redirectTo:'/main'});

    }])
    
    .controller('MainCtrl',['$scope',function($scope){
      
      console.log($scope);
    }]);