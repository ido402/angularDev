'use strict';

// Declare app level module which depends on views, and components
angular.module('myContacts.contacts', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/contacts',{
    templateUrl:'scripts/contacts/contacts.html',
    controller: 'ContactsCtrl',
    controllerAs: 'contactsCtrl'
  })
  .otherwise({redirectTo: '/contacts'});

}])

.controller('ContactsCtrl',['$scope','$firebaseArray',function($scope,$firebaseArray){
    console.log($scope);
}]);
