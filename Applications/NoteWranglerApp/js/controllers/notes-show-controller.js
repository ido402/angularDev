/*
angular.module('noteWrangler')
.controller('NotesShowController', ['$http', function($http){

   var library= this;
    library.notes = [];
    
    $http({method:'GET',url:'js/data/data.json'});

    $http.get('').success( function(data) {

         library.notes = data;
    });    
}]);
*/

angular.module('noteWrangler')
 .controller('NotesShowController', function($http, $routeParams){
    
    var controller = this;
    
    $http({method: 'GET' ,url:'js/data/data.json'})
        .success(function(data){
            controller.notes = data;
    })
    
});
