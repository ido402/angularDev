angular.module('noteWrangler').config(function($routeProvider){
    
    $routeProvider.when('/notes',{
        templateUrl: 'templates/pages/notes/index.html',
        controller: 'NotesIndexController',
        controllerAs: 'indexController'
    })
    .when ('/users',{
        templateUrl: 'templates/pages/users/index.html', 
    })
    .when ('/', {
        templateUrl: 'templates/pages/notes/index.html',
    })
    .otherwise({redirectTo: '/'});
       
});