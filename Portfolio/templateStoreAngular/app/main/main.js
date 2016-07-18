angular.module('templateStore.main',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/main',{
        templateUrl: 'main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
    })
    .when('/main/:itemId',{
        templateUrl: 'main/main-item.html',
        controller: 'MainItemCtrl',
        controllerAs: 'mainItemCtrl'
    })
    .otherwise({redirectTo:'/main'});
    
}])

.controller('MainCtrl',['$scope', '$http',function($scope,$http){
    
    $http.get('data_json/templates.json').success(function(data){
        $scope.items = data;
        
    });
}])
.controller('MainItemCtrl',['$scope', '$routeParams', '$http', '$filter',function($scope, $routeParams, $http, $filter){
    var itemId = $routeParams.itemId;
    $http.get('data_json/templates.json').success(function(data){
        $scope.item = $filter('filter')(data,function(d){
            return d.id == itemId;
        })[0];
        $scope.mainImage = $scope.item.images[0].name;
    });
    
    $scope.setImage = function(image){
        $scope.mainImage = image.name;
    }
}]);
