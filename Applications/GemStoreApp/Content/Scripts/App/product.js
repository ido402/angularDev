  

(function(){
    
    var app = angular.module('storeProducts',[])
    app.controller("PanelController", function(){
       this.tab =1; //init value of the nav tabs.
       
       this.selectTab = function(setTab){
           this.tab = setTab;
       };
       
       this.isSelected = function(checkTab){
           return this.tab === checkTab;
       };
       
       
   }); 
    
    app.controller('ReviewController',function(){
        
        this.review = {};
        
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
        
    });
                 
    app.directive('productTitle', function(){
         
         return {
             restrict:'E', /* use A for attribute*/
             templateUrl:'Content/Scripts/App/directives/product-title.html'
         };
         
     });  
    
    app.directive('productPanels', function(){  
         return {
             restrict:'E', /* use A for attribute*/
             templateUrl:'Content/Scripts/App/directives/product-panels.html',
             controller:'PanelController',
             controllerAs:'panel'
         };
         
     });            
           
    
    
    
})();

      
             