'use strict';

(function(){

	var app = angular.module('myContacts', ['ngRoute','myContacts.contacts']); 
	// Declare app level module which depends on views, and components
	

	app.config(['$routeProvider', function($routeProvider) {
		  $routeProvider
		  .when('/contacts',{
		    templateUrl:'scripts/contacts/contacts.html',
		    controller: 'ContactsCtrl',
		    controllerAs: 'contactsCtrl'
		  })
		 .otherwise({redirectTo:'/contacts'});
	}]);

})();