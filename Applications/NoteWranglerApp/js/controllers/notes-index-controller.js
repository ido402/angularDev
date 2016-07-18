/*

angular.module('noteWrangler')
.controller('NotesIndexController', ['$http', function($http){

   var library= this;
    library.notes = [];

    $http.get('js/data/data.json').success( function(data) {

         library.notes = data;
    });    
}]);

*/

angular.module('noteWrangler')
.controller('NotesIndexController', function($http){
    var controller = this;
    $http({method:'GET',url:'js/data/data.json'}).success(function(data){
        controller.notes = data;
    });
    
});

