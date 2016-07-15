'use strict';

/*
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
*/
(function () {


    var app = angular.module('gemStore', ['ngRoute','storeProducts']);

    app.controller('StoreController', ['$http', function($http){
        
       var store= this;
        store.products = [];
            
        $http.get('/Content/Scripts/App/product.json').success( function(data) {
            
            store.products = data;
        });    
    }]);
})();

