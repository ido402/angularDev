'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStore', [
  'ngRoute',
  'templateStore.view1',
  'templateStore.view2',
  'templateStore.main'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  

  $routeProvider.otherwise({redirectTo: '/main'});
}]);