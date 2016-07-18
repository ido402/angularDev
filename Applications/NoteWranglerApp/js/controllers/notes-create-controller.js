angular.module('noteWrangler')
.controller('NotesCreateController', function($http){
    var controller = this;
    this.saveNote = function(note){
        
        $http({method:'POST',url: '/notes',data: note})
        .catch(function(note) {
            controller.errors = note.data.error;
        })
        
        
    }; 
});