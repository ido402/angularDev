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
    //Show form function
    $scope.showEditForm = function(contact){
      $scope.editFormShow = true;

      $scope.name = contact.name;
      $scope.company = contact.company;
      $scope.email = contact.email;
      $scope.work_phone = contact.phones[0].work;
      $scope.mobile_phone = contact.phones[0].mobile;
      $scope.home_phone = contact.phones[0].home;
      $scope.street_address = contact.address[0].street_address;
      $scope.city = contact.address[0].city;
      $scope.state = contact.address[0].state;
      $scope.zipcode = contact.address[0].zipcode;

    }
    //hide from function
    $scope.hideAddForm = function(){
      $scope.addFormShow = false;
      $scope.contactShow = false;
    }




    //Form submition function
    $scope.addFormSubmit = function(){
      console.log('Adding contact');

      //Assign values to create new contact.
      if($scope.name) { var name = $scope.name;} else { var name="";}
      if($scope.email) { var email = $scope.email;} else { var email="";}
      if($scope.company) { var company = $scope.company;} else { var company="";}
      if($scope.work_phone) { var work_phone = $scope.work_phone;} else { var work_phone="";}
      if($scope.mobile_phone) { var mobile_phone = $scope.mobile_phone;} else { var mobile_phone="";}
      if($scope.home_phone) { var home_phone = $scope.home_phone;} else { var home_phone="";}
      if($scope.street_address) { var street_address = $scope.street_address;} else { var street_address="";}
      if($scope.city) { var city = $scope.city;} else { var city="";}
      if($scope.state) { var state = $scope.state;} else { var state="";}
      if($scope.zip_code) { var zip_code = $scope.zip_code;} else { var zip_code="";}
      debugger;
      //build object in JSON format
      $scope.contacts.$add({
        contact_id: ref.key,
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
        var id2 = ref.push().key;
        var id = ref.key;
        console.log('Added a contact with ID:' +id);
         $scope.contacts.$indexFor(id);

        //clearing for
        clearFields();

        //hide form after submission
        $scope.addFormShow = false;

        $scope.msg = "Contact was Added to the Database";

      });


    }

    $scope.editFormSubmit = function(){
      console.log('Updating Contact...');

      debugger;

      //get Id from Server

      var id = $scope.id;

      //get record
      var record;

      $scope.contacts.$loaded().then(function() {
         // Broadcast your post and catch up at any controller
          record = $scope.contacts.$getRecord(id);
      });



    }


    //show contact function
    $scope.showContact = function(contact){
      console.log("Showing contact...");

      $scope.name = contact.name;
      $scope.company = contact.company;
      $scope.email = contact.email;
      $scope.work_phone = contact.phones[0].work;
      $scope.mobile_phone = contact.phones[0].mobile;
      $scope.home_phone = contact.phones[0].home;
      $scope.street_address = contact.address[0].street_address;
      $scope.city = contact.address[0].city;
      $scope.state = contact.address[0].state;
      $scope.zipcode = contact.address[0].zipcode;


      $scope.contactShow = true;
    }


    function clearFields(){
      console.log ('Clearing form fields...');

      $scope.name = '';
      $scope.email = '';
      $scope.company = '';
      $scope.home_phone = '';
      $scope.mobile_phone = '';
      $scope.work_phone = '';
      $scope.street_address = '';
      $scope.city = '';
      $scope.state = '';
      $scope.zip_code = '';
    }



}]);