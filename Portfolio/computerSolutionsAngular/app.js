var app = angular.module("computerSolutions",['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
      
      $routeProvider.
      
      when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      });
      
      
      
    }])
    
    .controller('MainCtrl',[function(){
      
      console.log('this is the main controller');
    }]);