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
    // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyCWCoPEqlroXldyjL1SOFB3MHUpNj56inc",
      authDomain: "mycontacts-97c73.firebaseapp.com",
      databaseURL: "https://mycontacts-97c73.firebaseio.com",
      storageBucket: "mycontacts-97c73.appspot.com",
    };
    firebase.initializeApp(firebaseConfig);

    var ref = firebase.database().ref();

    $scope.contacts = $firebaseArray(ref);
    console.log($scope.contacts);


    $scope.showAddForm = function(){
      $scope.addFormShow = true;
    }
    $scope.hideAddForm = function(){
      $scope.addFormShow = false;
    }


}]);
