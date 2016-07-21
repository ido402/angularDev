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
//Contacts Controller
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

    //Show form function
    $scope.showAddForm = function(){
      $scope.addFormShow = true;
    }
    //hide from function
    $scope.hideAddForm = function(){
      $scope.addFormShow = false;
    }

    //Form submition function
    $scope.addFormSubmit = function(){
      console.log('test adding');

      //Assign values to create new contact.
      if($scope.name) { var name = $scope.name;} else { var name=null;}
      if($scope.email) { var email = $scope.email;} else { var email=null;}
      if($scope.company) { var company = $scope.company;} else { var company=null;}
      if($scope.work_phone) { var work_phone = $scope.work_phone;} else { var work_phone=null;}
      if($scope.mobile_phone) { var mobile_phone = $scope.mobile_phone;} else { var mobile_phone=null;}
      if($scope.home_phone) { var home_phone = $scope.home_phone;} else { var home_phone=null;}
      if($scope.street_address) { var street_address = $scope.street_address;} else { var street_address=null;}
      if($scope.city) { var city = $scope.city;} else { var city=null;}
      if($scope.state) { var state = $scope.state;} else { var state=null;}
      if($scope.zip_code) { var zip_code = $scope.zip_code;} else { var zip_code=null;}

      //build object in JSON format
      $scope.contacts.$add({
        name: name,
        email: email,
        company: company,
        phones: [{
            mobile: mobile_phone,
            home: home_phone,
            work: work_phone
          }],
        address: [{
          street_address: street_address,
          city: city,
          state: state,
          zipcode: zip_code
        }]
      }).then(function(ref){
        debugger;
        var id = ref.key();
        console.log('Added a contact with ID:'+id);

        //clearing for
        clearFields();

        //hide form after submission
        $scope.addFormShow = false;

      });


    }



}]);
